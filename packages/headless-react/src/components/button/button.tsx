import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  className = '' 
}) => {
  return (
    <button 
      className={`default-button ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};