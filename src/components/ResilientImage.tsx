import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#F4F7FB]',
  loading = 'lazy',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div
          className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EAF3FF] to-[#F4F7FB] text-[#0B1F3A]"
          role="img"
          aria-label={alt}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#155EEF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="mb-3 opacity-85"
          >
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M7 20h10" />
            <path d="M9 16v4" />
            <path d="M15 16v4" />
            <path d="M9 10c1.5-2 4.5-2 6 0" />
          </svg>
          <span className="text-xs font-semibold text-[#0B1F3A] max-w-[220px] leading-snug">
            {fallbackLabel || alt}
          </span>
          <span className="text-[11px] text-slate-500 mt-1">
            Medas Medical Equipment Catalogue
          </span>
        </div>
      )}
    </div>
  );
};
