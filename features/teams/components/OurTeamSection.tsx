"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { team_members } from "../data/teamsData";

export default function OurTeamSection() {
  const birthdayPlayer = "Zouhoule Elvis M.";
  const birthdayAge = 22;
  const router = useRouter();

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
        <div
          className="hide-scrollbar flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth bg-center bg-cover 
         "
          style={{
            backgroundImage:
              "url('/assets/images/all-img/backgroundequipe.png')",
          }}
        >
          {team_members.map((member, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-64 bg-center bg-cover"
            >
              <div className="group relative w-64 h-96 rounded-[2rem] shadow-xl overflow-hidden cursor-pointer  ">
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
              src="/assets/images/all-img/cake.png"
              alt="Cake"
              width={30}
              height={30}
            />
          </div>
        </div>

        {/* Bouton "Voir toute l'équipe" */}
        <div className="flex justify-center mt-6">
          <button
            className="flex items-center px-6 py-3 bg-white text-[#5B21B6] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
            onClick={() => router.push("/effectif")}
          >
            Voir toute l&apos;équipe <ChevronRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
