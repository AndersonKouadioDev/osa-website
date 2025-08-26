// components/AdBanner.js
import React from 'react';

const AdBanner = ({ title }:{title:string}) => {
  return (
    <div className="w-full bg-red-500 py-16 md:py-10 flex  items-center justify-center">
      <h1 className="text-white text-6xl md:text-7xl font-light">
        {title}
      </h1>
    </div>
  );
};

export default AdBanner;