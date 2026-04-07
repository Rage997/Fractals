import type { FractalInfo } from '../types/fractal';

export const fractals: FractalInfo[] = [
  {
    id: 'fern',
    name: 'Barnsley Fern',
    subtitle: '3D IFS Fractal',
    icon: '🌿',
    description: 'The Barnsley Fern is a fractal that resembles a natural fern leaf, discovered by British mathematician Michael Barnsley in 1984. It\'s one of the most famous examples of an Iterated Function System (IFS).',
    howItWorks: 'The fern is generated using four affine transformations (functions), each applied with a certain probability. Each transformation scales, rotates, and translates points in 3D space. Starting from a seed point, we randomly choose one of the four transforms, apply it, plot the new point, and repeat millions of times.',
    formula: `1. Stem (1%)   → shrinks to base point
              2. Leaflets (85%) → main growth
              3. Left leaflet (7%) → left branch
              4. Right leaflet (7%) → right branch`
  },
  {
    id: 'mandelbrot',
    name: 'Mandelbrot Set',
    subtitle: 'Complex Plane Fractal',
    icon: '∞',
    description: 'The Mandelbrot set is one of the most famous fractals, discovered by mathematician Benoit Mandelbrot in 1980. It lives on the complex plane and exhibits infinite complexity at its boundary.',
    howItWorks: 'For each point c on the complex plane, we iterate the simple formula: z(n+1) = z(n)² + c. Starting with z₀ = 0, we check whether this sequence stays bounded or "escapes" to infinity. Points where it stays bounded are inside the set (colored black).',
    formula: 'z = z² + c\nwhere z and c are complex numbers'
  },
  {
    id: 'burningship',
    name: 'Burning Ship',
    subtitle: 'Complex Plane Fractal',
    icon: '🔥',
    description: 'The Burning Ship fractal is a variant of the Mandelbrot set, discovered by David Ayers in 1991. It resembles a burning ship when visualized, hence its name.',
    howItWorks: 'Similar to the Mandelbrot set, we iterate: z(n+1) = z(n)² + c. However, before squaring z, we take the absolute values of its real and imaginary parts. This creates the distinctive "burning ship" appearance with towering columns.',
    formula: 'z = (|Re(z)| + i|Im(z)|)² + c'
  }
];

export const getFractal = (id: string): FractalInfo | undefined => 
  fractals.find(f => f.id === id);
