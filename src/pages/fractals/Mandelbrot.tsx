import { useEffect, useRef, useState, useCallback } from 'react';
import { BackButton } from '../../components/Layout';
import { InfoPanel } from '../../components/InfoPanel';
import { fractals } from '../../data/fractals';
import type { FractalComponentProps } from '../../types/fractal';
import './Mandelbrot.css';

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_center;
  uniform float u_zoom;
  uniform int u_maxIterations;
  uniform float u_colorSpeed;
  uniform int u_colorScheme;

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution.xy * 0.5) / min(u_resolution.x, u_resolution.y);
    
    vec2 c = uv * 2.5 / u_zoom + u_center;
    
    vec2 z = vec2(0.0, 0.0);
    int iterations = 0;
    
    for (int i = 0; i < 1000; i++) {
      if (i >= u_maxIterations) break;
      if (dot(z, z) > 4.0) break;
      
      z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
      iterations++;
    }
    
    if (iterations >= u_maxIterations) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
      float log_zn = log(dot(z, z));
      float nu = log(log_zn / log(2.0)) / log(2.0);
      float t = float(iterations) + 1.0 - nu;
      
      float timeFactor = u_time * u_colorSpeed;
      vec3 col;
      
      if (u_colorScheme == 0) {
        col = vec3(
          sin(t * 0.789 + timeFactor),
          cos(t * 0.678 - timeFactor),
          sin(t * 0.543 + timeFactor * 0.7)
        );
      } else if (u_colorScheme == 1) {
        col = vec3(
          sin(t * 0.5 + timeFactor),
          cos(t * 0.5 + timeFactor),
          sin(t * 0.5 - timeFactor)
        );
      } else if (u_colorScheme == 2) {
        col = vec3(
          sin(t * 1.2 + timeFactor) * 0.5 + 0.5,
          sin(t * 1.5 + timeFactor + 2.094) * 0.5 + 0.5,
          sin(t * 0.8 + timeFactor + 4.189) * 0.5 + 0.5
        );
      } else {
        float gray = sin(t * 0.3 + timeFactor) * 0.5 + 0.5;
        col = vec3(gray * 0.3, gray * 0.5, gray);
      }
      
      gl_FragColor = vec4((col + 1.0) * 0.5, 1.0);
    }
  }
