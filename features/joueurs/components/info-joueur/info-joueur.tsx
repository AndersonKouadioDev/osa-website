"use client";

import Image from "next/image";
import Link from "next/link";
import {
  findPlayerByName,
  findPlayersByPosition,
} from "@/features/club/effectif/playersData";
import { useRouter } from "next/navigation";
import DoubleTrait from "@/components/common/doubleTrait";

type Player = {
  name: string;
  number: string;
  position: string;
  image: string;
  nationality: string;
  dob: string;
  foot: string;
  matchesPlayed: number;
  titularities: number;
  appearances: number;
  shots: number;
  shotsOnTarget: number;
  yellowCards: number;
  redCards: number;
  galleryImages: string[];
  samePositionPlayers: Player[];
};

// Données par défaut pour les statistiques
const defaultStats = {
  nationality: "Ivoirienne",
  dob: "Inconnue",
  foot: "Droit",
  matchesPlayed: 0,
  titularities: 0,
  appearances: 0,
  shots: 0,
  shotsOnTarget: 0,
  yellowCards: 0,
  redCards: 0,
  galleryImages: [
    "/assets/images/joueurs/gardiens/gardiens_16_1.png",
    "/assets/images/joueurs/gardiens/gardiens_16_2.png",
    "/assets/images/joueurs/gardiens/gardiens_16_3.png",
    "/assets/images/joueurs/gardiens/gardiens_16_4.png",
  ],
};

// Fonction pour obtenir le libellé complet de la position
const getPositionLabel = (position: string): string => {
  const router = useRouter();
  const positions: { [key: string]: string } = {
    GB: "Gardiens",
    DEF: "Défenseurs",
    MI: "Milieux",
    MIO: "Milieux Offensifs",
    MC: "Milieux Centraux",
    MID: "Milieux Défensifs",
    ATT: "Attaquants",
    AG: "Ailiers Gauches",
    AD: "Ailiers Droits",
  };
  return positions[position] || "Joueurs";
};

