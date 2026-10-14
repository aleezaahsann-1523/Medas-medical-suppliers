import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Official Medas Medical Suppliers Logo Lockup
 * Keeps a single-line brand wordmark with emblem for clean Top Bar & Footer rendering.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="7" fill="#155EEF" />
        {/* Stylized Medical M + Ultrasound Acoustic Wave Arcs */}
        <path
          d="M8.5 25V13.5L13.75 20.5L19 13.5V25"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 15.5C24.2 17 24.2 21 22.5 22.5"
          stroke="#EAF3FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25.5 13C28.3 15.8 28.3 22.2 25.5 25"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`text-base sm:text-lg font-extrabold tracking-tight ${
          isLight ? 'text-white' : 'text-[#0B1F3A]'
        }`}
      >
        Medas Medical Suppliers
      </span>
    </span>
  );
};
