import Image from "next/image";
import Link from "next/link";

type Player = {
  name: string;
  number: number;
  position: string;
  nationality: string;
  dob: string;
  foot: string;
  matchesPlayed: number;
  shots: number;
  shotsOnTarget: number;
  yellowCards: number;
  redCards: number;
  image: string;
  galleryImages: string[];
  samePositionPlayers: {
    name: string;
    number: number;
    image: string;
  }[];
};

export default function PlayerDetails({
  params,
}: {
  params: { name: string };
}) {
  const playerName = decodeURIComponent(params.name);

  // Données factices basées sur l'image
  const player: Player = {
    name: playerName,
    number: 16,
    position: "Gardien",
    nationality: "Ivoirienne",
    dob: "20 Déc 2004",
    foot: "Droit",
    matchesPlayed: 6,
    shots: 5,
    shotsOnTarget: 1,
    yellowCards: 0,
    redCards: 0,
    image: "/assets/images/joueurs/gardiens/gardien_16.png",
    galleryImages: [
      "/assets/images/all-img/player-gallery-1.png",
      "/assets/images/all-img/player-gallery-2.png",
      "/assets/images/all-img/player-gallery-3.png",
      "/assets/images/all-img/player-gallery-4.png",
    ],
    samePositionPlayers: [
      { name: "Kouassi Jean", number: 1, image: "/assets/images/joueurs/gardiens/gardien_1.png" },
      { name: "Traore Adama", number: 30, image: "/assets/images/joueurs/gardiens/gardien_30.png" },
      { name: "Diallo Moussa", number: 41, image: "/assets/images/joueurs/gardiens/gardien_41.png" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* En-tête du joueur */}
      <div className="relative h-64 bg-purple-800 flex items-center justify-center text-white overflow-hidden">
        <Image
          src={player.image}
          alt={player.name}
          width={200}
          height={200}
          className="object-cover h-full w-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-700/80 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{player.name}</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">#{player.number}</span>
            <span className="text-xl">{player.position}</span>
          </div>
        </div>
      </div>

      {/* Section principale */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Informations du joueur</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Nationalité</h3>
                <p className="text-lg">{player.nationality}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Date de naissance</h3>
                <p className="text-lg">{player.dob}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Pied fort</h3>
                <p className="text-lg">{player.foot}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Statistiques de la saison</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Matchs joués</span>
                  <span className="font-medium">{player.matchesPlayed}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tirs</span>
                  <span className="font-medium">{player.shots}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tirs cadrés</span>
                  <span className="font-medium">{player.shotsOnTarget}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cartons jaunes</span>
                  <span className="font-medium">{player.yellowCards}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cartons rouges</span>
                  <span className="font-medium">{player.redCards}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Galerie */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {player.galleryImages.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={`${player.name} ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Joueurs au même poste */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Au même poste</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {player.samePositionPlayers.map((p) => (
              <Link 
                href={`/joueurs/${encodeURIComponent(p.name)}`} 
                key={p.number}
                className="group"
              >
                <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-purple-50 transition-colors">
                  <div className="relative h-32 w-full mb-2 overflow-hidden rounded-md">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-gray-600">#{p.number}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
