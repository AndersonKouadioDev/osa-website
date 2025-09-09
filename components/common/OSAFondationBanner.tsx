import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const OSAFondationBanner = () => {
  return (
    <div className="w-full bg-yellow-400 mt-6 sm:mt-8 py-4 sm:py-6 px-4 sm:px-6 rounded-xl sm:rounded-2xl">
      
      {/* Contenu principal */}
      <div className="flex flex-col gap-4">

        {/* Logo et titre */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left w-full">
          <div className="flex-shrink-0">
            <Image
              src="/assets/images/all-img/logo.png"
              alt="Logo FC OSA"
              width={60}
              height={60}
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 leading-tight">
            Engagez-vous aux côtés du FC OSA
          </h3>
        </div>

        {/* Bouton aligné à droite */}
        <div className="w-full flex justify-end">
          <button className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#5B21B6] text-white rounded-full font-semibold hover:bg-purple-900 transition-colors shadow-md text-sm sm:text-base w-auto truncate">
            En savoir plus
            <ChevronRight size={18} className="ml-2 flex-shrink-0" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default OSAFondationBanner;
