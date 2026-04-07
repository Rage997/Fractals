import { Link } from 'react-router-dom';
import { fractals } from '../data/fractals';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Fractal Explorer</h1>
      <p className="home-subtitle">Interactive Mathematical Art</p>

      <div className="fractal-grid">
        {fractals.map(fractal => (
          <Link key={fractal.id} to={`/${fractal.id}`} className="fractal-card">
            <div className="card-icon">{fractal.icon}</div>
            <div className="card-title">{fractal.name}</div>
            <div className="card-tagline">{fractal.subtitle}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