//props
interface playerProps {
  params: {
    name: string;
  };
}
export default function PlayerDetails({ params }: playerProps) {
  const router = useRouter();
  const playerName = decodeURIComponent(params.name);

  // fonction pour obtenir les statistiques aleatoire
  const getRandomStats = () => {
    const stats = {
      nationality: "Ivoirienne",
      dob: "Inconnue",
      foot: "Droit",
      matchesPlayed: Math.floor(Math.random() * 100),
      titularities: Math.floor(Math.random() * 100),
      appearances: Math.floor(Math.random() * 100),
      shots: Math.floor(Math.random() * 100),
      shotsOnTarget: Math.floor(Math.random() * 100),
      yellowCards: Math.floor(Math.random() * 10),
      redCards: Math.floor(Math.random() * 10),
    };
    return stats;
  };

  // Trouver le joueur
  const playerData = findPlayerByName(playerName);

  if (!playerData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Joueur non trouvé
          </h1>
          <Link href="/club/effectif" className="text-blue-600 hover:underline">
            Retour à l'effectif
          </Link>
        </div>
      </div>
    );
  }

  // Récupérer les joueurs de la même position (exclure le joueur actuel)
  const samePositionPlayers = findPlayersByPosition(
    playerData.position,
    playerData.name
  ).slice(0, 6); // Limiter à 6 joueurs maximum

  // Créer l'objet joueur complet avec toutes les données
  const player: Player = {
    ...playerData,
    ...defaultStats,
    samePositionPlayers: samePositionPlayers.map((p: any) => ({
      ...p,
      ...defaultStats,
      ...getRandomStats(),
      samePositionPlayers: [] as Player[], // Type explicite pour le tableau vide
    })),
  };

  return (
    <div className="min-h-screen relative">
      {/* En-tête du joueur */}
      <div className="w-full px-4 md:px-6 lg:px-8 h-[70vh] sm:h-[70vh] md:h-[65vh]">
        <div
          className="relative h-[65vh] rounded-lg bg-primary flex items-center justify-center text-white"
          style={{
            backgroundImage: `url("/assets/Images/all-img/BackgroundEquipe.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 opacity-80 flex flex-col items-center justify-center p-4">
            <h1 className="text-[55px] sm:text-[55px] md:text-[105px] font-bold mb-2 uppercase text-center font-exo2 px-6 leading-[1.2] text-transparent stroked-text">
              {player.name}
            </h1>
            <div className="flex items-center gap-4 absolute top-[50%] sm:top-[50%] md:top-[50%] lg:top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <Image
                src={player.image}
                alt={player.name}
                width={300}
                height={300}
                className="object-cover w-[600px] sm:w-[800px] md:w-[800px] lg:w-[300px] h-[440px] sm:h-[440px] md:h-[700px] lg:h-[405px]"
              />
            </div>
          </div>

          <button
            className="absolute bottom-2 left-6 border cursor-pointer border-white text-white px-6 py-2 rounded-md translate-y-1/3 hover:bg-white/10 transition z-10"
            onClick={() => router.back()}
          >
            Retour
          </button>
        </div>
      </div>

      {/* Section principale */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white mb-8">
          <div className="grid grid-cols-1  md:grid-cols-2">
            <div className="ml-[100px]">
              <div className="flex items-center">
                <h3 className="text-[220px] font-bold text-amber-400">
                  {player.number}
                </h3>
                <div className="flex items-center ml-[-100px] sm:ml-[-100px] md:ml-[-85px] lg:ml-[-85px]">
                  <Image
                    src={player.image}
                    alt={player.name}
                    width={300}
                    height={300}
                    className="object-cover z-10 w-[150px] h-[300px] sm:w-[150px]  sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[200px] lg:h-[300px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-4 gap-6">
              <div className="col-span-2 border border-purple-800 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-md font-semibold mb-2 text-gray-600">
                  Position :
                </h3>
                <p className="text-amber-400 font-bold text-[28px]">
                  {getPositionLabel(player.position)}
                </p>
              </div>
              <div className="col-span-2 border border-purple-800 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-md font-semibold  mb-2 text-gray-600 ">
                  Nationalité :
                </h3>
                <p className="text-amber-400 font-bold text-[28px]">
                  {player.nationality}
                </p>
              </div>
              <div className="col-span-2 border border-purple-800 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-md font-semibold  mb-2 text-gray-600 ">
                  Date de naissance :
                </h3>
                <p className="text-amber-400 font-bold text-[28px]">
                  {player.dob}
                </p>
              </div>
              <div className="col-span-2 border border-purple-800 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-md font-semibold  mb-2 text-gray-600 ">
                  Pied fort :
                </h3>
                <p className="text-amber-400 font-bold text-[28px]">
                  {player.foot}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="bg-amber-400 mb-8 rounded-lg ">
          <div className="container mx-auto px-4 py-4 border-b  border-gray-500 border-opacity-20">
            <h2 className="text-4xl font-bold mb-6 text-purple-800 uppercase text-center">
              matchs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-3 gap-6 flex items-center justify-center px-4">
            <div className="mt-0">
              <div>
                <h3 className="text-black font-bold text-[70px] text-center">
                  {getRandomStats().matchesPlayed}
                </h3>
              </div>

              <div className="text-md font-semibold text-gray-800 text-center ">
                matchs joués{" "}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <h3 className="text-[50px] font-semibold text-black">
                  {getRandomStats().titularities}
                </h3>
                <p className="text-gray-800 text-[20px]">Titulaire</p>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-[50px] font-semibold text-red-600">
                  {getRandomStats().appearances}
                </h3>
                <p className="text-gray-800 text-[20px]">Remplaçant</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <p className="text-gray-800 text-[20px]">Cartons jaunes</p>
                <p className="text-[20px] font-semibold bg-yellow-300 text-black rounded-lg px-4 py-4 mb-2">
                  {getRandomStats().yellowCards}
                </p>
              </div>
              <div className="flex items-center mb-0 gap-2 sm:mb-2">
                <p className="text-gray-800 text-[20px]">Cartons jaunes</p>
                <p className="text-[20px] font-semibold bg-red-600 text-black rounded-lg px-4 py-4 mb-2">
                  {getRandomStats().redCards}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Galerie */}
        {player.galleryImages && player.galleryImages.length > 0 && (
          <div className="bg-white rounded-lg mb-8 px-6 border border-purple-800 border-2 rounded-lg">
            <div className="">
              <h2 className="text-[40px] font-bold mb-6 text-purple-800 uppercase text-center py-2 border-b">
                Quelques images de notre osalaire
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {player.galleryImages.map((img, index) => (
                  <div key={index} className="rounded-lg">
                    <Image
                      src={img}
                      alt={`${player.name} ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            <DoubleTrait className="flex justify-center items-center space-x-2 pt-20" />
          </div>
        )}

        {/* Joueurs au même poste */}
        {player.samePositionPlayers.length > 0 && (
          <div className="bg-[#F3E8FF] border border-[#F3E8FF] rounded-lg shadow-md p-6">
            <h2 className="text-[40px] font-bold mb-6 text-purple-800 uppercase text-center py-4 border-b-2">
              Autres {getPositionLabel(player.position)}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-4 py-4 justify-items-center">
              {player.samePositionPlayers.map((p) => (
                <Link
                  key={p.name}
                  href={`/effectif/joueur/${encodeURIComponent(p.name)}`}
                  className="group block transition-transform"
                >
                  <div
                    className="relative w-full aspect-[4/5] rounded-md shadow-lg bg-cover bg-center flex items-center justify-center"
                    style={{
                      backgroundImage: "url('/assets/images/all-img/link.png')",
                    }}
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2 flex items-center justify-center">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={150}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-row bg-amber-400 rounded-md shadow-lg gap-2 sm:px-8 sm:mt-4 w-[100%] items-center absolute -bottom-4">
                      {/* Nom + position */}
                      <div className="flex flex-col">
                        <p className="text-xs sm:text-sm font-semibold text-black capitalize">
                          {p.name}
                        </p>
                        <p className="text-[10px] sm:text-xs text-white font-bold uppercase bg-red-500 px-2 py-0.5 rounded mt-1 w-fit">
                          {p.position}
                        </p>
                      </div>

                      {/* Numéro */}
                      <div className="flex items-center justify-center">
                        <p className="text-[20px] sm:text-[22px] md:text-[22px] font-bold text-[#5D0B9E]">
                          {p.number}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
