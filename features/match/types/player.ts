export interface Player {
  position: "ATTAQUANTS" | "MILIEUX" | "DEFENSEURS" | "GARDIENS"; // tu peux compléter avec toutes les positions possibles
  name: string;
  isStarter: boolean;
  number: number;
  x: number; // coordonnée X sur le terrain
  y: number; // coordonnée Y sur le terrain
}