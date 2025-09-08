"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full px-4 md:px-6 lg:px-8">
            <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[100vh] rounded-lg overflow-hidden">
                <Image
                    src="/assets/images/baniere/home_hero.jpg"
                    alt="Hero"
                    fill
                    className="object-cover"
                    priority
                />
                
                {/* Overlay pour meilleure lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
                
                {/* Texte centré verticalement et horizontalement */}
                <div className="absolute top-[-250px] sm:top-[-250px] md:top-[-500px] lg:top-[-450px] inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase font-exo2 text-purple-700">
                        Formation - Éducation - Insertion
                    </h1>
                </div>
            </div>
        </section>
    );
}