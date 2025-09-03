import InfoJoueur from "@/features/joueurs/components/info-joueur/info-joueur";

export default function PlayerDetails({ params }: { params: { name: string } }) {
  return <InfoJoueur params={params} />;
}