import Image from "next/image";
import React from "react";

import { players } from "../data/players";

export default function TeamComposition() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-primary text-white flex justify-between items-center py-4 px-8 rounded-t-lg">
          <h1 className="text-2xl font-semibold">
            Composition de l&apos;équipe
          </h1>
          <h1 className="text-2xl font-semibold">Formation du jeu</h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Team Composition */}
            <div className="flex gap-20 justify-center">
              <div>
                {/* Gardiens */}
                <div>
                  <h3 className="text-primary font-bold text-sm uppercase mb-3">
                    Gardiens
                  </h3>
                  <div className="space-y-2">
                    <div className="text-black font-medium">
                      Koffi Jean Yves
                    </div>
                  </div>
                </div>

                {/* Défenseurs */}
                <div>
                  <h3 className="text-primary font-bold text-sm uppercase mb-3">
                    Défenseurs
                  </h3>
                  <div className="space-y-2">
                    <div className="text-black font-medium">Cheick Oumar</div>
                    <div className="text-black font-medium">Bakayoko Yaya</div>
                    <div className="text-black font-medium">Hinde Thierry</div>
                  </div>
                </div>

                {/* Milieux */}
                <div>
                  <h3 className="text-primary font-bold text-sm uppercase mb-3">
                    Milieux
                  </h3>
                  <div className="space-y-2">
                    <div className="text-black font-medium">
                      Kone Ali Djinan
                    </div>
                    <div className="text-black font-medium">Dia Dylan</div>
                    <div className="text-black font-medium">Soro Inza</div>
                    <div className="text-black font-medium">Sacko Yvan</div>
                    <div className="text-black font-medium">Tapé Ange</div>
                  </div>
                </div>

                {/* Attaquants */}
                <div>
                  <h3 className="text-primary font-bold text-sm uppercase mb-3">
                    Attaquants
                  </h3>
                  <div className="space-y-2">
                    <div className="text-black font-medium">Conde Ali</div>
                    <div className="text-black font-medium">Touré Abakar</div>
                    <div className="text-black font-medium">Fofana Inza</div>
                  </div>
                </div>
              </div>

              {/* Remplaçants */}
              <div className="border-t pt-4">
                <h3 className="text-primary font-bold text-sm uppercase mb-3">
                  Remplaçants
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <div className="text-gray-600">Kone Ali Djinan</div>
                    <div className="text-gray-600">Dia Dylan</div>
                    <div className="text-gray-600">Soro Inza</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-600">Sacko Yvan</div>
                    <div className="text-gray-600">Tapé Ange</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Formation */}
            <div className="flex flex-col items-center">
              {/* Formation Number */}
              <div className="mb-6">
                <h2 className="text-6xl font-bold text-primary">4-3-3</h2>
              </div>

              {/* Football Field */}
              <div className="relative w-80 h-96 bg-green-500 rounded-lg border-4 border-white overflow-hidden">
                {/* Field markings */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-12 border-2 border-white border-t-0"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-12 border-2 border-white border-b-0"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-20 border-2 border-white border-t-0"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-20 border-2 border-white border-b-0"></div>
                </div>

                {/* Players */}
                {players.map((player, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
                    style={{ left: `${player.x}%`, top: `${player.y}%` }}
                  >
                    <div className="relative w-10 h-12">
                      <Image
                        src="/assets/images/all-img/maillot1.png"
                        alt={`Maillot ${player.name}`}
                        layout="fill"
                        objectFit="contain"
                      />
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold bg-black/50 px-1 rounded">
                        {player.number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-8">
                {/* Joueurs */}
                <div className="text-center flex flex-col items-center border rounded-lg overflow-hidden">
                  <div className="bg-primary text-white w-full mb-2 border-b text-center">
                    <span className="text-sm sm:text-base font-semibold block">
                      Joueurs
                    </span>
                  </div>
                  <Image
                    src="/assets/images/all-img/maillot2.png"
                    alt="Joueur"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Coach */}
                <div className="text-center flex flex-col items-center border rounded-lg overflow-hidden">
                  <div className="bg-primary text-white w-full mb-2 border-b text-center">
                    <span className="text-sm sm:text-base font-semibold block">
                      Coach
                    </span>
                  </div>
                  <Image
                    src="/assets/images/all-img/coach.png"
                    alt="Coach"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
