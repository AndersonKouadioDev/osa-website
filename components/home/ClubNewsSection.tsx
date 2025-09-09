// components/ClubNewsSection.js
"use client"
import React from "react"
import { Plus, Eye, MessageCircle } from "lucide-react"

const ClubNewsSection = () => {
  const newsData = [
    {
      id: 1,
      date: "11/05/2025",
      title:
        "Ligue 1 LONACI - Grâce à son match nul (1-1) face à Lys, le FC OSA est officiellement maintenu en Ligue 1 !",
      image: "/assets/images/all-img/news1.jpg",
      views: 63,
      comments: 0,
      featured: true,
    },
    {
      id: 2,
      date: "11/05/2025",
      title: "Les images du match FC OSA 1-3 FC SAN PEDRO",
      image: "/assets/images/all-img/news2.jpg",
      views: 63,
      comments: 0,
      featured: true,
    },
    {
      id: 3,
      date: "11/05/2025",
      title:
        "Ligue 1 LONACI - Le FC OSA s'incline (1-3) face au FC SAN-PEDRO pour son dernier match de la saison !",
       image: "/assets/images/all-img/news3.jpg",
      views: 63,
      comments: 0,
      featured: true,
    },
    {
      id: 4,
      date: "11/05/2025",
      title: "Interview : Elvis au média sportif",
      image: "/assets/images/all-img/news4.jpg",
      views: 63,
      comments: 0,
      featured: true,
    },
  ]

  return (
    <div className="w-full bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5D0B9E] mb-8 uppercase tracking-wide font-exo2">
          Les actus du club
        </h2>

        {/* Slider horizontal scrollable */}
        <div className="flex space-x-4 sm:space-x-6 overflow-x-auto snap-x scroll-smooth hide-scrollbar pb-4">
          {newsData.map((article) => (
            <div
              key={article.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 snap-start"
            >
              {/* Image en background dynamique */}
              <div
                className="relative aspect-video bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                {article.featured && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                    À la une
                  </div>
                )}
              </div>

              {/* Contenu de l'article */}
              <div className="p-4">
                <div className="text-gray-500 text-sm mb-2">{article.date}</div>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight mb-3 line-clamp-3">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-[#5D0B9E] text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-[#5D0B9E ] " />
                      <span>{article.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Tout voir" */}
        <div className="flex justify-center mt-8">
          <button className="bg-white border-2 border-gray-300 hover:border-[#5D0B9E] text-gray-700 hover:text-purple-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
            Tout voir
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Masquer scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default ClubNewsSection
