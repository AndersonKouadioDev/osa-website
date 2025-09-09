"use client"

import React from 'react'

const categories = [
  {
    name: "Pupille",
    age: "6-11 ans",
    description: "Formation de base, apprentissage des fondamentaux du football",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
    image: "/assets/images/categorie/PUPILLES-U13-1-500x340.jpeg",
    level: "U13"
  },
  {
    name: "Minime",
    age: "12-13 ans",
    description: "Développement technique et tactique, consolidation des acquis",
    color: "bg-green-500",
    textColor: "text-green-600",
    bgLight: "bg-green-50",
    image: "/assets/images/categorie/MINIMES-U15-1-500x334.jpeg",
    level: "U15"
  },
  {
    name: "Cadet",
    age: "14-15 ans",
    description: "Perfectionnement technique, introduction aux aspects stratégiques",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    bgLight: "bg-orange-50",
    image: "/assets/images/categorie/CADET-6-500x336.jpg",
    level: "U17"
  },
  {
    name: "Junior",
    age: "16-17 ans",
    description: "Préparation à la compétition senior, développement physique",
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgLight: "bg-purple-50",
    image: "/assets/images/categorie/LES-JUNIORS-U20-2-500x334.jpeg",
    level: "U20"
  },
]

export default function FCOSACategories() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Catégories */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          Nos Catégories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className="
                  relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                  border-2 border-transparent 
                  h-56 sm:h-72 md:h-80 lg:h-96 w-full
                "
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Badge du level */}
                <span className="absolute bottom-4 left-4 text-[#ffc107] text-lg sm:text-xl md:text-2xl font-bold px-3 py-1 rounded-lg shadow-md bg-black/50">
                  {category.level}
                </span>
              </div>
              <h1 className="text-center font-bold text-2xl py-4">
                Nos {category.name}s
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
