"use client"

import React from 'react'
import { Users, Trophy, GraduationCap, FileText, AlertTriangle, Phone, Star } from 'lucide-react'

const categories = [
  {
    name: "Pupille",
    age: "6-11 ans",
    description: "Formation de base, apprentissage des fondamentaux du football",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgLight: "bg-blue-50",
    image: "/Assets/images/categorie/PUPILLES-U13-1-500x340.jpeg"
  },
  {
    name: "Minime",
    age: "12-13 ans",
    description: "Développement technique et tactique, consolidation des acquis",
    color: "bg-green-500",
    textColor: "text-green-600",
    bgLight: "bg-green-50",
      image: "/Assets/images/categorie/MINIMES-U15-1-500x334.jpeg"
  },
  {
    name: "Cadet",
    age: "14-15 ans",
    description: "Perfectionnement technique, introduction aux aspects stratégiques",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    bgLight: "bg-orange-50",
    image: "/Assets/images/categorie/CADET-6-500x336.jpg"
  },
  {
    name: "Junior",
    age: "16-17 ans",
    description: "Préparation à la compétition senior, développement physique",
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgLight: "bg-purple-50",
     image: "/Assets/images/categorie/LES-JUNIORS-U20-2-500x334.jpeg"
  },
 
]

const documents = [
  "Photocopie extrait de naissance",
  "02 photos d'identité",
  "Photo pièce d'identité du parent",
  "Signalement des allergies et mesures à prendre"
]

export default function FCOSACategories() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* En-tête avec présentation */}
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Trophy className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900">FC OSA</h1>
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <p className="text-xl font-semibold text-[#ffb900]">Toujours en avant !</p>
        
        <div className="bg-gradient-to-br from-primary to-[#ffb900] rounded-xl p-8 text-left max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Star className="h-6 w-6 text-[#ffb900] mr-2" />
            Présentation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Créé en 2001, le Centre de Formation Olympique Sport d'Abobo est resté fidèle à sa philosophie depuis toutes ces années qui est de <strong>former, éduquer et aider</strong> les jeunes ivoiriens et africains dans le but de les détourner des vices et maux qui minent les sociétés africaines grâce à une feuille de route en 3 axes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            De nombreux joueurs passés par le Centre de Formation brillent aujourd'hui en tant que professionnels, aussi bien en équipe senior avant d'entamer une carrière professionnelle dans les clubs d'Europe et du Monde entier. <strong>Une preuve du savoir-faire de la formation osalaise.</strong>
          </p>
        </div>
      </div>

      {/* Catégories */}
      <div className="space-y-8">
  <h2 className="text-4xl font-bold text-center text-primary bg-pr mb-8">
    Nos Catégories
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6"  
   
    >
    {categories.map((category, index) => (
      <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-transparent  h-96 w-full"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
         
         

          {/* Hover effect overlay */}
      
        </div>
        <h1 className='text-center font-bold  text-2xl py-4'> Nos {category.name}s </h1>
      </div>
    ))}
  </div>
</div>


      {/* Section inscription */}
     

      {/* Call to action */}
      
    </div>
  )
}