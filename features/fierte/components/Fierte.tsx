import Image from "next/image";
import React from "react";
import { pensionnaire_members } from "../data/pensionnaire_members_data";



const Fierte = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 relative overflow-hidden bg-center">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <div className="w-1/2 h-full bg-white rounded-full -rotate-[25deg] shadow-2xl scale-150"></div>
        <div className="absolute w-full h-full bg-white rounded-full -rotate-[15deg] shadow-2xl scale-125"></div>
        <div className="absolute w-full h-full bg-white rounded-full -rotate-[5deg] shadow-2xl scale-110"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-wide text-center mb-10 mt-4">
          Notre Fierté
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6"
          style={{
            backgroundImage: "url('/assets/images/BackgroundEquipe.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {pensionnaire_members.map((member, index) => (
            <div
              key={index}
              className="group relative bg-center bg-cover h-84 rounded-[2rem] shadow-xl overflow-hidden cursor-pointer"
              style={{
                backgroundImage: "url('/assets/images/all-img/Link.png')",
              }}
            >
              {/* Player Image en fond */}
              <Image
                src={member.image}
                alt={member.name}
                height={200}
                width={800}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay Infos */}
              <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 p-3 bg-[#F3E8FF] rounded-xl flex justify-between items-center border-t-4 border-[#F3E8FF] transition-colors duration-300 group-hover:bg-purple-400/90">
                <div className="min-w-0">
                  <h3 className="font-bold text-sm lg:text-sm text-black whitespace-nowrap uppercase">
                    {member.name}
                  </h3>
                </div>
                <span className="text-4xl font-extrabold text-[#5B21B6] flex-shrink-0">
                  {member.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fierte;
