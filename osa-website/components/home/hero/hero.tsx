"use client";

import Image from "next/image";

export default function Hero() {
  
    return (
        <section className="w-full px-4 md:px-6 lg:px-8">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat">
                <Image
                    src="/assets/images/baniere/home_hero.jpg"
                    alt="Hero"
                    width={1920}
                    height={1080}
                    className="w-full h-[60vh] object-cover md:h-[60vh] sm:h-[60vh] lg:h-full rounded-lg"
                />
            </div>
            <div className="absolute top-[-200px]  sm:top-[-200px] md:top-[-400px] lg:top-[-100px] left-0 w-full h-full flex flex-col items-center justify-center ">
                <h1 className="text-primary text-[15px] sm:text-[15px] md:text-[40px] font-bold uppercase font-exo2 ">Formation - éducation - Insertion </h1>
                
            </div>
        </section>
    );
}