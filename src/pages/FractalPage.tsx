import { useState, type ReactNode } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getFractal } from '../data/fractals';
import { Fern } from './fractals/Fern';
import { Mandelbrot } from './fractals/Mandelbrot';
import { BurningShip } from './fractals/BurningShip';
import { Newton } from './fractals/Newton';
import { Lyapunov } from './fractals/Lyapunov';

const fractalComponents: Record<string, (props: { showInfo: boolean; onToggleInfo: () => void }) => ReactNode> = {
  fern: Fern,
  mandelbrot: Mandelbrot,
  // julia: Julia,
  // multibrot: Multibrot,
  burningship: BurningShip,
  newton: Newton,
  lyapunov: Lyapunov,
  // sierpinski: Sierpinski,
  // koch: KochSnowflake,
  // dragon: DragonCurve,
  // buddhabrot: Buddhabrot,
};
export function FractalPage() {
  const { id } = useParams<{ id: string }>();
  const [showInfo, setShowInfo] = useState(false);

  if (!id || !getFractal(id)) {
    return <Navigate to="/" replace />;
  }

  const Component = fractalComponents[id];
  if (!Component) {
    return <Navigate to="/" replace />;
  }

  return (
    <Component 
      showInfo={showInfo} 
      onToggleInfo={() => setShowInfo(!showInfo)} 
    />
  );
}
