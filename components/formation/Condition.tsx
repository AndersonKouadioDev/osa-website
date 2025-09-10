import { Check, XCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Condition = () => {
  const documents = [
    "Photocopie extrait de naissance",
    "02 photos d'identité",
    "Photo pièce d'identité du parent",
    "Lors de l'inscription, les parents sont tenus de mentionner tous les détails concernant les allergies de leur enfant, y compris les causes et les mesures à prendre en cas de réaction allergique.",
    "Nous vous invitons à signaler tous abus en nous communiquant les noms et contacts des potentiels démarcheurs qui voudraient vous prendre de l'argent, via nos différents contacts : (+225) 0709538834"
  ];

  return (
    <div>
      <div className="relative bg-black text-white overflow-hidden">
        {/* Background avec motif géométrique */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-20 left-20 w-12 h-12 border border-white rotate-45"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border border-white rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-28 border border-white rounded-full opacity-50"></div>
        </div>

        {/* Ballon de football décoratif responsive */}
        <div className="absolute left-0 bottom-0">
          <div className="relative w-[100px] h-[150px] sm:w-[150px] sm:h-[200px] md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px]">
            <Image
              src="/assets/images/all-img/balle_fillet.png"
              alt="ballon"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-10 lg:py-12 lg:px-8">
          <div className="max-w-4xl ml-15 sm:mr-32 md:ml-48 lg:mr-0  ">
            {/* Titre principal */}
            <h1 className="text-3xl lg:text-4xl text-center font-bold mb-6 text-yellow-400">
              COMMENT INTÉGRER L&apos;ACADÉMIE
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-300    mb-8 leading-relaxed text-center max-w-3xl">
              Le FC OSA a fait le choix de la gratuité afin de faciliter l&apos;accès du plus grand nombre à ce
              centre de formation qui s&apos;est imposé comme l&apos;un des meilleurs, assurant non
              seulement la formation sportive, mais également une formation scolaire.
            </p>

            {/* Section Inscription */}
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl text-center font-bold mb-4 text-yellow-400">
                INSCRIPTION GRATUITE
              </h2>

              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-center text-white">
                Documents à fournir
              </h3>

              {/* Liste des documents */}
              <div className="space-y-3 mb-6">
                {documents.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    {index === documents.length - 1 ? (
                      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    ) : (
                      <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    )}
                    <span className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;