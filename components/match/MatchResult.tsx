"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';


export default function MatchResult() {
  const router=useRouter()
  return (
   <div className='px-7'>
     <div
      className="min-h-screen  rounded-2xl bg-gradient-to-br p-5 from-purple-700 via-purple-800 to-purple-900 flex lg:bg-cover bg-primary bg-auto bg-center bg-no-repeat lg:bg-center items-center justify-center  relative overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/all-img/foot.png')" }}
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex justify-center flex-col items-center mb-10 mt-10 text-center">
          <div className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg">
            TERMINÉ
          </div>
          <div className="text-white text-sm sm:text-base md:text-lg mt-3">
            Vendredi 03/05/2025 - 20:30 &nbsp;&nbsp;&nbsp; Stade Robert Champroux Marcory
          </div>
        </div>

        {/* Main Match Display */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-20 mb-12">
          {/* FC OSA Logo */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative">
            <Image
              src={"/assets/images/all-img/logoOSA.png"}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Score */}
          <div className="flex items-center">
            <span className="text-5xl sm:text-7xl md:text-8xl font-bold text-yellow-400 mx-2 sm:mx-6 md:mx-8">
              3
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mx-2 sm:mx-4">
              -
            </span>
            <span className="text-5xl sm:text-7xl md:text-8xl font-bold text-yellow-400 mx-2 sm:mx-6 md:mx-8">
              1
            </span>
          </div>

          {/* SOL FC Logo */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative">
            <Image
              src={"/assets/images/all-img/sol.png"}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Team Names */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            FC OSA
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            SOL FC
          </h2>
        </div>

        {/* Broadcast Info */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 text-white text-sm sm:text-base md:text-lg  p-2 sm:p-3 rounded-lg">
          Diffusé sur
          <span>
            <div className="w-16 h-10 sm:w-20 sm:h-14 relative">
              <Image
                src={"/assets/images/nav/osatv.png"}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </span>
        </div>
      </div>

      {/* Retour button en bas à gauche */}
      <button className="absolute bottom-0 left-20 border text-white px-6 py-1 rounded-t-lg hover:opacity-90 transition-colors cursor-pointer" onClick={()=>router.back()}>
        Retour
      </button>
    </div>
   </div>
  );
}
