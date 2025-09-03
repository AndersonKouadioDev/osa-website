// components/WhoWeAre.jsx

import Image from 'next/image';

const QuiSommes = () => {
  return (
   <div className='px-7'>
     <div className=" p-4 rounded-3xl  mx-auto my-10 border border-solid border-[#5D0B9E]">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Text Section */}
        <div className="flex-1 p-8 text-white">
          <h2 className="text-4xl font-bold  text-[#5D0B9E] mb-6">
            QUI SOMMES-NOUS
          </h2>
          <p className="text-lg text-black leading-relaxed">
            En 2001, Monsieur AMZA GAMAL, a fondé le centre de formation
            Olympique Sport dAbobo (OSA), qui a ensuite donné naissance au
            club, le FC OSA, en 2015. Grâce à son rôle de Président-Fondateur, le
            FC OSA va évoluer dans lélite du football ivoirien (La Ligue 1 de
            Côte dIvoire) lors de la saison 2024/25.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/Assets/Images/all-img/nous.png"
            alt="An image of a football team in a huddle"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
   </div>
  );
};

export default QuiSommes;