`;

export function Mandelbrot({ showInfo, onToggleInfo }: FractalComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [, forceUpdate] = useState(0);
  const fractal = fractals.find(f => f.id === 'mandelbrot')!;
  
  const paramsRef = useRef({
    colorScheme: 0,
    colorSpeed: 0.3,
    maxIterations: 100,
  });

  const colorScheme = paramsRef.current.colorScheme;
  const colorSpeed = paramsRef.current.colorSpeed;
  const maxIterations = paramsRef.current.maxIterations;

  const setColorScheme = useCallback((val: number) => {
    paramsRef.current.colorScheme = val;
    forceUpdate(n => n + 1);
  }, []);

  const setColorSpeed = useCallback((val: number) => {
    paramsRef.current.colorSpeed = val;
    forceUpdate(n => n + 1);
  }, []);

  const setMaxIterations = useCallback((val: number) => {
    paramsRef.current.maxIterations = val;
    forceUpdate(n => n + 1);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      alert('WebGL not supported');
      return;
    }

    const glContext = gl;

    function createShader(type: number, source: string) {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error(glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(vs: WebGLShader, fs: WebGLShader) {
      const program = glContext.createProgram();
      if (!program) return null;
      glContext.attachShader(program, vs);
      glContext.attachShader(program, fs);
      glContext.linkProgram(program);
      if (!glContext.getProgramParameter(program, glContext.LINK_STATUS)) {
        console.error(glContext.getProgramInfoLog(program));
        glContext.deleteProgram(program);
        return null;
      }
      return program;
    }

    const vertexShader = createShader(glContext.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(glContext.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(vertexShader, fragmentShader);
    if (!program) return;

    const positionBuffer = glContext.createBuffer();
    glContext.bindBuffer(glContext.ARRAY_BUFFER, positionBuffer);
    glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]), glContext.STATIC_DRAW);

    const positionLocation = glContext.getAttribLocation(program, 'position');
    const resolutionLocation = glContext.getUniformLocation(program, 'u_resolution');
    const timeLocation = glContext.getUniformLocation(program, 'u_time');
    const centerLocation = glContext.getUniformLocation(program, 'u_center');
    const zoomLocation = glContext.getUniformLocation(program, 'u_zoom');
    const maxIterationsLocation = glContext.getUniformLocation(program, 'u_maxIterations');
    const colorSpeedLocation = glContext.getUniformLocation(program, 'u_colorSpeed');
    const colorSchemeLocation = glContext.getUniformLocation(program, 'u_colorScheme');

    let centerX = -0.5;
    let centerY = 0.0;
    let zoom = 1.0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const canvasEl = canvas;
    const glEl = glContext;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = window.innerWidth * dpr;
      canvasEl.height = window.innerHeight * dpr;
      glEl.viewport(0, 0, canvasEl.width, canvasEl.height);
    }

    resize();
    window.addEventListener('resize', resize);

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseUp = () => isDragging = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      const scale = 2.5 / zoom / Math.min(canvasEl.width, canvasEl.height);
      centerX -= dx * scale;
      centerY += dy * scale;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
      zoom = Math.max(0.1, Math.min(1000000, zoom * zoomFactor));
    };

    canvasEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    canvasEl.addEventListener('wheel', onWheel, { passive: false });

    const startTime = Date.now();

    function render() {
      const time = (Date.now() - startTime) / 1000;

      glEl.useProgram(program);

      glEl.enableVertexAttribArray(positionLocation);
      glEl.bindBuffer(glEl.ARRAY_BUFFER, positionBuffer);
      glEl.vertexAttribPointer(positionLocation, 2, glEl.FLOAT, false, 0, 0);

      glEl.uniform2f(resolutionLocation, canvasEl.width, canvasEl.height);
      glEl.uniform1f(timeLocation, time);
      glEl.uniform2f(centerLocation, centerX, centerY);
      glEl.uniform1f(zoomLocation, zoom);
      glEl.uniform1i(maxIterationsLocation, paramsRef.current.maxIterations);
      glEl.uniform1f(colorSpeedLocation, paramsRef.current.colorSpeed);
      glEl.uniform1i(colorSchemeLocation, paramsRef.current.colorScheme);

      glEl.drawArrays(glEl.TRIANGLES, 0, 6);

      requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvasEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      canvasEl.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div className="mandelbrot-page">
      <canvas ref={canvasRef} className="mandelbrot-canvas" />
      <div className="vignette" />
      
      <BackButton to="/" />
      <button className="info-toggle" onClick={onToggleInfo}>i</button>
      <InfoPanel fractal={fractal} isOpen={showInfo} onClose={onToggleInfo} />

      <div id="panelTab" onClick={() => setShowPanel(!showPanel)}>PARAMETERS</div>

      <div id="panel" className={showPanel ? 'open' : ''}>
        <div className="panel-title">Mandelbrot Set</div>
        <div className="panel-sub">Complex Plane · explorer</div>

        <div className="section-label">Color</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Scheme</span>
          </div>
          <select value={colorScheme} onChange={(e) => setColorScheme(parseInt(e.target.value))}>
            <option value="0">Spectrum</option>
            <option value="1">Rainbow</option>
            <option value="2">Pastel</option>
            <option value="3">Monochrome</option>
          </select>
        </div>

        <div className="param">
          <div className="param-header">
            <span className="param-name">Animation Speed</span>
            <span className="param-value">{colorSpeed.toFixed(2)}</span>
          </div>
          <input type="range" min="0" max="2" step="0.01" value={colorSpeed}
            onChange={(e) => setColorSpeed(parseFloat(e.target.value))} />
        </div>

        <div className="section-label">Quality</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Max Iterations</span>
            <span className="param-value">{maxIterations}</span>
          </div>
          <input type="range" min="20" max="500" step="10" value={maxIterations}
            onChange={(e) => setMaxIterations(parseInt(e.target.value))} />
        </div>
      </div>

      <div id="hint">drag to pan · scroll to zoom</div>
    </div>
  );
}
