import { ChevronRight } from 'lucide-react';
import React from 'react';
import DoubleTrait from '../common/doubleTrait';

const NextMatches = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 mt-10">
      <div className="border border-[#5D0B9E] text-white rounded-2xl flex flex-col items-center justify-center bg-gradient-to-b from-white/5 to-white/10">
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D0B9E] mb-6 sm:mb-8 md:mb-10 tracking-wide text-center font-exo2 uppercase">
            Prochaines rencontres
          </h2>

          <div className="w-full sm:max-w-xl md:max-w-2xl border border-white rounded-lg p-4 sm:p-6 md:p-12 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-300">
              Il n'y a aucun match prévu
            </p>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <button className="bg-yellow-500 text-black font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg flex items-center space-x-2 transition-transform transform hover:scale-105">
              <span className="text-sm sm:text-base md:text-lg">Voir le calendrier</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
        <DoubleTrait className="flex justify-center items-center space-x-2 "/>

      </div>
    </div>
  );
};

export default NextMatches;
