import React from 'react';
import Image from 'next/image';

const ExPensionnaires = () => {
  const players = [
    {
      name: 'Ousmane Diomandé',
      age: '21 ANS',
      number: 26,
      imageSrc: '/assets/images/players/ousmane_diomande.jpg',
    },
    {
      name: 'Traoré Lacina',
      age: '21 ANS',
      number: 99,
      imageSrc: '/assets/images/players/traore_lacina.jpg',
    },
    {
      name: 'Diarrassouba Viera',
      age: '21 ANS',
      number: 2,
      imageSrc: '/assets/images/players/diarrassouba_viera.jpg',
    },
    {
      name: 'Ya Konan Didier',
      age: '21 ANS',
      number: 9,
      imageSrc: '/assets/images/players/ya_konan_didier.jpg',
    },
     {
      name: 'Ya Konan Didier',
      age: '21 ANS',
      number: 9,
      imageSrc: '/assets/images/players/ya_konan_didier.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-[#431473] uppercase tracking-wider">
          Ex Pensionnaires
        </h2>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {players.map((player) => (
          <div key={player.name} className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg border-2 border-[#431473]">
            {/* Player Image */}
            <div className="relative w-full h-80">
              <Image
                src={player.imageSrc}
                alt={player.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Player Info Card */}
            <div className="relative p-4 bg-white flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-[#431473]">{player.name}</h3>
              <p className="text-sm font-medium text-gray-600">{player.age}</p>
              {/* Player Number */}
              <div className="absolute -top-12 right-0 bg-[#431473] text-white font-bold text-4xl w-24 h-24 flex items-center justify-center rounded-bl-full rounded-br-full">
                {player.number}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExPensionnaires;