// components/AdBanner.tsx
import React from 'react';

interface AdBannerProps {
  title: string;
  className?: string; // permet d'ajouter des classes perso
}

const AdBanner: React.FC<AdBannerProps> = ({ title, className }) => {
  return (
    <div
      className={`w-full bg-red-500 py-16 md:py-10 flex items-center justify-center ${className || ''}`}
    >
      <h1 className="text-white text-6xl md:text-7xl font-light">
        {title}
      </h1>
    </div>
  );
};

export default AdBanner;
