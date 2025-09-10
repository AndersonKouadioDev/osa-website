export interface Match {
  id: number;
  date: string;
  league: string;
  team1: string;
  team2: string;
  score?: string; // optionnel si le match n'est pas terminé
  status: "finished" | "upcoming";
  venue: string;
  team1_image: string;
  team2_image: string;
}

export interface MatchCardProps {
  match: Match;
}
