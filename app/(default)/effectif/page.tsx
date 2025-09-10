import AppPromoBanner from "@/components/home/AppPromoBanner";
import Effectif from "@/features/club/effectif/effectif";
import TitleBanner from "@/components/common/TitleBanner";

export default function EffectifPage() {
    return (
        <div>
            <TitleBanner title="Effectif"/> 
           <Effectif/>
           <AppPromoBanner/>
        </div>
    );
}   