import React from 'react';
import logoSrc from '../assets/brand/logo.png';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Official Medas Medical Suppliers logo.
 * The logo artwork has dark text, so on dark backgrounds (variant="light")
 * it is placed on a white rounded chip to stay readable.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <span
      className={`inline-flex items-center shrink-0 select-none ${
        isLight ? 'bg-white rounded-lg px-3 py-2' : ''
      } ${className}`}
    >
      <img
        src={logoSrc}
        alt="Medas Medical Suppliers"
        className={isLight ? 'h-10 w-auto' : 'h-10 sm:h-12 w-auto'}
      />
    </span>
  );
};