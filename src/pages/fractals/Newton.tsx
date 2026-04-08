import { useEffect, useRef, useState, useCallback } from 'react';
import { BackButton } from '../../components/Layout';
import { InfoPanel } from '../../components/InfoPanel';
import { fractals } from '../../data/fractals';
import type { FractalComponentProps } from '../../types/fractal';
import './Newton.css';

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

  vec2 cmul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }

  vec2 cdiv(vec2 a, vec2 b) {
    float denom = b.x * b.x + b.y * b.y;
    return vec2((a.x * b.x + a.y * b.y) / denom, (a.y * b.x - a.x * b.y) / denom);
  }

  vec2 f(vec2 z) {
    return cmul(z, cmul(z, z)) - vec2(1.0, 0.0);
  }

  vec2 df(vec2 z) {
    return 3.0 * cmul(z, z);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution.xy * 0.5) / min(u_resolution.x, u_resolution.y);
    
    vec2 c = uv * 4.0 / u_zoom + u_center;
    vec2 z = c;
    
    int iterations = 0;
    
    for (int i = 0; i < 500; i++) {
      if (i >= u_maxIterations) break;
      vec2 fz = f(z);
      if (dot(fz, fz) < 0.0001) break;
      vec2 dfz = df(z);
      z = z - cdiv(fz, dfz);
      iterations++;
    }
    
    float angle = atan(z.y, z.x);
    
    float t = float(iterations) / float(u_maxIterations);
    float timeFactor = u_time * u_colorSpeed;
    
    vec3 col;
    if (t < 0.05) {
      col = vec3(0.0, 0.0, 0.0);
    } else {
      if (u_colorScheme == 0) {
        col = vec3(
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 0.0),
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 2.094),
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 4.189)
        );
      } else if (u_colorScheme == 1) {
        col = vec3(
          0.5 + 0.5 * cos(angle * 2.0 + timeFactor),
          0.5 + 0.5 * cos(angle * 3.0 + timeFactor + 2.094),
          0.5 + 0.5 * cos(angle * 1.0 + timeFactor + 4.189)
        );
      } else if (u_colorScheme == 2) {
        float hue = angle / 6.28318 + timeFactor * 0.1;
        col = vec3(
          sin(hue * 6.28318) * 0.5 + 0.5,
          sin(hue * 6.28318 + 2.094) * 0.5 + 0.5,
          sin(hue * 6.28318 + 4.189) * 0.5 + 0.5
        );
      } else {
        col = vec3(
          0.5 + 0.5 * cos(angle + timeFactor),
          0.5 + 0.5 * cos(angle + timeFactor + 2.094),
          0.5 + 0.5 * cos(angle + timeFactor + 4.189)
        ) * 0.3 + vec3(0.1, 0.05, 0.15);
      }
    }
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function Newton({ showInfo, onToggleInfo }: FractalComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [, forceUpdate] = useState(0);
  const fractal = fractals.find(f => f.id === 'newton')!;
  
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

    let centerX = 0.0;
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
      const scale = 4.0 / zoom / Math.min(canvasEl.width, canvasEl.height);
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
    <div className="newton-page">
      <canvas ref={canvasRef} className="newton-canvas" />
      <div className="vignette" />
      
      <BackButton to="/" />
      <button className="info-toggle" onClick={onToggleInfo}>i</button>
      <InfoPanel fractal={fractal} isOpen={showInfo} onClose={onToggleInfo} />

      <div id="panelTab" onClick={() => setShowPanel(!showPanel)}>PARAMETERS</div>

      <div id="panel" className={showPanel ? 'open' : ''}>
        <div className="panel-title">Newton Fractal</div>
        <div className="panel-sub">Root-Finding · explorer</div>

        <div className="section-label">Color</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Scheme</span>
          </div>
          <select value={colorScheme} onChange={(e) => setColorScheme(parseInt(e.target.value))}>
            <option value="0">Triadic</option>
            <option value="1">Multi-Hue</option>
            <option value="2">Rainbow</option>
            <option value="3">Dark</option>
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
          <input type="range" min="20" max="300" step="10" value={maxIterations}
            onChange={(e) => setMaxIterations(parseInt(e.target.value))} />
        </div>
      </div>

      <div id="hint">drag to pan · scroll to zoom</div>
    </div>
  );
}
