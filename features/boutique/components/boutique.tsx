"use client";

import Image from "next/image";

import { produits } from "@/components/boutique/produits";
import { Button } from "@/components/ui/button";



export default function Boutique() {
 

  return (
   <div className="px">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5B21B6] uppercase tracking-wide text-center mb-10 mt-4">
          Notre Équipe
        </h2>
     <section className=" text-white py-12 bg-center bg-cover px-4 mt-5" 
    style={{ backgroundImage: "url('/assets/images/all-img/backgroundmaillot.png')" }} >
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
       
      </div>
    </section> 
   </div>
  );
}
