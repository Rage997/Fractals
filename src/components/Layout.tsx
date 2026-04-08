import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

interface BackButtonProps {
  to?: string;
  onClick?: () => void;
}

export function BackButton({ to, onClick }: BackButtonProps) {
  const content = (
    <>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back
    </>
  );

  if (to) {
    return <Link to={to} className="back-btn">{content}</Link>;
  }
  
  return (
    <button className="back-btn" onClick={onClick}>
      {content}
    </button>
  );
}
