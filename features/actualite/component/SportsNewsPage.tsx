"use client";

import React, { useState } from "react";
import {
  Eye,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "../newsData";
import { NewsType } from "../type/news-type";




const SportsNewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 12;

  const totalPages = Math.ceil(newsData.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = newsData.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  function getYoutubeID(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  }

  const getTypeColor = (type: NewsType) => {
    const colors: Record<NewsType, string> = {
      interview: "bg-yellow-400",
      video: "bg-red-500",
      match: "bg-green-500",
      gallery: "bg-blue-500",
      analysis: "bg-purple-500",
      news: "bg-orange-500",
      player: "bg-pink-500",
    };
    return colors[type];
  };

  const getTypeLabel = (type: NewsType) => {
    const labels: Record<NewsType, string> = {
      interview: "INTERVIEW",
      video: "VIDÉO",
      match: "MATCH",
      gallery: "GALERIE",
      analysis: "ANALYSE",
      news: "NEWS",
      player: "JOUEUR",
    };
    return labels[type];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Actualités Sportives
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Suivez toute l&apos;actualité du football ivoirien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

          {currentArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer "
            >
              {/* Image ou vidéo */}
              <Link
                key={article.id}
                href={`/actualites/${article.id}`}
              >
                <div className="relative w-full aspect-video rounded-t-xl overflow-hidden">
                  {article.hasVideo ? (
                    article.image.includes("youtube.com") || article.image.includes("youtu.be") ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${getYoutubeID(article.image)}`}
                        title={article.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        src={article.image}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Type badge */}
                  <div
                    className={`absolute top-2 left-2 ${getTypeColor(
                    article.type as NewsType
                    )} text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase`}
                  >
                    {getTypeLabel(article.type as NewsType)}
                  </div>

                  {/* Featured badge */}
                  {article.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">
                      À la une
                    </div>
                  )}
                </div>

                {/* Contenu de l'article */}

                <div className="p-2">
                  <div className="text-gray-500 text-xs mb-1 font-medium">{article.date}</div>
                  <h3 className="font-bold text-gray-800 text-xs text-center sm:text-sm leading-tight mb-2 line-clamp-3 hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-[#5D0B9E] text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 hover:text-purple-800 transition-colors">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-purple-800 transition-colors">
                        <MessageCircle className="w-3 h-3" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          ))}

        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-lg font-medium text-xs sm:text-sm transition-colors ${currentPage === page
                  ? "bg-[#5D0B9E] text-white"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setCurrentPage(totalPages)}
            className="px-3 py-1 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition-colors text-xs sm:text-sm"
          >
            Suivant
          </button>
        </div>

        <div className="mt-4 text-center text-gray-600 text-xs sm:text-sm">
          Affichage de {startIndex + 1}-
          {Math.min(startIndex + articlesPerPage, newsData.length)} sur{" "}
          {newsData.length} articles
        </div>
      </div>
    </div>
  );
};

export default SportsNewsPage;
