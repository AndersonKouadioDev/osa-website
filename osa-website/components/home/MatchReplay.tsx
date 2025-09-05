// components/MatchReplay.js
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const MatchReplay = () => (
 <div className='px-7 mt-20'> 
    <h1 className='text-center text-4xl uppercase text-[#5D0B9E] my-3 font-bold mb-10 font-exo2'> Replay les temps forts </h1>
     <div className="flex flex-col items-center py-3 px-2 sm:py-4 sm:px-3 md:px-6 rounded-2xl mb-5 w-full mx-auto"  
        style={{ backgroundImage: 'url("/Assets/Images/all-img/BackgroundMaillot.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} >
 
    <div className="relative w-full rounded p-3 sm:p-3 md:p-6">
      {/* Header avec infos du match */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4">
        <div className='flex flex-row items-center gap-2'>
            <div className="flex-shrink-0">
                <Image 
                  src={"/Assets/Images/all-img/logoL1.jpg"} 
                  width={25} 
                  height={25}
                  className="sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px]"
                  alt='logo-ligue1'
                />
            </div>
            <div className='flex flex-col text-xs font-bold text-white'>
                <span className="text-yellow-400 text-xs sm:text-sm">Ligue 1</span>
                <span className="text-gray-300 text-xs break-words">04/05/2025 15h30</span>
                <span className="text-gray-400 text-xs hidden md:block">Stade Robert Champroux Marcory</span>
            </div>
        </div>
        <span className="bg-green-500 text-black px-2 py-1 rounded-full text-xs font-semibold self-start sm:self-auto">
          TERMINÉ
        </span>
      </div>

      {/* Score et équipes */}
      <div className="flex flex-col items-center mt-4 sm:mt-6  bg-opacity-80 rounded-lg py-2 sm:py-3 px-2 sm:px-4">
        {/* Logos au-dessus */}
        <div className="flex items-center justify-between w-full max-w-[200px] sm:max-w-xs md:max-w-sm px-4 sm:px-8 md:px-20 mb-1">
          <div className="flex justify-center">
            <Image 
              src={"/Assets/Images/all-img/logoOSA.png"} 
              width={35} 
              height={35}
              className="sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px]"
              alt='logo-osa'
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src={"/Assets/Images/all-img/logoAdv.png"} 
              width={35} 
              height={35}
              className="sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px]"
              alt='logo-adversaire'
            />
          </div>
        </div>

        {/* Noms des équipes et score sur la même ligne */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-6">
          <span className="text-white font-bold text-sm sm:text-lg md:text-2xl">FC OSA</span>
          
          <div className="flex items-center">
            <span className="text-yellow-400 font-bold text-2xl sm:text-3xl md:text-5xl">3</span>
            <span className="text-white mx-1 sm:mx-2 font-bold text-xl sm:text-2xl md:text-4xl">:</span>
            <span className="text-yellow-400 font-bold text-2xl sm:text-3xl md:text-5xl">1</span>
          </div>
          
          <span className="text-white font-bold text-sm sm:text-lg md:text-2xl">SOL FC</span>
        </div>
      </div>

      {/* Bouton */}
      <div className="flex justify-center mt-4 sm:mt-6">
        <button className="bg-yellow-500 flex justify-between hover:bg-yellow-600 transition-colors text-black text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 md:px-6 rounded-full shadow-lg">
          Revoir le match
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
 </div>
);

export default MatchReplay;