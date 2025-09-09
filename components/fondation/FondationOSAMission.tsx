import Image from 'next/image';
import React from 'react';
import DoubleTrait from '../common/doubleTrait';

export default function FondationOSAMission() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#5D0B9E] shadow-lg">
      {/* Header */}
      <div className="text-center mb-8 pt-6">
        <h1 className="text-5xl font-bold text-[#5D0B9E] mb-2 font-exo2 border-b border-gray-300 pb-2">NOTRE MISSION</h1>
      </div>

      {/* Mission Statement */}
      <div className="mb-4 px-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          La Fondation OSA a pour principales missions de former, éduquer et aider les jeunes ivoiriens et africains à se 
          détourner des vices et maux qui minent les sociétés africaines, d&apos;apporter une assistance aux établissements 
          scolaires et centre de formation de football moins nantis de la Commune d&apos;Abobo et partout en Côte d&apos;Ivoire à 
          travers des actions sociales :
        </p>
      </div>

      {/* Mission Points */}
      <div className="space-y-6 mb-4 px-4">
        {/* Équiper les établissements scolaires */}
        <div>
          <h2 className="text-[#5D0B9E] font-bold text-lg mb-2">Équiper les établissements scolaires</h2>
          <p className="text-gray-700">Dons en matériels didactiques, rénovation d&apos;écoles</p>
        </div>

        {/* Équiper les centres de formation de football */}
        <div>
          <h2 className="text-[#5D0B9E] font-bold text-lg mb-2">Équiper les centres de formation de football</h2>
          <p className="text-gray-700">
            Dons d&apos;équipements sportifs, projet de partage d&apos;expérience afin de promouvoir une réinsertion des jeunes 
            par le sport en les formants à la pratique professionnelle du football
          </p>
        </div>

        {/* Scolariser les jeunes */}
        <div>
          <h2 className="text-[#5D0B9E] font-bold text-lg mb-2">Scolariser les jeunes</h2>
          <p className="text-gray-700">
            Pour le président, instruire un enfant, c&apos;est lui donner les clés de l&apos;avenir. Le football d&apos;accord mais l&apos;école 
            d&apos;abord.
          </p>
        </div>

        {/* Occuper sainement les jeunes */}
        <div>
          <h2 className="text-[#5D0B9E] font-bold text-lg mb-2">Occuper sainement les jeunes</h2>
          <p className="text-gray-700">
            Organiser et occuper sainement la jeunesse grâce à des détections éclaiées lors des vacances afin de les 
            éloigner de certains fléaux (Alcool, drogue, délinquance, braquages, enfants soldats etc.).
          </p>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center items-center mt-12">
        <Image src={"/assets/images/all-img/fondationlogo.png"} alt='logo' width={190} height={190} />
      </div>

      {/* Bottom Decorative Elements */}
      <DoubleTrait className="flex justify-center items-center space-x-2 mt-6"/>
    </div>
  );
}