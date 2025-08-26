"use client";

import Image from "next/image";
import { Button } from "../ui/button";


export default function BoutiqueSection() {
  const produits = [
    {
      id: 1,
      nom: "MAILLOT DOMICILE 24/25 VIP",
      prix: "30.000 CFA",
      image: "/Assets/images/all-img/maillot1.png", // Mets le vrai chemin de ton image
    },
    {
      id: 2,
      nom: "MAILLOT EXTÉRIEUR 24/25 VIP",
      prix: "30.000 CFA",
      image: "/Assets/Images/all-img/maillot2.png",
    },
    {
      id: 3,
      nom: "MAILLOT THIRD 24/25 VIP",
      prix: "30.000 CFA",
     image: "/Assets/Images/all-img/maillot3.png",
    },
  ];

  return (
   <div className="px">
     <section className=" text-white py-12 bg-center bg-cover px-4 mt-5" 
    style={{ backgroundImage: "url('/Assets/images/all-img/BackgroundMaillot.png')" }} >
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          DU NOUVEAU À LA BOUTIQUE
        </h2>

        {/* Grille des produits */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produits.map((produit) => (
            <div
              key={produit.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72">
                <Image
                  src={produit.image}
                  alt={produit.nom}
                  fill
                  className="object-contain p-4"
                 
                />
              </div>

              {/* Infos produit */}
              <div className="bg-[#5D0B9E] text-white p-4 text-center">
                <h3 className="font-semibold text-sm md:text-base">
                  {produit.nom}
                </h3>
                <p className="text-lg font-bold mt-2">{produit.prix}</p>
                <Button
                  variant="default"
                  className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full px-6"
                >
                  Je commande
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton visiter boutique */}
        <div className="mt-10">
          <Button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold rounded-full px-6">
            Visiter la boutique
          </Button>
        </div>
      </div>
    </section> 
   </div>
  );
}
