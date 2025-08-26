// components/OSAExperienceBanner.js
import React from 'react';

const OSAExperienceBanner = () => {
  return (
   <div className='px-7 mt-5'>
     <div className="w-full bg-[#5d0b9e] rounded-xl mb-10 px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
        {/* Contenu textuel */}
        <div className="flex-1">
          <h2 className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl mb-2 sm:mb-3 leading-tigh">
            Vis lexpérience OSA à <span className='text-white'>100% !</span>
          </h2>
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
            Crée un compte ou connecte-toi pour avoir accès à des contenus exclusifs 
            et profiter de nombreux avantages.
          </p>
        </div>

        {/* Bouton d'action */}
        <div className="flex-shrink-0">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 text-xs sm:text-sm">
            Cest par ici
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default OSAExperienceBanner;