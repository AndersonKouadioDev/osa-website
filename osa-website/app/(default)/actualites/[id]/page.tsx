import DetailNews from "@/components/actualite/Detail-news";
import Sponsors from "@/components/common/Sponsors";


export default function DetailNewsPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <DetailNews params={{id: params.id}} />
            <Sponsors />
        </div>
    );
}