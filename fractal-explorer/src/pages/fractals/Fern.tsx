import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { BackButton } from '../../components/Layout';
import { InfoPanel } from '../../components/InfoPanel';
import { fractals } from '../../data/fractals';
import type { FractalComponentProps } from '../../types/fractal';
import './Fern.css';

const P = {
  maxPoints: 800000,
  speed: 3,
  ramp: 1.06,
  variantIdx: 0,
  twist: 0.02,
  stemBias: 0.01,
  spread: 1.0,
  mutation: 0.0,
  ptSize: 0.022,
  opacity: 0.88,
  palette: 'green',
  colorShift: 0.0,
  spinSpeed: 0.18,
  camHeight: 5.0,
  fov: 60,
};

const SPEED_INIT = [100, 300, 700, 2000, 5000];
const SPEED_MAX = [500, 2000, 6000, 15000, 40000];

const BASE_VARIANTS = [
  { name: 'Classic Twist', transforms: [
    { m: [0,0,0, 0,0.16,0, 0,0,0],                            t: [0,0,0],    p: 0.01 },
    { m: [0.85,0.04,0.02, -0.04,0.85,0.02, -0.02,-0.02,0.85],t: [0,1.6,0],  p: 0.85 },
    { m: [0.20,-0.26,0.10, 0.23,0.22,0.05, -0.10,-0.05,0.20],t: [0,1.6,0],  p: 0.07 },
    { m: [-0.15,0.28,0.10, 0.26,0.24,0.05, 0.10,0.05,0.20],  t: [0,0.44,0], p: 0.07 },
  ]},
  { name: 'Spiral Fern', transforms: [
    { m: [0,0,0, 0,0.16,0, 0,0,0],                             t: [0,0,0],       p: 0.01 },
    { m: [0.82,0.04,0.12, -0.04,0.85,0.04, -0.12,-0.04,0.82], t: [0,1.6,0],     p: 0.85 },
    { m: [0.18,-0.24,0.15, 0.21,0.20,0.08, -0.15,-0.08,0.18], t: [0,1.6,0.5],   p: 0.07 },
    { m: [-0.13,0.25,0.15, 0.24,0.22,0.08, 0.15,0.08,0.13],   t: [0,0.44,-0.5], p: 0.07 },
  ]},
  { name: 'Canopy', transforms: [
    { m: [0,0,0, 0,0.18,0, 0,0,0],                              t: [0,0,0],           p: 0.01 },
    { m: [0.80,0.06,0.04, -0.06,0.82,0.04, -0.04,-0.04,0.80],  t: [0,1.5,0],         p: 0.80 },
    { m: [0.22,-0.28,0.20, 0.25,0.24,0.10, -0.20,-0.10,0.22],  t: [0.5,1.4,0.5],     p: 0.10 },
    { m: [-0.18,0.30,0.20, 0.28,0.26,0.10, 0.20,0.10,0.18],    t: [-0.5,0.36,-0.5],  p: 0.09 },
  ]},
];

interface Transform {
  m: number[];
  t: number[];
  p: number;
}

