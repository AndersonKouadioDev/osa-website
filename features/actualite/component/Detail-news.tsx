"use client";
import Image from "next/image";
import { newsData } from "../newsData";
import { useRouter } from "next/navigation";
import { Play, MessageCircle, Eye } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel";
import Link from "next/link";

interface DetailNewsProps {
    params: {
        id: string;
    };
}

export default function DetailNews({ params }: DetailNewsProps) {
    const router = useRouter();
    const { id } = params;
    const detailNews = newsData.find((news) => news.id === parseInt(id));

    // Fonction pour extraire l'ID d'une vidéo YouTube
    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    // Vérifier si c'est une vidéo YouTube
    const isYoutubeVideo = detailNews?.image.includes("youtube.com") ||
        detailNews?.image.includes("youtu.be");

    // Vérifier si c'est une vidéo (autre que YouTube)
    const isVideo = detailNews?.hasVideo ||
        (detailNews?.image.startsWith("http") &&
            (detailNews.image.endsWith(".mp4") ||
                detailNews.image.endsWith(".webm") ||
                detailNews.image.endsWith(".mov")));

    // autre actualité
    const otherNews = newsData.filter((news) => news.id !== parseInt(id));

    return (
        <>
            <section className="relative w-full px-4 md:px-6 lg:px-8">
                <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-lg overflow-hidden">
                    <Image
                        src={detailNews?.image_principal || "/assets/images/baniere/detail_news.jpg"}
                        alt={detailNews?.title || "Détail actualité"}
                        fill
                        className="object-cover rounded-lg"
                    />
                    {/* Dégradé violet */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-800/100 via-purple-400/10 to-transparent"></div>

                    {/* Texte centré en bas */}
                    <div className="absolute bottom-16 sm:bottom-20 md:bottom-28 left-0 right-0 flex justify-center px-4 sm:px-6 md:px-8">
                        <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-exo2">
                            {detailNews?.title}
                        </h1>
                    </div>

                    {/* Bouton Retour */}
                    <button
                        className="absolute bottom-2 left-6 sm:left-4 md:left-6 border cursor-pointer border-white text-white px-6 py-1 sm:py-2 rounded-md sm:px-4 md:px-6 translate-y-1/3 hover:bg-white/10 transition z-10"
                        onClick={() => router.back()}
                    >
                        Retour
                    </button>

                    {/* Bouton Partager */}
                    <button
                        className="absolute bottom-2 right-2 sm:right-4 md:right-6 border cursor-pointer border-white text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-md hover:bg-white/10 transition z-10 text-xs sm:text-sm"
                    >
                        Partager
                    </button>
                </div>
            </section>

            {/* Date */}
            <div className="flex justify-center items-center mt-4 sm:mt-6">
                <span className="bg-amber-400 rounded-lg px-3 sm:px-4 py-1 sm:py-2 font-bold text-gray-900 text-sm sm:text-base">
                    {detailNews?.date}
                </span>
            </div>

            {/* Description */}
            <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-4 sm:mt-6 mb-6 sm:mb-10">
                <p className="text-gray-700 text-base sm:text-lg text-center leading-relaxed">
                    {detailNews?.description || "Aucune description disponible pour cet article."}
                </p>
            </div>

            {/* Media (Image/Video) */}
            <div className="relative w-full h-auto rounded-lg overflow-hidden flex justify-center px-4 sm:px-6">
                {isYoutubeVideo ? (
                    <div className="w-full max-w-4xl aspect-video shadow-md rounded-lg">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${getYoutubeId(detailNews?.image || "https://youtu.be/pYg7Yd-ZhuI?si=x6mUbyqhbF6MzHHw")}`}
                            title={detailNews?.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : isVideo ? (
                    <div className="w-full max-w-4xl aspect-video relative shadow-md rounded-lg">
                        <video
                            src={detailNews?.image}
                            controls
                            autoPlay
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/30 rounded-full p-3 sm:p-4">
                                <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-current" />
                            </div>
                        </div>
                    </div>
                ) : (
                    // Image normale
                    <div className="w-full max-w-2xl">
                        <Image
                            src={detailNews?.image || "/assets/images/baniere/detail_news.jpg"}
                            alt={detailNews?.title || "Détail actualité"}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                )}
            </div>

            {/* Métadonnées (vues, commentaires) */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base">
                <div className="flex items-center">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span>{detailNews?.views} vues</span>
                </div>
                <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span>{detailNews?.comments} commentaires</span>
                </div>
            </div>

            {/* Section commentaires */}
            <div className="px-4 sm:px-6 md:px-8 mt-6 sm:mt-8 md:mt-10">
                <div
                    className="relative w-full bg-primary h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center rounded-2xl overflow-hidden py-8 sm:py-10 md:py-12"
                    style={{
                        backgroundImage: `url("/assets/Images/all-img/BackgroundEquipe.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="max-w-4xl w-full px-4 sm:px-6 md:px-8 mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold text-white mb-6 sm:mb-8 md:mb-1 font-exo2">
                            Laisser un commentaire
                        </h2>

                        <form className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="comment" className=" text-sm sm:text-md font-medium text-white flex justify-start px-2 mb-2">
                                    Commentaire
                                </label>
                                <textarea
                                    placeholder="Votre commentaire..."
                                    className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    rows={4}
                                    required
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="flex-1">
                                    <label htmlFor="name" className=" text-sm sm:text-md font-medium text-white flex justify-start px-2 mb-2">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nom*"
                                        className="w-full px-4 py-2 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className=" text-sm sm:text-md font-medium text-white flex justify-start px-2 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full px-4 py-2 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-amber-400 text-black px-6 sm:px-8 py-2 text-sm sm:text-base rounded-lg hover:bg-amber-500 transition-colors"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Autres actualités */}
            <div className="mt-10 sm:mt-12 md:mt-16 mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700 mb-6 sm:mb-8 md:mb-10 uppercase font-exo2 text-center">
                    Autres actualités
                </h2>
                <div className="flex justify-center items-center px-2 sm:px-4">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl"
                    >
                        <CarouselContent className="-ml-2">
                            {Array.from({ length: otherNews.length }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-2 sm:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                                >
                                    <Link href={`/actualites/${otherNews[index].id}`}>
                                        <div className="p-1">
                                            <div className="overflow-hidden rounded-lg shadow-md relative">
                                                <Image
                                                    src={otherNews[index].image_principal}
                                                    alt={otherNews[index].title}
                                                    width={300}
                                                    height={200}
                                                    className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                                                />
                                                <span className="text-xs text-black bg-amber-400 px-2 py-1 rounded-full absolute top-2 left-2 sm:left-3 font-semibold">
                                                    {otherNews[index].date}
                                                </span>
                                            </div>
                                            <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-700 line-clamp-2 text-center">
                                                {otherNews[index].title}
                                            </p>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 sm:left-2 bg-white/80 hover:bg-white" />
                        <CarouselNext className="right-0 sm:right-2 bg-white/80 hover:bg-white" />
                    </Carousel>
                </div>
            </div>
        </>
    );
}