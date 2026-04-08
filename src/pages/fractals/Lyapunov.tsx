import { useEffect, useRef, useState, useCallback } from 'react';
import { BackButton } from '../../components/Layout';
import { InfoPanel } from '../../components/InfoPanel';
import { fractals } from '../../data/fractals';
import type { FractalComponentProps } from '../../types/fractal';
import './Lyapunov.css';

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
  uniform int u_iterations;
  uniform int u_colorScheme;
  uniform int u_pattern;

  float lyapunov(vec2 c) {
    float x = 0.5;
    float sum = 0.0;
    float n = 0.0;
    
    for (int i = 0; i < 100; i++) {
      float r = c.x;
      if (u_pattern == 0) {
        if (i % 5 >= 2) r = c.y;
      } else if (u_pattern == 1) {
        if (i % 6 >= 3) r = c.y;
      } else if (u_pattern == 2) {
        if (i % 7 >= 3) r = c.y;
      } else {
        int idx = i - (i / 10) * 10;
        if (idx == 2 || idx == 3 || idx == 5 || idx == 7 || idx == 8) r = c.y;
      }
      x = r * x * (1.0 - x);
    }
    
    for (int i = 0; i < 100; i++) {
      float r = c.x;
      if (u_pattern == 0) {
        if (i % 5 >= 2) r = c.y;
      } else if (u_pattern == 1) {
        if (i % 6 >= 3) r = c.y;
      } else if (u_pattern == 2) {
        if (i % 7 >= 3) r = c.y;
      } else {
        int idx = i - (i / 10) * 10;
        if (idx == 2 || idx == 3 || idx == 5 || idx == 7 || idx == 8) r = c.y;
      }
      x = r * x * (1.0 - x);
      float deriv = r * abs(1.0 - 2.0 * x);
      if (deriv > 0.001 && deriv < 10.0) {
        sum = sum + log(deriv);
        n = n + 1.0;
      }
    }
    
    if (n < 50.0) return 0.0;
    return sum / n;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 c = (uv - 0.5) * 4.0 / u_zoom + u_center;
    
    float lambda = lyapunov(c);
    
    vec3 col;
    if (u_colorScheme == 0) {
      if (lambda < 0.0) {
        float t = clamp(-lambda / 2.5, 0.0, 1.0);
        col = mix(vec3(0.02, 0.05, 0.15), vec3(0.0, 0.35, 0.65), t);
      } else {
        float t = clamp(lambda / 1.5, 0.0, 1.0);
        col = mix(vec3(0.85, 0.65, 0.1), vec3(1.0, 0.25, 0.0), t);
      }
    } else if (u_colorScheme == 1) {
      if (lambda < 0.0) {
        float t = clamp(-lambda / 2.5, 0.0, 1.0);
        col = mix(vec3(0.1, 0.02, 0.15), vec3(0.5, 0.0, 0.4), t);
      } else {
        float t = clamp(lambda / 1.5, 0.0, 1.0);
        col = mix(vec3(0.9, 0.8, 0.2), vec3(0.2, 0.6, 0.1), t);
      }
    } else if (u_colorScheme == 2) {
      if (lambda < 0.0) {
        float t = clamp(-lambda / 2.5, 0.0, 1.0);
        col = mix(vec3(0.02, 0.08, 0.08), vec3(0.0, 0.5, 0.5), t);
      } else {
        float t = clamp(lambda / 1.5, 0.0, 1.0);
        col = mix(vec3(0.7, 0.9, 0.3), vec3(0.3, 0.1, 0.0), t);
      }
    } else {
      float val = lambda < 0.0 ? clamp(-lambda / 2.0, 0.0, 1.0) : clamp(lambda / 1.5, 0.0, 1.0);
      col = vec3(val * 0.5 + 0.1);
    }
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function Lyapunov({ showInfo, onToggleInfo }: FractalComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [, forceUpdate] = useState(0);
  const fractal = fractals.find(f => f.id === 'lyapunov')!;
  
  const paramsRef = useRef({
    colorScheme: 0,
    iterations: 80,
    sequencePattern: 0,
  });

  const colorScheme = paramsRef.current.colorScheme;
  const iterations = paramsRef.current.iterations;
  const sequencePattern = paramsRef.current.sequencePattern;

  const setColorScheme = useCallback((val: number) => {
    paramsRef.current.colorScheme = val;
    forceUpdate(n => n + 1);
  }, []);

  const setIterations = useCallback((val: number) => {
    paramsRef.current.iterations = val;
    forceUpdate(n => n + 1);
  }, []);

  const setSequencePattern = useCallback((val: number) => {
    paramsRef.current.sequencePattern = val;
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
    const iterationsLocation = glContext.getUniformLocation(program, 'u_iterations');
    const colorSchemeLocation = glContext.getUniformLocation(program, 'u_colorScheme');
    const patternLocation = glContext.getUniformLocation(program, 'u_pattern');

    let centerX = 2.5;
    let centerY = 2.5;
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
      glEl.uniform1i(iterationsLocation, paramsRef.current.iterations);
      glEl.uniform1i(colorSchemeLocation, paramsRef.current.colorScheme);
      glEl.uniform1i(patternLocation, paramsRef.current.sequencePattern);

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
    <div className="lyapunov-page">
      <canvas ref={canvasRef} className="lyapunov-canvas" />
      <div className="vignette" />
      
      <BackButton to="/" />
      <button className="info-toggle" onClick={onToggleInfo}>i</button>
      <InfoPanel fractal={fractal} isOpen={showInfo} onClose={onToggleInfo} />

      <div id="panelTab" onClick={() => setShowPanel(!showPanel)}>PARAMETERS</div>

      <div id="panel" className={showPanel ? 'open' : ''}>
        <div className="panel-title">Lyapunov</div>
        <div className="panel-sub">Chaos · explorer</div>

        <div className="section-label">Color</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Scheme</span>
          </div>
          <select value={colorScheme} onChange={(e) => setColorScheme(parseInt(e.target.value))}>
            <option value="0">Blue-Yellow</option>
            <option value="1">Purple-Green</option>
            <option value="2">Teal-Orange</option>
            <option value="3">Grayscale</option>
          </select>
        </div>

        <div className="section-label">Pattern</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Sequence</span>
          </div>
          <select value={sequencePattern} onChange={(e) => setSequencePattern(parseInt(e.target.value))}>
            <option value="0">AABAAB</option>
            <option value="1">AABBAAB</option>
            <option value="2">ABBBABA</option>
            <option value="3">AABAAAB</option>
          </select>
        </div>

        <div className="section-label">Quality</div>
        <div className="param">
          <div className="param-header">
            <span className="param-name">Iterations</span>
            <span className="param-value">{iterations}</span>
          </div>
          <input type="range" min="30" max="150" step="10" value={iterations}
            onChange={(e) => setIterations(parseInt(e.target.value))} />
        </div>
      </div>

      <div id="hint">drag to pan · scroll to zoom</div>
    </div>
  );
}
