"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface TitleBannerProps {
  title?: string;
  className?: string;
  backgroundImage?: string; // background du composant
  centerImage?: string; // image affichée au centre
}

const TitleBanner: React.FC<TitleBannerProps> = ({
  title,
  className = "",
  backgroundImage,
  centerImage,
}) => {
  const router = useRouter();

  return (
    <div className={`px-7 ${className}`}>
      <div
        className="relative w-full bg-primary h-52 flex flex-col items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage || "/assets/Images/all-img/BackgroundEquipe.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Image centrée */}
        {centerImage && (
          <div className="mb-2 z-10">
            <Image
              src={centerImage}
              alt={title || "center image"}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        )}

        {/* Title */}
        {title && (
          <h1 className="text-4xl font-bold text-yellow-400 text-center z-10">
            {title}
          </h1>
        )}

        {/* Bouton Retour */}
        <button
          className="absolute bottom-2 left-6 border cursor-pointer border-white text-white px-6 py-2 rounded-md translate-y-1/3 hover:bg-white/10 transition z-10"
          onClick={() => router.back()}
        >
          Retour
        </button>
      </div>
    </div>
  );
};

export default TitleBanner;
