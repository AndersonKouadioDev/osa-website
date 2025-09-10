"use client"
import React, { useState } from "react";

interface Player {
  id: number;
  name: string;
  number: number;
  position: "GK" | "DF" | "MF" | "FW";
  image: string;
}

const Pension = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const players: Player[] = [
    { id: 1, name: "KAMARA", number: 28, position: "GK", image: "https://placehold.co/100x120/1a56ff/ffffff?text=KAMARA" },
    { id: 2, name: "TROUSSIER", number: 24, position: "DF", image: "https://placehold.co/100x120/ef4444/ffffff?text=TROUSSIER" },
    { id: 3, name: "DIAKITE", number: 3, position: "DF", image: "https://placehold.co/100x120/f59e0b/ffffff?text=DIAKITE" },
    { id: 4, name: "BAYA", number: 22, position: "DF", image: "https://placehold.co/100x120/10b981/ffffff?text=BAYA" },
    { id: 5, name: "KOUASSI", number: 34, position: "MF", image: "https://placehold.co/100x120/8b5cf6/ffffff?text=KOUASSI" },
    { id: 6, name: "MAGUIRE", number: 1, position: "GK", image: "https://placehold.co/100x120/06b6d4/ffffff?text=MAGUIRE" },
    { id: 7, name: "NGOTÉ", number: 2, position: "DF", image: "https://placehold.co/100x120/059669/ffffff?text=NGOTE" },
    { id: 8, name: "SARAKI", number: 55, position: "MF", image: "https://placehold.co/100x120/dc2626/ffffff?text=SARAKI" },
    { id: 9, name: "FALL", number: 52, position: "MF", image: "https://placehold.co/100x120/7c3aed/ffffff?text=FALL" },
    { id: 10, name: "KONÉ", number: 21, position: "FW", image: "https://placehold.co/100x120/ea580c/ffffff?text=KONE" },
    { id: 11, name: "DIOP", number: 10, position: "FW", image: "https://placehold.co/100x120/14b8a6/ffffff?text=DIOP" },
    { id: 12, name: "DIALLO", number: 11, position: "FW", image: "https://placehold.co/100x120/f97316/ffffff?text=DIALLO" },
    { id: 13, name: "ZONGO", number: 53, position: "MF", image: "https://placehold.co/100x120/8b5cf6/ffffff?text=ZONGO" },
    { id: 14, name: "BOUMA", number: 30, position: "GK", image: "https://placehold.co/100x120/06b6d4/ffffff?text=BOUMA" },
    { id: 15, name: "KONÉ", number: 9, position: "FW", image: "https://placehold.co/100x120/1f2937/ffffff?text=KONE" },
    { id: 16, name: "KAMARA", number: 16, position: "MF", image: "https://placehold.co/100x120/1a56ff/ffffff?text=KAMARA" },
    { id: 17, name: "SARR", number: 54, position: "MF", image: "https://placehold.co/100x120/059669/ffffff?text=SARR" },
    { id: 18, name: "DOUGO", number: 19, position: "FW", image: "https://placehold.co/100x120/14b8a6/ffffff?text=DOUGO" },
    { id: 19, name: "KONÉ", number: 25, position: "FW", image: "https://placehold.co/100x120/ea580c/ffffff?text=KONE" },
  ];

  const teamFormation: number[][] = [
    [1, 6, 14], // Goalkeepers
    [2, 3, 4, 7], // Defenders
    [5, 8, 9, 16, 17, 13], // Midfielders
    [10, 11, 12, 15, 18, 19], // Forwards
  ];

  const getTeamColor = (position: Player["position"]) => {
    switch (position) {
      case "GK":
        return "bg-red-500";
      case "DF":
        return "bg-blue-500";
      case "MF":
        return "bg-yellow-500";
      case "FW":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getPlayerColor = (playerId: number) => {
    const player = players.find((p) => p.id === playerId);
    if (!player) return "bg-gray-200";
    return getTeamColor(player.position);
  };

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* ... reste du code identique ... */}
    </div>
  );
};

export default Pension;
