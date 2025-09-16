import React from 'react';
import Image from 'next/image';
import DoubleTrait from '../common/doubleTrait';

const PalmaresSection = () => {
  return (
    <div className=' mb-8 bg-[#F3F3F3]'>
      <div className=" py-16 px-4">

        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#431473] uppercase tracking-widest">
            Palmarès du Club
          </h2>
        </div>

        {/* Trophies Section */}
        <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-16">

          {/* Trophy 1 */}
          <div className="text-center w-40 relative">
            <div className="relative w-full h-48 mb-2 z-10">
              <Image
                src="/assets/images/coupes/coupe1.png"
                alt="Championnat Cadet trophy"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="absolute bottom-26 -left-5 text-4xl font-bold text-[#facc15] z-0">
              2013 - <span>2014</span>
            </p>
            <p className="mt-4 text-sm font-semibold text-gray-700 uppercase">Championnat Cadet (Elite)</p>
          </div>

          {/* Trophy 2 */}
          <div className="text-center w-40 relative">
            <div className="relative w-full h-48 mb-2 z-10">
              <Image
                src="/assets/images/coupes/coupe2.png"
                alt="Division 3 trophy"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="absolute bottom-33 -left-2 text-4xl font-bold text-[#facc15] z-0">2023</p>
            <p className="mt-4 text-sm font-semibold text-gray-700 uppercase">Division 3 CIV - Vice-Champion</p>
          </div>

          {/* Trophy 3 */}
          <div className="text-center w-40 relative">
            <div className="relative w-full h-48 mb-2 z-10">
              <Image
                src="/assets/images/coupes/coupe3.png"
                alt="Trophées Communaux"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="absolute bottom-33 -left-5 text-4xl font-bold text-[#facc15] z-0">+100</p>
            <p className="mt-4 text-sm font-semibold text-gray-700 uppercase">Trophées Communaux</p>
          </div>

          {/* Trophy 4 */}
          <div className="text-center w-40 relative">
            <div className="relative w-full h-48 mb-2 z-10">
              <Image
                src="/assets/images/coupes/coupe4.png"
                alt="Coupe Nationale trophy"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="absolute bottom-33 left-0 text-4xl font-bold text-[#facc15] z-0">2024</p>
            <p className="mt-4 text-sm font-semibold text-gray-700 uppercase">Coupe Nationale - Finaliste</p>
          </div>

          {/* Trophy 5 */}
          <div className="text-center w-40 relative">
            <div className="relative w-full h-48 mb-2 z-10">
              <Image
                src="/assets/images/coupes/coupe5.png"
                alt="Ligue 2 trophy"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="absolute bottom-33 left-[-20] text-4xl font-bold text-[#facc15] z-0">2024</p>
            <p className="mt-4 text-sm font-semibold text-gray-700 uppercase">Ligue 2 CIV - Vice-Champion</p>
          </div>
        </div>
      </div>
      <DoubleTrait className="flex justify-center items-center space-x-2 mb-2"/>
    </div>
  );
};

export default PalmaresSection;
