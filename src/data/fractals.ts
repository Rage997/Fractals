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
  },
  {
    id: 'newton',
    name: 'Newton Fractal',
    subtitle: 'Root-Finding Fractal',
    icon: '✴',
    description: 'The Newton fractal visualizes the basins of attraction of a function\'s roots using Newton\'s method. It was popularized by mathematician John Hubbard and produces intricate, colorful patterns.',
    howItWorks: 'Starting from each point z, we iteratively apply Newton\'s method: z = z - f(z)/f\'(z). Different starting points converge to different roots, and the boundaries between basins form the fractal. Here we use z³ - 1 = 0, which has three roots at the vertices of an equilateral triangle.',
    formula: 'z = z - f(z)/f\'(z)\nwhere f(z) = z³ - 1'
  },
  {
    id: 'lyapunov',
    name: 'Lyapunov',
    subtitle: 'Chaos Fractal',
    icon: '🌀',
    description: 'The Lyapunov fractal visualizes the stability of chaotic systems. Named after mathematician Alexander Lyapunov, these fractals reveal the boundary between order and chaos in the logistic map with varying parameters.',
    howItWorks: 'For each point (a, b) in parameter space, we iterate the logistic map with alternating parameters: x(n+1) = r*x(n)*(1-x(n)), where r alternates between a and b. We compute the Lyapunov exponent to determine stability. Negative values (blue) indicate stable behavior, positive values (yellow/red) indicate chaos.',
    formula: 'x = r*x*(1-x)\nλ = (1/n)*Σ log|r - 2rx|\nλ < 0: stable, λ > 0: chaos'
  }
];

export const getFractal = (id: string): FractalInfo | undefined => 
  fractals.find(f => f.id === id);
