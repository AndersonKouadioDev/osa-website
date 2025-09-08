import { GraduationCap } from "lucide-react";
import React from "react";
import { FaFutbol } from "react-icons/fa";
import { PiTrafficConeThin } from "react-icons/pi";
import { LiaTrophySolid } from "react-icons/lia";
import { LuBrain } from "react-icons/lu";
const PresentationOSA = () => {
  return (
    <div className="px-4 md:px-7">
      <div className="py-16 px-4 md:px-8 my-4 border border-[#5D0B9E] rounded-lg">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-[#5D0B9E] uppercase tracking-widest 
                         border-b-2  pb-4 w-fit mx-auto"
          >
            FC OSA, toujours en avant !
          </h2>
        </div>

        {/* Philosophy Text */}
        <div className="text-center text-black mx-auto mb-12 lg:px-16">
          <p className="text-lg  text-center">
            Créé en 2001, le Centre de Formation Olympique Sport d&apos;Abobo est
            resté ﬁdèle à sa philosophie depuis toutes ces années qui est de
            former, éduquer et aider les jeunes ivoiriens et africains dans le
            but de les détourner des vices et maux qui minent les sociétés
            africaines grâce à une feuille de route en 3 axes.
          </p>
          <p className="text-lg mt-4 text-center">
            De nombreux joueurs passés par le Centre de Formation brillent
            aujourd&apos;hui en tant que professionnels, aussi bien en équipe senior
            avant d&apos;entamer une carrière professionnelle dans les clubs d&apos;Europe
            et du Monde entier. Une preuve du savoir-faire de la
            formation osalaise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-16">
          {/* Card 1: Nom Complet */}
          <div className="bg-[#ffc107] rounded-xl p-6 text-center border-2 w-full max-w-md mx-auto">
            <div className="relative flex items-center justify-center mb-4">
              {/* Cône */}
              <PiTrafficConeThin className="w-16 h-16 text-[#5d0b9e]" />

              {/* Ballon par-dessus */}
              <FaFutbol className="w-12 h-12 text-[#5d0b9e] absolute top-1/2 left-1/2 -translate-x-[99%] -translate-y-[53%] z-10" />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-black uppercase">
              formation
            </h3>
            <p className="text-gray-600 text-sm">
              Mise en place de plannings efficients pour produire de futurs grands footballeurs
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffc107] rounded-xl p-6 text-center border-2 w-full max-w-md mx-auto">
            <div className="text-6xl mb-4">
              <LuBrain className="mx-auto" color="#5d0b9e" size={70} />

            </div>
            <h3 className="text-md lg:text-2xl font-semibold mb-2 text-black uppercase">
              philosophie
            </h3>
            <p className="text-gray-600 text-sm">

              Offrir un avenir radieux aux jeunes à
              travers la pratique du football
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ffc107] rounded-xl p-6 text-center border-2 w-full max-w-md mx-auto">
            <div className="text-6xl mb-4">

              <GraduationCap color="#5d0b9e" className="mx-auto" size={70} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black uppercase">
              education
            </h3>
            <p className="text-gray-600 text-sm">
              L&apos;éducation scolaire est au coeur de notre programme de formation
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#ffc107] rounded-xl p-6 text-center border-2 w-full max-w-md mx-auto">
            <div className="text-6xl mb-4">

              <LiaTrophySolid className="mx-auto" color="#5d0b9e" size={70} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black uppercase">
              palmares
            </h3>
            <p className="text-gray-600 text-sm">
              Plus de 100 trophées tant sur le plan
              communal qu&apos;a travers tout le pays
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PresentationOSA;
