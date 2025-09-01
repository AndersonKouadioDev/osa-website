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
  {
    name: "Senior",
    age: "18+ ans",
    description: "Formation professionnelle, préparation aux clubs européens",
    color: "bg-red-500",
    textColor: "text-red-600",
    bgLight: "bg-red-50",
    image: "/assets/images/baniere/home_hero.png"
  }
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
          className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-[#ffb900] h-96 w-full"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/40 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <div className={`${category.color} text-white rounded-lg p-3 w-fit mb-4 shadow-lg`}>
              <Users className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="text-orange-300 font-semibold text-lg mb-3">{category.age}</p>
            <p className="text-gray-200 leading-relaxed text-sm">{category.description}</p>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Section inscription */}
      <div className="bg-white rounded-xl  shadow-lg border border-gray-200 overflow-hidden"  
       
      >
        <div className="bg-primary to-red-500 flex justify-center text-white p-6">
          <h2 className="text-4xl font-bold flex items-center">
            <GraduationCap className="h-10 w-10 mr-3" />
            Comment intégrer l'académie
          </h2>
        </div>
        
        <div className="p-8 space-y-8">
          {/* Gratuité */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Formation 100% GRATUITE
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Le FC OSA a fait le choix de la <strong>gratuité</strong> afin de faciliter l'accès du plus grand nombre à ce centre de formation qui s'est imposé comme l'un des meilleurs, assurant non seulement la formation sportive, mais également une formation scolaire.
            </p>
          </div>

          {/* Documents */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-primary mr-2" />
                Documents à fournir
              </h3>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                    <div className="bg-primary text-orange-600 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Avertissement */}
            <div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Attention aux arnaques</h4>
                    <p className="text-red-700 text-sm leading-relaxed mb-3">
                      Nous vous invitons à signaler tous abus en nous communiquant les noms et contacts des potentiels démarcheurs qui voudraient vous prendre de l'argent.
                    </p>
                    <div className="flex items-center space-x-2 bg-red-100 p-2 rounded">
                      <Phone className="h-4 w-4 text-red-600" />
                      <span className="font-mono text-red-800 text-sm">
                        (+225) 07 09 538 834
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center bg-primary to-red-500 text-white rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4">Rejoignez la famille FC OSA</h3>
        <p className="mb-6 opacity-90">
          Donnez une chance à votre enfant de développer son talent dans un environnement professionnel et bienveillant
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Nous contacter
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  )
}