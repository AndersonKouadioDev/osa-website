"use client";
import Image from "next/image";
import Link from "next/link";


export default function Effectif() {
    const gardiens = [
        {
            name: "diamoutene mahamadou",
            number: "16",
            position: "GB",
            image: "/assets/images/joueurs/gardiens/gardien_16.png",
        },
        {
            name: "kanté zié aboubacar",
            number: "1",
            position: "GB",
            image: "/assets/images/joueurs/gardiens/gardien_1.png",
        },
        {
            name: "koffi jean yves",
            number: "30",
            position: "GB",
            image: "/assets/images/joueurs/gardiens/gardien_30.png",
        },
        {
            name: "diarrassouba mohamed",
            number: "41",
            position: "GB",
            image: "/assets/images/joueurs/gardiens/gardien_41.png",
        }
    ]
    const defenders = [
        {
            name: "cheick oumar",
            number: "17",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_17.png",
        },
        {
            name: "sylla aboubacar",
            number: "18",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_18.png",
        },
        {
            name: "bakayoko yaya",
            number: "2",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_2.png",
        },
        {
            name: "hinde thierry",
            number: "25",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_25.png",
        },
        {
            name: "seydou traore",
            number: "4",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_4.png",
        },
        {
            name: "koné ismaël",
            number: "23",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_23.png",
        },
        {
            name: "lago christ",
            number: "5",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_5.png",
        },
        {
            name: "guede abraham",
            number: "29",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_29.png",
        },
        {
            name: "keita tidiane",
            number: "24",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_24.png",
        },
        {
            name: "yoboue francis",
            number: "14",
            position: "DEF",
            image: "/assets/images/joueurs/defenseurs/def_14.png",
        }
    ]
    const midfielders = [
        {
            name: "koné ali djinan",
            number: "15",
            position: "MID",
            image: "/assets/images/joueurs/milieux/mil_15.png",
        },
        {
            name: "nom inconnu",
            number: "6",
            position: "MI",
            image: "/assets/images/joueurs/milieux/mil_6.png",
        },
        {
            name: "dia dylan",
            number: "12",
            position: "MID",
            image: "/assets/images/joueurs/milieux/mil_12.png",
        },
        {
            name: "nombre olivier",
            number: "8",
            position: "MIO",
            image: "/assets/images/joueurs/milieux/mil_8.png",
        },
        {
            name: "pately mohamed",
            number: "28",
            position: "MID",
            image: "/assets/images/joueurs/milieux/mil_28.png",
        },
        {
            name: "tapé ange",
            number: "35",
            position: "MID",
            image: "/assets/images/joueurs/milieux/mil_35.png",
        },
        {
            name: "sacko yvan",
            number: "10",
            position: "MIO",
            image: "/assets/images/joueurs/milieux/mil_10.png",
        },
        {
            name: "soro inza",
            number: "7",
            position: "MC",
            image: "/assets/images/joueurs/milieux/mil_7.png",
        },
        {
            name: "koffi dylan",
            number: "22",
            position: "MI",
            image: "/assets/images/joueurs/milieux/mil_22.png",
        },
        {
            name: "soumahoro abroulaye",
            number: "21",
            position: "MI",
            image: "/assets/images/joueurs/milieux/mil_21.png",
        },
        {
            name: "yaye hassane abdul kader",
            number: "40",
            position: "AG",
            image: "/assets/images/joueurs/milieux/mil_40.png",
        },
        {
            name: "Onogo yaya",
            number: "32",
            position: "MI",
            image: "/assets/images/joueurs/milieux/mil_32.png",
        },
        {
            name: "soumahoro Abroulay",
            number: "39",
            position: "MI",
            image: "/assets/images/joueurs/milieux/mil_39.png",
        },
        {
            name: "diarrassouba aguib",
            number: "38",
            position: "MI",
            image: "/assets/images/joueurs/milieux/mil_38.png",
        }
    ]
    const forwards = [
        {
            name: "guei asse alain",
            number: "9",
            position: "AD",
            image: "/assets/images/joueurs/attaquants/att_9.png",
        },
        {
            name: "zouhoule elvis mohamed",
            number: "13",
            position: "AG",
            image: "/assets/images/joueurs/attaquants/att_13.png",
        },
        {
            name: "lasme gnagne",
            number: "11",
            position: "ATT",
            image: "/assets/images/joueurs/attaquants/att_11.png",
        },
        {
            name: "bamba aboubacar",
            number: "33",
            position: "AD",
            image: "/assets/images/joueurs/attaquants/att_33.png",
        },
        {
            name: "alassane traore",
            number: "3",
            position: "ATT",
            image: "/assets/images/joueurs/attaquants/att_3.png",
        },
        {
            name: "touré abakar",
            number: "19",
            position: "ATT",
            image: "/assets/images/joueurs/attaquants/att_19.png",
        },
        {
            name: "conde ali",
            number: "36",
            position: "ATT",
            image: "/assets/images/joueurs/attaquants/att_36.png",
        },
        {
            name: "spiecker thierry",
            number: "20",
            position: "ATT",
            image: "/assets/images/joueurs/attaquants/att_20.png",
        },
        {
            name: "fofana inza",
            number: "34",
            position: "ATT",
            image: "/assets/images/joueurs/attaquants/att_34.png",
        },
        {
            name: "tra bi prince",
            number: "37",
            position: "ATT",
            image: "/assets/images/joueurs/attaquants/att_37.png",
        }
    ]
    return (
        <>
            {/* Header */}
            <div className="w-full bg-red-500 py-2 md:py-4 flex items-center justify-center">
                <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light">
                    Publicité
                </h1>
            </div>

            {/* Container principal */}
            <div className="w-[95%] min-h-[30vh] mx-auto bg-[#F3E8FF] mt-4 px-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold px-4 py-2 border-b-2 text-center text-[#5D0B9E] uppercase">
                    gardiens
                </h2>

                {/* Grid responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-24 lg:px-48 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-3 justify-items-center py-6">
                    {gardiens.map((joueur) => (
                        <Link 
                          key={joueur.name} 
                          href={`/club/effectif/joueur/${encodeURIComponent(joueur.name)}`} 
                          className="flex flex-col items-center relative w-full max-w-[250px] cursor-pointer hover:scale-105 transition-all"
                        >

                            {/* Image avec background */}
                            <div
                                className="relative w-full aspect-[3/4] rounded-md shadow-lg bg-cover bg-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/assets/images/all-img/link.png')" }}
                            >
                                <Image
                                    src={joueur.image}
                                    alt={joueur.name}
                                    width={200}
                                    height={160}
                                    className="object-contain"
                                />
                            </div>

                            {/* Carte infos joueur chevauchante */}
                            <div className="flex flex-row bg-amber-400 rounded-md shadow-lg px-3 sm:px-8 py-2 sm:mt-4 w-[100%] items-center absolute -bottom-4">
                                {/* Nom + position */}
                                <div className="flex flex-col w-2/3 pl-1">
                                    <p className="text-xs sm:text-sm font-semibold text-black capitalize">
                                        {joueur.name}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-white font-bold uppercase bg-blue-400 px-2 py-0.5 rounded mt-1 w-fit">
                                        {joueur.position}
                                    </p>
                                </div>

                                {/* Numéro */}
                                <div className="flex items-center justify-center w-1/3">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5D0B9E]">
                                        {joueur.number}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
            <div className="w-[95%] min-h-[30vh] mx-auto bg-[#F3E8FF] mt-4 px-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold px-4 py-2 border-b-2 text-center text-[#5D0B9E] uppercase">
                    defenseurs
                </h2>

                {/* Grid responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-24 lg:px-48 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-3 justify-items-center py-6">
                    {defenders.map((joueur) => (
                        <Link 
                          key={joueur.name} 
                          href={`/club/effectif/joueur/${encodeURIComponent(joueur.name)}`} 
                          className="flex flex-col items-center relative w-full max-w-[250px] cursor-pointer hover:scale-105 transition-all"
                        >

                            {/* Image avec background */}
                            <div
                                className="relative w-full aspect-[4/5] rounded-md shadow-lg bg-cover bg-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/assets/images/all-img/link.png')" }}
                            >
                                <Image
                                    src={joueur.image}
                                    alt={joueur.name}
                                    width={200}
                                    height={160}
                                    className="object-contain"
                                />
                            </div>

                            {/* Carte infos joueur chevauchante */}
                            <div className="flex flex-row bg-amber-400 rounded-md shadow-lg px-3 sm:px-8 py-2 sm:mt-4 w-[100%] items-center absolute -bottom-4">
                                {/* Nom + position */}
                                <div className="flex flex-col w-2/3 pl-1">
                                    <p className="text-xs sm:text-sm font-semibold text-black capitalize">
                                        {joueur.name}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-white font-bold uppercase bg-green-400 px-2 py-0.5 rounded mt-1 w-fit">
                                        {joueur.position}
                                    </p>
                                </div>

                                {/* Numéro */}
                                <div className="flex items-center justify-center w-1/3">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5D0B9E]">
                                        {joueur.number}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
            <div className="w-[95%] min-h-[30vh] mx-auto bg-[#F3E8FF] mt-4 px-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold px-4 py-2 border-b-2 text-center text-[#5D0B9E] uppercase">
                    milieux
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-24 lg:px-48 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-3 justify-items-center py-6">
                    {midfielders.map((joueur) => (
                        <Link 
                          key={joueur.name} 
                          href={`/club/effectif/joueur/${encodeURIComponent(joueur.name)}`} 
                          className="flex flex-col items-center relative w-full max-w-[250px] cursor-pointer hover:scale-105 transition-all"
                        >

                            {/* Image avec background */}
                            <div
                                className="relative w-full aspect-[4/5] rounded-md shadow-lg bg-cover bg-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/assets/images/all-img/link.png')" }}
                            >
                                <Image
                                    src={joueur.image}
                                    alt={joueur.name}
                                    width={200}
                                    height={160}
                                    className="object-contain"
                                />
                            </div>

                            {/* Carte infos joueur chevauchante */}
                            <div className="flex flex-row bg-amber-400 rounded-md shadow-lg px-3 sm:px-8 py-2 sm:mt-4 w-[100%] items-center absolute -bottom-4">
                                {/* Nom + position */}
                                <div className="flex flex-col w-2/3 pl-1">
                                    <p className="text-xs sm:text-sm font-semibold text-black capitalize">
                                        {joueur.name}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-white font-bold uppercase bg-yellow-300 px-2 py-0.5 rounded mt-1 w-fit">
                                        {joueur.position}
                                    </p>
                                </div>

                                {/* Numéro */}
                                <div className="flex items-center justify-center w-1/3">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5D0B9E]">
                                        {joueur.number}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-[90%] min-h-[30vh] mx-auto bg-[#F3E8FF] mt-4 px-4 rounded-lg">    
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold px-4 py-2 border-b-2 text-center text-[#5D0B9E] uppercase">
                    attaquants
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 md:px-24 lg:px-48 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-3 justify-items-center py-6">   
                    {forwards.map((joueur) => (
                        <Link 
                          key={joueur.name} 
                          href={`/club/effectif/joueur/${encodeURIComponent(joueur.name)}`} 
                          className="flex flex-col items-center relative w-full max-w-[250px] cursor-pointer hover:scale-105 transition-all"
                        >
                            <div
                                className="relative w-full aspect-[4/5] rounded-md shadow-lg bg-cover bg-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/assets/images/all-img/link.png')" }}
                            >
                                <Image
                                    src={joueur.image}
                                    alt={joueur.name}
                                    width={200}
                                    height={160}
                                    className="object-contain"
                                />
                            </div>

                            {/* Carte infos joueur chevauchante */}
                            <div className="flex flex-row bg-amber-400 rounded-md shadow-lg px-3 sm:px-8 py-2 sm:mt-4 w-[100%] items-center absolute -bottom-4">
                                {/* Nom + position */}
                                <div className="flex flex-col w-2/3 pl-1">
                                    <p className="text-xs sm:text-sm font-semibold text-black capitalize">
                                        {joueur.name}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-white font-bold uppercase bg-red-500 px-2 py-0.5 rounded mt-1 w-fit">
                                        {joueur.position}
                                    </p>
                                </div>

                                {/* Numéro */}
                                <div className="flex items-center justify-center w-1/3">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5D0B9E]">
                                        {joueur.number}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </>
    );

}