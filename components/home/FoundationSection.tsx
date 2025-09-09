import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function FoundationSection() {
  return (
    <div className="flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Titre */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5B21B6] mb-6 sm:mb-8 uppercase tracking-wide text-center font-exo2">
        Fondation
      </h2>

      {/* Contenu principal de la fondation */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        
        {/* Première image */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[290px]">
            <Image
              src="/Assets/images/all-img/fondation1.png"
              alt="Distribution d'aide"
              width={290}
              height={200}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Texte de description */}
        <div className="flex-1 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify px-2 sm:px-4 lg:px-6">
          <p>
            La Fondation OSA a pour principales missions de former, éduquer et
            aider les jeunes Ivoiriens et Africains à se détourner des vices et
            maux qui minent les sociétés africaines, d&apos;apporter une assistance
            aux établissements scolaires et centres de formation de football
            moins nantis de la Commune d&apos;Abobo et partout en Côte d&apos;Ivoire à
            travers des actions sociales.
          </p>
        </div>

        {/* Deuxième image */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[290px]">
            <Image
              src="/Assets/images/all-img/fondation2.png"
              alt="Groupe de jeunes"
              width={290}
              height={200}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Section d'engagement */}
      <div className="w-full bg-yellow-400 mt-6 sm:mt-8 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
          
          {/* Logo et titre */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="flex-shrink-0">
              <Image
                src="/Assets/images/all-img/logo.png"
                alt="Logo FC OSA"
                width={50}
                height={50}
                className="sm:w-[60px] sm:h-[60px] w-auto h-auto"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
              Engagez-vous aux côtés du FC OSA
            </h3>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 w-full sm:w-auto">
            <button className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#5B21B6] text-white rounded-full font-semibold hover:bg-purple-900 transition-colors shadow-md text-sm sm:text-base w-full sm:w-auto min-w-0">
              <span className="truncate">Je veux m&apos;engager</span>
              <ChevronRight size={16} className="ml-2 flex-shrink-0 sm:size-[18px]" />
            </button>
            <button className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#5B21B6] text-white rounded-full font-semibold hover:bg-purple-900 transition-colors shadow-md text-sm sm:text-base w-full sm:w-auto min-w-0">
              <span className="truncate">En savoir plus</span>
              <ChevronRight size={16} className="ml-2 flex-shrink-0 sm:size-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
