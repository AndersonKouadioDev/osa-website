"use client";

import Image from "next/image";

export default function Hero() {
  
    return (
        <section className="w-full px-4 md:px-6 lg:px-8">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat">
                <Image
                    src="/assets/images/baniere/home_hero.png"
                    alt="Hero"
                    width={1920}
                    height={1080}
                    className="w-full h-[60vh] object-cover md:h-[60vh] sm:h-[60vh] lg:h-full rounded-lg"
                />
            </div>
        </section>
    );
}