import DetailNews from "@/features/actualite/component/Detail-news";
import Sponsors from "@/components/common/Sponsors";


export default function DetailNewsPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <DetailNews params={{id: params.id}} />
            <Sponsors />
        </div>
    );
}