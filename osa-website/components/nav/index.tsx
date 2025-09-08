"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CircleUserRound, LayoutGrid, ShoppingCart, Menu, X } from "lucide-react";
import { IoBusiness, IoCashSharp, IoFootball, IoHome, IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [yellowBarTop, setYellowBarTop] = useState(56);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const subMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 10);

            if (scrollY > 0) {
                const newTop = Math.max(0, 56 - scrollY * 0.5);
                setYellowBarTop(newTop);
            } else {
                setYellowBarTop(56);
            }
        };

        // Fermer le sous-menu en cliquant à l'extérieur
        const handleClickOutside = (event: any) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
                setIsSubMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        
        <header className="w-full">
            {/* Navbar principale */}
            <nav className={`w-full bg-white/80 backdrop-blur top-0 left-0 z-1 transition-all ${isScrolled ? 'py-1' : 'py-2'}`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Groupe gauche */}
                        <div className="flex items-center gap-4 md:gap-6">
                            {/* Logo */}
                            <Link href="/" className="flex items-center flex-shrink-0">
                                <Image
                                    src="/assets/images/all-img/logoOSA.png"
                                    alt="Logo OSA"
                                    width={44}
                                    height={44}
                                    priority
                                    className="w-8 h-8 md:w-11 md:h-11"
                                />
                            </Link>

                            {/* Menu desktop */}
                            <div className="hidden md:flex items-center gap-6">
                                <ul className="flex items-center gap-4 lg:gap-6 list-none m-0 p-0">
                                    <li>
                                        <Link href="/boutique" className="text-base lg:text-[18px] font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors">Boutique</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.billetweb.fr/championnat-national-de-football-fif-cote-divoire"
                                            target="_blank"
                                            className="text-base lg:text-[18px] font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors"
                                        >
                                            Billetterie
                                        </Link>
                                    </li>
                                </ul>

                                <Image
                                    src="/assets/images/nav/osatv.png"
                                    alt="OSA TV"
                                    width={56}
                                    height={56}
                                    className="w-10 h-10 lg:w-14 lg:h-14"
                                />
                            </div>
                        </div>

                        {/* Groupe droit */}
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="hidden md:flex items-center gap-4 md:gap-6">
                                <ul className="flex items-center gap-4 md:gap-6 list-none m-0 p-0">
                                    <li>
                                        <Link
                                            href="/panier"
                                            className="text-md font-medium text-gray-700 hover:text-amber-400 transition-colors font-[var(--font-exo)] uppercase"
                                            aria-label="Panier"
                                        >
                                            <ShoppingCart size={22} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/connexion"
                                            className="flex items-center gap-2 text-base font-medium text-white bg-amber-400 hover:bg-amber-500 px-3 py-1.5 rounded-lg transition-colors justify-center font-[var(--font-exo)] uppercase font-semibold"
                                        >
                                            Accéder
                                            <CircleUserRound className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                                        </Link>
                                    </li>
                                </ul>

                                <div className="flex items-center gap-3 md:gap-4">
                                    <Image
                                        src="/assets/images/nav/sport.png"
                                        alt="OSA Sport"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 lg:w-10 lg:h-10"
                                    />
                                    <Image
                                        src="/assets/images/nav/cma.png"
                                        alt="CMA"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 lg:w-10 lg:h-10"
                                    />
                                </div>
                            </div>

                            {/* Menu mobile burger */}
                            <button
                                className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-400 focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Ouvrir le menu"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-gray-200 pt-6 ">
                        <div className="px-4 py-5 space-y-6">
                            <div className="flex flex-col space-y-4">
                                <Link
                                    href="/boutique"
                                    className="text-md font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Boutique
                                </Link>
                                <Link
                                    href="/billetterie"
                                    className="text-md font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Billetterie
                                </Link>
                                <Link
                                    href="/actualites"
                                    className="text-md font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Actualités
                                </Link>
                                <Link
                                    href="/club"
                                    className="text-md font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Club
                                </Link>
                                <Link
                                    href="/calendrier"
                                    className="text-md font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Calendrier
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-md font-[var(--font-exo)] font-semibold uppercase text-gray-700 hover:text-amber-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>

                            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
                                <Link
                                    href="/panier"
                                    className="flex items-center text-md font-medium text-gray-700 hover:text-amber-400 transition-colors font-[var(--font-exo)] uppercase"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <ShoppingCart className="mr-2" size={18} />
                                    Panier
                                </Link>
                                <div className="flex items-center justify-center gap-6 text-lg font-medium text-white px-4 py-2 rounded-lg transition-colors font-[var(--font-exo)] uppercase font-semibold">
                                    <Image
                                        src="/assets/images/nav/osatv.png"
                                        alt="OSA TV"
                                        width={44}
                                        height={44}
                                        priority
                                        className="w-12 h-12 md:w-11 md:h-11"
                                    />
                                    <Image
                                        src="/assets/images/nav/sport.png"
                                        alt="Partenaire Sport"
                                        width={44}
                                        height={44}
                                        priority
                                        className="w-12 h-12 md:w-11 md:h-11"
                                    />
                                </div>
                                <Link
                                    href="/acceder"
                                    className="flex items-center justify-center gap-2 text-lg font-medium text-white bg-amber-400 hover:bg-amber-500 px-4 py-2 rounded-lg transition-colors font-[var(--font-exo)] uppercase font-semibold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Accéder
                                    <CircleUserRound className="w-5 h-5 text-black" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Section jaune fixe - Réduction fluide au scroll */}
            <div
                className="fixed left-1/2 transform -translate-x-1/2 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-12 md:h-14 bg-amber-400 rounded-full z-40 flex items-center justify-center shadow-lg transition-all duration-300"
                style={{ top: `${yellowBarTop}px` }}
            >
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4 uppercase font-[var(--font-exo)] font-semibold text-xs md:text-sm w-full px-4 md:px-6 justify-center">
                    {/* Icône carré avec sous-menu */}
                    <div className="relative" ref={subMenuRef}>
                        <button
                            onClick={toggleSubMenu}
                            className="hover:text-white transition-colors flex items-center cursor-pointer"
                            aria-label="Ouvrir le menu"
                            aria-expanded={isSubMenuOpen}
                        >
                            <LayoutGrid className="w-4 h-4 md:w-5 md:h-5 text-black flex-shrink-0 hover:text-white transition-colors duration-300" />
                        </button>

                        {/* Sous-menu */}
                        {isSubMenuOpen && (
                            <div className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-md shadow-lg py-1">
                                <Link
                                    href="/effectif"
                                    className="block px-4 py-4 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoPeopleSharp size={18} />
                                        effectif
                                    </div>

                                </Link>
                                <Link
                                    href="/fondation"
                                    className="block px-4 py-4 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoHome size={18} />
                                        fondation
                                    </div>

                                </Link>
                                <Link
                                    href="/fierte"
                                    className="block px-4 py-4 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoPeopleOutline size={18} />
                                        Ex pensionnaires
                                    </div>
                                </Link>
                                {/* <Link
                                    href="/media"
                                    className="block px-4 py-4 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoPlayCircle size={18} />
                                        media
                                    </div>
                                </Link> */}
                                <Link
                                    href="/soutien"
                                    className="block px-4 py-4 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoCashSharp size={18} />
                                        soutenir le club
                                    </div>
                                </Link>
                                <Link
                                    href="/formation"
                                    className="block px-4 py-4 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoBusiness size={18} />
                                        centre de formation
                                    </div>
                                </Link>
                                {/* <Link
                                    href="/application-mobile"
                                    className="block px-4 py-4 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoPhonePortraitOutline size={18} />
                                        application mobile
                                    </div>
                                </Link> */}
                                {/* <Link
                                    href="/newsletter"
                                    className="block px-4 py-2 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoNewspaper size={18} />
                                        newsletter
                                    </div>
                                </Link> */}
                                <Link
                                    href="/match"
                                    className="block px-4 py-2 text-[14px] font-[var(--font-exo)] font-semibold text-[#5B00A5] hover:bg-amber-100 border-b border-gray-200"
                                    onClick={() => setIsSubMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <IoFootball size={18} />
                                        match en direct
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>

                    <span className="w-px h-4 md:h-5 bg-black"></span>
                    <Link href="/actualites" className="hover:text-white transition-colors whitespace-nowrap text-ellipsis overflow-hidden">Actualités</Link>
                    <Link href="/club" className="hover:text-white transition-colors whitespace-nowrap text-ellipsis overflow-hidden">Club</Link>
                    <Link href="/calendrier" className="hover:text-white transition-colors whitespace-nowrap text-ellipsis overflow-hidden">Calendrier</Link>
                    <Link href="/contact" className="hover:text-white transition-colors whitespace-nowrap text-ellipsis overflow-hidden">Contact</Link>
                </div>
            </div>
        </header>
    );
}