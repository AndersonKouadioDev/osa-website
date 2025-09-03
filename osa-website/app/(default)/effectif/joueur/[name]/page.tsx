import Sponsors from "@/components/common/Sponsors";
import PlayerDetails from "@/features/joueurs/components/info-joueur/info-joueur";

export default function PlayerPage({params}: {params: {name: string}}){
    return (
        <>
            <PlayerDetails params={{name: params.name}} />
            <Sponsors />
        </>
    );
}