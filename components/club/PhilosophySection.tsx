import React from 'react';
import { FaFutbol, FaMapMarkerAlt, FaTshirt, FaAward } from 'react-icons/fa';
import { PiTrafficConeThin } from "react-icons/pi";

const PhilosophySection = () => {
  return (
    <div className="px-4 md:px-7">
      <div className="py-16 px-4 md:px-8 my-4 border border-[#5D0B9E] rounded-lg">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5D0B9E] uppercase tracking-widest 
                         border-b-2 border-purple-500 pb-4 w-fit mx-auto">
            Notre Philosophie
          </h2>
        </div>

        {/* Philosophy Text */}
        <div className="text-center text-black mx-auto mb-12 lg:px-16">
          <p className="text-lg leading-relaxed text-start">
            Le FC OSA est resté ﬁdèle à sa philosophie depuis toutes ces années qui est de former, éduquer et aider les jeunes ivoiriens et africains à se détourner des vices et maux qui minent les sociétés africaines à travers la pratique du football.
          </p>
          <p className="text-lg mt-4 text-start">
            Comme l&apos;indique notre slogan <span className='font-bold'>« FC OSA, toujours en avant !!! »</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-16">

          {/* Card 1: Nom Complet */}
          <div className="bg-white rounded-xl p-6 text-center border-2">
            <div className="relative flex items-center justify-center mb-4">
             {/* Cône */}
             <PiTrafficConeThin className="w-16 h-16 text-[#5d0b9e]" />
           
             {/* Ballon par-dessus, bien calé */}
             <FaFutbol 
               className="w-12 h-12 text-[#5d0b9e] absolute top-1/2 left-1/2 -translate-x-[99%] -translate-y-[53%] z-10" 
             />
           </div>
            <h3 className="text-xl font-semibold mb-2 text-[#5D0B9E] uppercase">Nom Complet</h3>
            <p className="text-gray-600">Football Club Olympique Sport d&apos;Abobo</p>
          </div>

          {/* Card 2: Siège Administratif */}
          <div className="bg-white rounded-xl p-6 text-center border-2">
            <div className="text-6xl mb-4">
              <FaMapMarkerAlt className="mx-auto" color='#5d0b9e' />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-800 uppercase">Siège Administratif</h3>
            <p className="text-gray-600">Abidjan - Abobo</p>
          </div>

          {/* Card 3: Couleurs */}
          <div className="bg-white rounded-xl p-6 text-center border-2">
            <div className="text-6xl mb-4">
              <FaTshirt className="mx-auto" color='#5d0b9e' />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-800 uppercase">Couleurs</h3>
            <div className="flex justify-center items-center mt-2 space-x-4">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                <span className="text-gray-600">Violet</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
                <span className="text-gray-600">Jaune</span>
              </div>
            </div>
          </div>

          {/* Card 4: Date de Création */}
          <div className="bg-white rounded-xl p-6 text-center border-2">
            <div className="text-6xl mb-4">
              <FaAward className="mx-auto" color='#5d0b9e' />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-800 uppercase">Date de Création</h3>
            <p className="text-gray-600">2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
