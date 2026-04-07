export interface FractalInfo {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
  howItWorks: string;
  formula?: string;
}

export interface FractalComponentProps {
  showInfo: boolean;
  onToggleInfo: () => void;
}
