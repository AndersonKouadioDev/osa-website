// components/ClubNews.js
import React from 'react';
import NewsCard from './NewsCard';

const newsData = [
  {
    imageSrc: "/Assets/Images/news1.jpg",
    date: "11/05/2025",
    title: "Ligue 1 LONACI - Grâce à son match nul (1-1) face à Lys, le FC OSA est officiellement maintenu en Ligue 1 !",
    views: 63,
    comments: 0
  },
  {
    imageSrc: "/Assets/Images/news2.jpg",
    date: "11/05/2025",
    title: "Les images du match FC OSA 1-3 FC SAN PEDRO",
    views: 63,
    comments: 0
  },
  {
    imageSrc: "/Assets/Images/news3.jpg",
    date: "11/05/2025",
    title: "Ligue 1 LONACI - Le FC OSA s'incline (1-3) face au FC SAN-PEDRO pour son dernier match de la saison !",
    views: 63,
    comments: 0
  },
  {
    imageSrc: "/Assets/Images/news4.jpg",
    date: "11/05/2025",
    title: "Interview : Elvis au média sportif",
    views: 63,
    comments: 0
  },
  {
    imageSrc: "/Assets/Images/news2.jpg",
    date: "12/05/2025",
    title: "Nouvelle recrue pour la prochaine saison !",
    views: 75,
    comments: 5
  },
  {
    imageSrc: "/Assets/Images/news2.jpg",
    date: "12/05/2025",
    title: "Résumé vidéo du dernier match amical",
    views: 90,
    comments: 2
  }
];

const ClubNews = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-purple-600 text-center mb-8">
        LES ACTUS DU CLUB
      </h2>

      {/* Carrousel des news */}
      <div className="flex flex-row space-x-6 overflow-x-auto p-4 md:p-0 no-scrollbar">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="flex-none w-72 h-74 mb-3 " // largeur et hauteur fixes pour uniformité
          >
            <NewsCard
              imageSrc={news.imageSrc}
              date={news.date}
              title={news.title}
              views={news.views}
              comments={news.comments}
              className="h-full" // assure que la card prend toute la hauteur du conteneur
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-8">
        <button className="text-gray-700 font-semibold border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
          Tout voir <span className="ml-2">+</span>
        </button>
        <div className="flex justify-between w-40 mt-4">
          <div className="bg-purple-600 h-2 w-1/2 rounded-l-full"></div>
          <div className="bg-yellow-400 h-2 w-1/2 rounded-r-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ClubNews;