export function Fern({ showInfo, onToggleInfo }: FractalComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [spinning, setSpinning] = useState(true);

  const fractal = fractals.find(f => f.id === 'fern')!;

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x030805, 1);
    containerRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030805, 0.042);

    const camera = new THREE.PerspectiveCamera(P.fov, window.innerWidth / window.innerHeight, 0.01, 200);

    let isDragging = false;
    const prevMouse = { x: 0, y: 0 };
    let sph = { theta: 0, phi: Math.PI / 2.5, r: 18 };
    let tgt = { ...sph };

    const onMouseDown = (e: MouseEvent) => { isDragging = true; prevMouse.x = e.clientX; prevMouse.y = e.clientY; };
    const onMouseUp = () => isDragging = false;
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      tgt.theta -= (e.clientX - prevMouse.x) * 0.008;
      tgt.phi = Math.max(0.1, Math.min(Math.PI - 0.1, tgt.phi + (e.clientY - prevMouse.y) * 0.006));
      prevMouse.x = e.clientX;
      prevMouse.y = e.clientY;
    };
    const onWheel = (e: WheelEvent) => {
      tgt.r = Math.max(3, Math.min(50, tgt.r + e.deltaY * 0.02));
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('wheel', onWheel);

    function buildTransforms(): Transform[] {
      const base = BASE_VARIANTS[P.variantIdx];
      const stemP = P.stemBias;
      const rest = 1.0 - stemP;
      const baseRest = 1.0 - base.transforms[0].p;

      return base.transforms.map((bt, i) => {
        let p = i === 0 ? stemP : bt.p / baseRest * rest;
        let m = [...bt.m] as number[];
        let t = [...bt.t];

        if (i > 0) {
          const twistScale = P.twist / 0.02;
          m[2] *= twistScale; m[5] *= twistScale;
          m[6] *= twistScale; m[7] *= twistScale;
        }

        if (i === 2 || i === 3) {
          t[0] *= P.spread;
          t[2] *= P.spread;
        }

        if (P.mutation > 0) {
          for (let j = 0; j < 9; j++) {
            m[j] += (Math.random() * 2 - 1) * P.mutation * 0.5;
          }
        }

        return { m, t, p };
      });
    }

    function ptColor(y: number, z: number): [number, number, number] {
      const ht = Math.max(0, Math.min(1, y / 10));
      const dt = Math.max(0, Math.min(1, (z + 2) / 4));
      const cs = P.colorShift;

      switch (P.palette) {
        case 'green':
          return [0.04 + ht*0.15 + dt*0.05 + cs*0.1, 0.18 + ht*0.65 + dt*0.05, 0.02 + ht*0.08 + cs*0.05];
        case 'teal':
          return [0.02 + ht*0.05, 0.20 + ht*0.55 + cs*0.1, 0.15 + ht*0.55 + dt*0.1];
        case 'fire':
          return [0.30 + ht*0.65, 0.05 + ht*0.35 + cs*0.1, 0.00 + ht*0.05 + dt*0.08];
        case 'aurora':
          return [0.05 + ht*0.20 + Math.sin(ht*6.28+cs)*0.15, 0.25 + ht*0.45 + Math.cos(ht*4.0+cs)*0.15, 0.20 + ht*0.50 + Math.sin(ht*5.0+cs)*0.15];
        case 'mono':
          const v = 0.05 + ht*0.75 + dt*0.1 + cs*0.1;
          return [v, v, v];
        default:
          return [0.04 + ht*0.15, 0.18 + ht*0.65, 0.02 + ht*0.08];
      }
    }

    const MAX_ALLOC = 1500000;
    const allPositions = new Float32Array(MAX_ALLOC * 3);
    const allColors = new Float32Array(MAX_ALLOC * 3);

    let geo: THREE.BufferGeometry | null = null;
    let cloud: THREE.Points | null = null;
    let filled = 0;
    let batchSz = 700;
    let building = false;
    let ifsState: { x: number; y: number; z: number; tfs: Transform[]; cp: number[] } | null = null;

    function cumProb(tfs: Transform[]): number[] { let s = 0; return tfs.map(t => (s += t.p, s)); }

    function applyTransform(state: typeof ifsState) {
      if (!state) return;
      const r = Math.random();
      const ti = state.cp.findIndex(v => r < v);
      const { m, t } = state.tfs[ti];
      const { x, y, z } = state;
      state.x = m[0]*x + m[1]*y + m[2]*z + t[0];
      state.y = m[3]*x + m[4]*y + m[5]*z + t[1];
      state.z = m[6]*x + m[7]*y + m[8]*z + t[2];
    }

    const startBuild = () => {
      if (cloud) { 
        scene.remove(cloud); 
        if (cloud.material instanceof THREE.Material) cloud.material.dispose();
        cloud.geometry.dispose(); 
        cloud = null; 
        geo = null; 
      }

      filled = 0;
      batchSz = SPEED_INIT[P.speed - 1];
      building = true;

      const tfs = buildTransforms();
      ifsState = { x: 0, y: 0, z: 0, tfs, cp: cumProb(tfs) };
      for (let i = 0; i < 50; i++) applyTransform(ifsState);

      geo = new THREE.BufferGeometry();
      const posAttr = new THREE.BufferAttribute(allPositions, 3);
      const colAttr = new THREE.BufferAttribute(allColors, 3);
      posAttr.setUsage(THREE.DynamicDrawUsage);
      colAttr.setUsage(THREE.DynamicDrawUsage);
      geo.setAttribute('position', posAttr);
      geo.setAttribute('color', colAttr);
      geo.setDrawRange(0, 0);

      cloud = new THREE.Points(geo, new THREE.PointsMaterial({
        size: P.ptSize,
        vertexColors: true,
        transparent: true,
        opacity: P.opacity,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      cloud.position.set(0, -5, 0);
      scene.add(cloud);
    };

    function tickBuild() {
      if (!building || !geo || !ifsState || filled >= P.maxPoints) { building = false; return; }

      const n = Math.min(Math.round(batchSz), P.maxPoints - filled);
      const posAttr = geo.attributes.position as THREE.BufferAttribute;
      const colAttr = geo.attributes.color as THREE.BufferAttribute;

      for (let i = 0; i < n; i++) {
        applyTransform(ifsState);
        const idx = filled + i;
        allPositions[idx*3] = ifsState.x;
        allPositions[idx*3+1] = ifsState.y;
        allPositions[idx*3+2] = ifsState.z;
        const [r, g, b] = ptColor(ifsState.y, ifsState.z);
        allColors[idx*3] = r; allColors[idx*3+1] = g; allColors[idx*3+2] = b;
      }

      posAttr.addUpdateRange(filled * 3, n * 3);
      posAttr.needsUpdate = true;
      colAttr.addUpdateRange(filled * 3, n * 3);
      colAttr.needsUpdate = true;

      filled += n;
      geo.setDrawRange(0, filled);
      batchSz = Math.min(batchSz * P.ramp, SPEED_MAX[P.speed - 1]);
    }

    const fogPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshBasicMaterial({ color: 0x0a2a06, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false })
    );
    fogPlane.rotation.x = -Math.PI / 2;
    fogPlane.position.y = -5;
    scene.add(fogPlane);

    const clock = new THREE.Clock();
    let autoTheta = 0;

    function animate() {
      requestAnimationFrame(animate);
      const dt = clock.getDelta();

      tickBuild();

      if (spinning && !isDragging) {
        autoTheta += dt * P.spinSpeed;
        tgt.theta = autoTheta;
      } else if (isDragging) {
        autoTheta = tgt.theta;
      }

      sph.theta += (tgt.theta - sph.theta) * 0.06;
      sph.phi += (tgt.phi - sph.phi) * 0.06;
      sph.r += (tgt.r - sph.r) * 0.06;

      const sp = Math.sin(sph.phi);
      camera.position.set(
        sph.r * sp * Math.sin(sph.theta),
        sph.r * Math.cos(sph.phi) + P.camHeight,
        sph.r * sp * Math.cos(sph.theta)
      );
      camera.lookAt(0, P.camHeight - 1, 0);

      renderer.render(scene, camera);
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    startBuild();
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [spinning]);

  return (
    <div className="fern-page">
      <div className="vignette" />
      <BackButton to="/" />
      
      <div ref={containerRef} className="fern-canvas" />
      
      <button className="info-toggle" onClick={onToggleInfo}>i</button>
      <InfoPanel fractal={fractal} isOpen={showInfo} onClose={onToggleInfo} />

      <div id="panelTab" onClick={() => setShowPanel(!showPanel)}>PARAMETERS</div>

      <div id="panel" className={showPanel ? 'open' : ''}>
        <div className="panel-title">Barnsley Fern</div>
        <div className="panel-sub">3D IFS · parameter explorer</div>

        <div className="section-label">Shape</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Variant</span>
          </div>
          <select onChange={(e) => { P.variantIdx = parseInt(e.target.value); }}>
            <option value="0">Classic Twist</option>
            <option value="1">Spiral Fern</option>
            <option value="2">Canopy</option>
          </select>
        </div>

        <div className="section-label">Appearance</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Color Palette</span>
          </div>
          <select onChange={(e) => { P.palette = e.target.value; }}>
            <option value="green">Forest Green</option>
            <option value="teal">Deep Teal</option>
            <option value="fire">Ember Fire</option>
            <option value="aurora">Aurora</option>
            <option value="mono">Monochrome</option>
          </select>
        </div>

        <div className="section-label">Camera</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Spin Speed</span>
            <span className="param-value">{P.spinSpeed.toFixed(2)}</span>
          </div>
          <input type="range" min="0" max="0.8" step="0.01" value={P.spinSpeed} 
            onChange={(e) => { P.spinSpeed = parseFloat(e.target.value); }} />
        </div>

        <div className="section-label">Actions</div>
        <div className="btn-row">
          <button className={spinning ? 'active' : ''} onClick={() => setSpinning(!spinning)}>
            {spinning ? '⟳ Spin' : '⏸ Spin'}
          </button>
        </div>
      </div>

      <div id="progressWrap">
        <div id="orbitHint">drag to orbit · scroll to zoom</div>
      </div>
    </div>
  );
}
