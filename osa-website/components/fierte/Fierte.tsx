import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TEAM_MEMBERS = [
  {
    name: "Ousmane Diomande",
    age: "21",
    number: 16,
    image: "/Assets/Images/pensionnaire/pensionnaire1.png",
  },
  {
    name: "Traoré Lacina",
    age: "21",
    number: 1,
    image: "/Assets/Images/pensionnaire/pensionnaire2.png",
  },
  {
    name: "Diarrassouba Viera",
    age: "21",
    number: 30,
    image: "/Assets/Images/pensionnaire/pensionnaire3.png",
  },
  {
    name: "Ya Konan Didier",
    age: "21",
    number: 41,
    image: "/Assets/Images/pensionnaire/pensionnaire4.png",
  },

  {
    name: "Sanogo Sekou Junior",
    age: "21",
    number: 35,
    image: "/Assets/Images/pensionnaire/penssionnaire-5.jpg",
  },
  {
    name: "Kader Keita",
    age: "21",
    number: 28,
    image: "/Assets/Images/pensionnaire/penssionnaire-6.png",
  },
  {
    name: "Niango Anderson",
    age: "21",
    number: 15,
    image: "/Assets/Images/pensionnaire/penssionnaire-7.jpg",
  },
  {
    name: "Diomande ismael",
    age: "21",
    number: 7,
    image: "/Assets/Images/pensionnaire/penssionnaire-8.png",
  },
  {
    name: "Fofana Adama",
    age: "21",
    number: 2,
    image: "/Assets/Images/pensionnaire/penssionnaire-9.png",
  },

  {
    name: "N'zi Olivier",
    age: "21",
    number: 55,
    image: "/Assets/Images/pensionnaire/penssionnaire-10.png",
  },
  {
    name: "Sylla Sekou",
    age: "21",
    number: 55,
    image: "/Assets/Images/pensionnaire/penssionnaire-31.png",
  },
  {
    name: "Kone Mohamed",
    age: "21",
    number: 7,
    image: "/Assets/Images/pensionnaire/penssionnaire-11.jpg",
  },
  {
    name: "Loue Bayerer",
    age: "21",
    number: 22,
    image: "/Assets/Images/pensionnaire/penssionnaire-12.jpg",
  },
  {
    name: "Sidibe Salif",
    age: "21",
    number: 19,
    image: "/Assets/Images/pensionnaire/penssionnaire-13.jpg",
  },
  {
    name: "Sylla Habib",
    age: "21",
    number: 52,
    image: "/Assets/Images/pensionnaire/penssionnaire-14.jpg",
  },
  {
    name: "Diaby Souleymane ",
    age: "21",
    number: 17,
    image: "/Assets/Images/pensionnaire/penssionnaire-15.png",
  },
  {
    name: "kouame Constant",
    age: "21",
    number: 12,
    image: "/Assets/Images/pensionnaire/penssionnaire-16.jpg",
  },
  {
    name: "Gbo Cedric",
    age: "21",
    number: 6,
    image: "/Assets/Images/pensionnaire/penssionnaire-17.jpg",
  },
  {
    name: "Soumahoro Bangali",
    age: "21",
    number: 2,
    image: "/Assets/Images/pensionnaire/penssionnaire-18.jpg",
  },
  {
    name: "Bamba Mory",
    age: "21",
    number: 7,
    image: "/Assets/Images/pensionnaire/penssionnaire-19.jpg",
  },
  {
    name: "Kouame Irene",
    age: "21",
    number: 16,
    image: "/Assets/Images/pensionnaire/penssionnaire-20.jpg",
  },
  {
    name: "Bamba Aboubacar ",
    age: "21",
    number: 1,
    image: "/Assets/Images/pensionnaire/penssionnaire-21.jpg",
  },
  {
    name: "Soro Nanga",
    age: "21",
    number: 9,
    image: "/Assets/Images/pensionnaire/penssionnaire-22.jpg",
  },
  {
    name: "Tia Eric",
    age: "21",
    number: 7,
    image: "/Assets/Images/pensionnaire/penssionnaire-23.jpg",
  },
  {
    name: "Bakayoko Yaya",
    age: "21",
    number: 29,
    image: "/Assets/Images/pensionnaire/penssionnaire-24.jpg",
  },
  {
    name: "Mansou Kouakou",
    age: "21",
    number: 29,
    image: "/Assets/Images/pensionnaire/penssionnaire-25.jpg",
  },
  {
    name: "Gbe Vigori Jaures",
    age: "21",
    number: 2,
    image: "/Assets/Images/pensionnaire/penssionnaire-26.jpg",
  },
  {
    name: "Tia Konate Mohamed",
    age: "21",
    number: 7,
    image: "/Assets/Images/pensionnaire/penssionnaire-27.jpg",
  },
  {
    name: "Bakayo Paul",
    age: "21",
    number: 12,
    image: "/Assets/Images/pensionnaire/penssionnaire-28.jpg",
  },
  {
    name: "Yao Kouassi Martial",
    age: "21",
    number: 19,
    image: "/Assets/Images/pensionnaire/penssionnaire-29.jpg",
  },
  {
    name: "Me Kouassi Odilon",
    age: "21",
    number: 10,
    image: "/Assets/Images/pensionnaire/penssionnaire-30.jpg",
  },
  {
    name: "Dje BI Issac",
    age: "21",
    number: 9,
    image: "/Assets/Images/pensionnaire/penssionnaire-31.jpg",
  },
];

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
            backgroundImage: "url('/Assets/Images/BackgroundEquipe.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group relative bg-center bg-cover h-84 rounded-[2rem] shadow-xl overflow-hidden cursor-pointer"
              style={{
                backgroundImage: "url('/Assets/Images/all-img/Link.png')",
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
