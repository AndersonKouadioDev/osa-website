"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ✅ corrige l'import

const TitleBanner = ({ title }: { title: string }) => {
  const router = useRouter(); // ✅ bien placé dans le composant

  return (
   <div className="px-7">
     <div
      className="relative w-full h-64 bg-[#5D0B9E] flex items-center justify-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage: 'url("/Assets/Images/all-img/BackgroundEquipe.png")',
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl font-bold text-yellow-400">{title}</h1>

      {/* Bouton qui rentre légèrement dans la bordure */}
      <button
        className="absolute bottom-2 left-30 border cursor-pointer  border-white text-white px-6 py-2 rounded-xl translate-y-1/3"
        onClick={() => router.back()} // ✅ ajoute les parenthèses
      >
        Retour
      </button>
    </div>
   </div>
  );
};

export default TitleBanner;
