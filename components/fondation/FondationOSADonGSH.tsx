import Image from 'next/image';
import React from 'react';

export default function FondationOSADonGSH() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Left Image - DON OSA GSH Wall */}
        <div className="relative w-full h-48 md:h-64 lg:h-64 rounded-2xl overflow-hidden shadow-md">
          <Image 
            src="/assets/images/all-img/fondation5.png" 
            alt="Group Photo" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Right Image - Group Photo */}
        <div className="relative w-full h-48 md:h-64 lg:h-64 rounded-2xl overflow-hidden shadow-md">
          <Image 
            src="/assets/images/all-img/fondation4.jpg" 
            alt="Don OSA GSH Wall" 
            fill 
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
