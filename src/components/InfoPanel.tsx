import type { FractalInfo } from '../types/fractal';
import './InfoPanel.css';

interface InfoPanelProps {
  fractal: FractalInfo;
  isOpen: boolean;
  onClose: () => void;
}

export function InfoPanel({ fractal, isOpen, onClose }: InfoPanelProps) {
  return (
    <div className={`info-panel ${isOpen ? 'open' : ''}`}>
      <button className="info-close" onClick={onClose}>&times;</button>
      <div className="info-title">{fractal.name}</div>
      <div className="info-subtitle">{fractal.subtitle}</div>

      <div className="info-section">
        <div className="info-section-title">What is it?</div>
        <p>{fractal.description}</p>
      </div>

      <div className="info-section">
        <div className="info-section-title">How it works</div>
        <p>{fractal.howItWorks}</p>
      </div>

      {fractal.formula && (
        <div className="info-section">
          <div className="info-section-title">The Formula</div>
          <code>{fractal.formula}</code>
        </div>
      )}
    </div>
  );
}
