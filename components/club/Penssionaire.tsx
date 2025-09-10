import Image from "next/image";
import React from "react";

const TEAM_MEMBERS = [
  {
    name: "Ousmane Diomande",
    age: "21",
    number: 16,
    image: "/assets/Images/pensionnaire/pensionnaire1.png",
  },
  {
    name: "Traoré Lacina",
    age: "21",
    number: 1,
    image: "/assets/Images/pensionnaire/pensionnaire2.png",
  },
  {
    name: "Diarrassouba Viera",
    age: "21",
    number: 30,
    image: "/assets/Images/pensionnaire/pensionnaire3.png",
  },
  {
    name: "Ya Konan Didier",
    age: "21",
    number: 41,
    image: "/assets/Images/pensionnaire/pensionnaire4.png",
  },
];

const Penssionaire = () => {
  return (
    <div className=" py-12 px-4 md:px-8 relative overflow-hidden bg-center">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <div className="w-1/2 h-full bg-white rounded-full -rotate-[25deg] shadow-2xl scale-150"></div>
        <div className="absolute w-full h-full bg-white rounded-full -rotate-[15deg] shadow-2xl scale-125"></div>
        <div className="absolute w-full h-full bg-white rounded-full -rotate-[5deg] shadow-2xl scale-110"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5B21B6] uppercase tracking-wide text-center mb-10 mt-4">
          Ex Pensionnaires
        </h2>

        {/* Team Cards - 4 sur la même ligne */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2"
          style={{
            backgroundImage: "url('/assets/Images/BackgroundEquipe.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group relative w-full lg:w-[300px] bg-center bg-cover h-96 rounded-[2rem] shadow-xl overflow-hidden cursor-pointer"
              style={{
                backgroundImage: "url('/assets/Images/all-img/Link.png')",
              }}
            >
              {/* Player Image en fond */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay Infos */}
              <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 p-3 bg-[#F3E8FF] rounded-xl flex justify-between items-center border-t-4 border-[#F3E8FF] transition-colors duration-300 group-hover:bg-purple-400/90">
                <div className="min-w-0">
                  <h3 className="font-bold text-lg lg:text-xl text-black whitespace-nowrap">
                    {member.name}
                  </h3>
                  <span className="text-md font-medium text-gray-600 px-1.5 py-0.5 rounded-full block">
                    {member.age} ans
                  </span>
                </div>
                <span className="text-5xl font-extrabold text-[#5B21B6] flex-shrink-0">
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

export default Penssionaire;
