"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

const TEAM_MEMBERS = [
  // Gardiens de but (GB)
  { name: "Diamoutene Mahamadou", position: "GB", number: 16, image: "/assets/images/joueurs/gardiens/gardien_16.png" },
  { name: "Kanté Zié Aboubacar", position: "GB", number: 1, image: "/assets/Images/joueurs/gardiens/gardien_1.png" },
  { name: "Koffi Jean Yves", position: "GB", number: 30, image: "/assets/Images/joueurs/gardiens/gardien_30.png" },
  { name: "Diarrassouba Mohamed", position: "GB", number: 41, image: "/assets/Images/joueurs/gardiens/gardien_41.png" },

  // Défenseurs (DEF)
  { name: "Cheick Oumar", position: "DEF", number: 17, image: "/assets/Images/cheick-oumar.png" },
  { name: "Sylla Aboubacar", position: "DEF", number: 18, image: "/assets/Images/sylla-aboubacar.png" },
  { name: "Bakayoko Yaya", position: "DEF", number: 2, image: "/assets/Images/bakayoko-yaya.png" },
  { name: "Hinde Thierry", position: "DEF", number: 25, image: "/assets/Images/hinde-thierry-def.png" },
  { name: "Seydou Traoré", position: "DEF", number: 4, image: "/assets/Images/seydou-traore.png" },
  { name: "Koné Ismaël", position: "DEF", number: 23, image: "/assets/Images/kone-ismael.png" },
  { name: "Lago Christ", position: "DEF", number: 5, image: "/assets/Images/lago-christ.png" },
  { name: "Guede Abraham", position: "DEF", number: 29, image: "/assets/Images/guede-abraham.png" },
  { name: "Keita Tidiane", position: "DEF", number: 24, image: "/assets/Images/keita-tidiane.png" },
  { name: "Yeboue Francis", position: "DEF", number: 14, image: "/assets/Images/yeboue-francis.png" },
  
  // Milieux de terrain (MIL, M.D, M.O, MC)
  { name: "Koné Ali Djinan", position: "MIL", number: 15, image: "/assets/Images/kone-ali-djinan.png" },
  { name: "Hinde Thierry", position: "M.D", number: 6, image: "/assets/Images/hinde-thierry.png" },
  { name: "Dia Dylan", position: "MIL", number: 15, image: "/assets/Images/dia-dylan.png" },
  { name: "Nombre Olivier", position: "M.O", number: 8, image: "/assets/Images/nombre-olivier.png" },
  { name: "Pateliy Mohamed", position: "M.D", number: 28, image: "/assets/Images/pateliy-mohamed.png" },
  { name: "Tapé Ange", position: "M.D", number: 35, image: "/assets/Images/tape-ange.png" },
  { name: "Sacko Yvan", position: "M.O", number: 10, image: "/assets/Images/sacko-yvan.png" },
  { name: "Soro Inza", position: "MC", number: 7, image: "/assets/Images/soro-inza.png" },
  { name: "Koffi Dylane", position: "MIL", number: 22, image: "/assets/Images/koffi-dylane.png" },
  { name: "Soumahoro Abroulaye", position: "MIL", number: 21, image: "/assets/Images/soumahoro-abroulaye.png" },
  { name: "Onogo Yaya", position: "MIL", number: 32, image: "/assets/Images/onogo-yaya.png" },
  { name: "Soumahoro Abroulaye", position: "MIL", number: 39, image: "/assets/Images/soumahoro-abroulaye-39.png" },
  { name: "Dianassouba Aguib", position: "MIL", number: 38, image: "/assets/Images/dianassouba-aguib.png" },

  // Attaquants (ATT, AD)
  { name: "Guei Asse Alain", position: "AD", number: 9, image: "/assets/Images/guei-asse-alain.png" },
  { name: "Zouhoule Elvis Mohamed", position: "AD", number: 13, image: "/assets/Images/zouhoule-elvis-mohamed.png" },
  { name: "Lasme Gnagne", position: "ATT", number: 11, image: "/assets/Images/lasme-gnagne.png" },
  { name: "Bamba Aboubacar", position: "AD", number: 33, image: "/assets/Images/bamba-aboubacar.png" },
  { name: "Alassane Traoré", position: "ATT", number: 3, image: "/assets/Images/alassane-traore.png" },
  { name: "Touré Abakar", position: "ATT", number: 19, image: "/assets/Images/toure-abakar.png" },
  { name: "Condé Ali", position: "ATT", number: 36, image: "/assets/Images/conde-ali.png" },
  { name: "Spiecker Thierry", position: "ATT", number: 20, image: "/assets/Images/spiecker-thierry.png" },
  { name: "Fofana Inza", position: "ATT", number: 34, image: "/assets/Images/fofana-inza.png" },
  { name: "Tra Bi Prince", position: "ATT", number: 37, image: "/assets/Images/tra-bi-prince.png" },
];

export default function OurTeamSection() {
  const birthdayPlayer = "Zouhoule Elvis M.";
  const birthdayAge = 22;

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 relative overflow-hidden bg-center">
      {/* Shapes de fond */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <div className="w-1/2 h-full bg-white rounded-full -rotate-[25deg] shadow-2xl scale-150" />
        <div className="absolute w-full h-full bg-white rounded-full -rotate-[15deg] shadow-2xl scale-125" />
        <div className="absolute w-full h-full bg-white rounded-full -rotate-[5deg] shadow-2xl scale-110" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5B21B6] uppercase tracking-wide text-center mb-10 mt-4">
          Notre Équipe
        </h2>

        {/* Scroll horizontal libre */}
        <div className="hide-scrollbar flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth bg-center bg-cover " style={{ backgroundImage: "url('/assets/images/all-img/BackgroundEquipe.png')" }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-64 bg-center bg-cover"
              style={{ backgroundImage: "url('/assets/images/all-img/Link.png')" }}
              
            >
              <div className="group relative w-64 h-96 rounded-[2rem] shadow-xl overflow-hidden cursor-pointer  "  >
                {/* Image joueur */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Infos joueur */}
                <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 p-3 bg-yellow-400/95 rounded-xl flex justify-between items-center border-t-4 border-white transition-colors duration-300 group-hover:bg-yellow-500/90">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <span className="text-[0.6rem] font-medium text-white px-1.5 py-0.5 rounded-full bg-red-600">
                      {member.position}
                    </span>
                  </div>
                  <span className="text-2xl font-extrabold text-gray-800">
                    {member.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière anniversaire */}
        <div className="relative bg-[#f3e8ff] text-white py-6 px-4 rounded-xl shadow-xl mt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg text-[#5D0B9E]">
              Joyeux anniversaire
            </span>
          </div>
          <span className="text-2xl font-bold text-black uppercase">
            {birthdayPlayer}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-xl text-green-500 font-bold">
              {birthdayAge} ANS
            </span>
            <Image
              src="/assets/Images/all-img/cake.png"
              alt="Cake"
              width={30}
              height={30}
            />
          </div>
        </div>

        {/* Bouton "Voir toute l'équipe" */}
        <div className="flex justify-center mt-6">
          <button className="flex items-center px-6 py-3 bg-white text-[#5B21B6] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Voir toute l&apos;équipe <ChevronRight size={18} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Masquer la scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
