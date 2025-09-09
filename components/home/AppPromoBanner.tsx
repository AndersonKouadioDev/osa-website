"use client";

import Image from "next/image";
import Link from "next/link";

export default function AppPromoBanner() {
  return (
    <div className="px-7">
      <section
      className="bg-cover bg-center rounded-2xl text-white py-10 px-4 md:px-12 mt-10"
      style={{ backgroundImage: "url('/assets/images/all-img/fond.png')" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        
        {/* Texte et boutons à gauche */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          
          {/* Logo + nom */}
          <div className="flex items-center justify-center md:justify-start mt-8">
            <Image
              src="/assets/images/all-img/abobo.png"
              alt="ABOBG+"
              width={200}
              height={150}
            />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base max-w-xl mx-auto md:mx-0">
            TÉLÉCHARGEZ LAPPLICATION ABOBG+ POUR UNE IMMERSION TOTALE DANS LUNIVERS
            DES FOOTBALL ABOBOLAIS.
          </p>

          {/* Boutons store */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="#">
              <Image
                src="/assets/images/all-img/appstore.png"
                alt="App Store"
                width={140}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/images/all-img/playstore.png"
                alt="Google Play"
                width={140}
                height={40}
              />
            </Link>
          </div>
        </div>

        {/* Image téléphone */}
        <div className="mt-8 md:mt-0 flex justify-center">
          <Image
            src="/assets/images/all-img/telephone.png"
            alt="Aperçu application ABOBG+"
            width={350}
            height={650}
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
    </div>
  );
}