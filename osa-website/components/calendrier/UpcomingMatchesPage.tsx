// components/UpcomingMatchesPage.tsx
'use client';

import { useState } from 'react';
import MatchCard from './MatchCard';
import NoMatchCard from './NoMatchCard';

interface Match {
  id: number;
  league: string;
  team1: string;
  team2: string;
  score?: string; // optionnel si le match n'est pas terminé
  date: string;
  venue: string;
  status: 'finished' | 'upcoming';
  team1_image: string;
  team2_image: string;
}

export default function UpcomingMatchesPage() {
  const [selectedMonth, setSelectedMonth] = useState<string>('Mars');

  // Données de matchs fictives pour différents mois
  const matchesData: Record<string, Match[]> = {
    Mars: [
      {
        id: 1,
        league: 'LIGUE 1 IVOIRE',
        team1: 'FC OSA',
        team2: 'AFAD PLATEAU',
        date: 'VENDREDI 03/05/2025',
        venue: 'Stade Robert Champroux Marcory',
        status: 'upcoming',
        team1_image: '/Assets/images/all-img/logo.png',
       team2_image: '/Assets/images/all-img/afad.png',
      },
      {
        id: 2,
        league: 'LIGUE 1 IVOIRE',
        team1: 'FC OSA',
        team2: 'AFAD PLATEAU',
        date: 'VENDREDI 03/05/2025',
        venue: 'Stade Robert Champroux Marcory',
        status: 'upcoming',
        team1_image: '/Assets/images/all-img/logo.png',
        team2_image: '/Assets/images/all-img/afad.png',
      },
      {
        id: 3,
        league: 'LIGUE 1 IVOIRE',
        team1: 'FC OSA',
        team2: 'SOL FC',
        score: '3 - 3',
        date: 'VENDREDI 03/05/2025 - 20:30',
        venue: 'Stade Robert Champroux Marcory',
        status: 'finished',
        team1_image: '/Assets/images/all-img/logo.png',
        team2_image: '/Assets/images/all-img/sol.png',
      },
    ],
    Avril: [], // Aucun match
    Mai: [
      {
        id: 4,
        league: 'COUPE NATIONALE',
        team1: 'AFRICA SPORTS',
        team2: 'ASEC MIMOSAS',
        date: 'SAMEDI 10/05/2025',
        venue: 'Stade Félix Houphouët-Boigny',
        status: 'upcoming',
        team1_image: '',
        team2_image: '',
      },
    ],
  };

  const months: string[] = ['Mars', 'Avril', 'Mai', 'Juin'];
  const currentMatches: Match[] = matchesData[selectedMonth] || [];

  return (
    <div className="px-4 sm:px-7 mt-10">
      <div className="min-h-screen bg-gray-100 border-2 border-primary rounded-2xl p-6 sm:p-10 font-poppins">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#7E22CE] uppercase tracking-wider text-center md:text-left">
              Prochaines Rencontres
            </h1>

            <div className="relative inline-block w-full max-w-xs md:w-auto">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="appearance-none bg-[#7E22CE] text-white px-6 py-3 rounded-full font-semibold cursor-pointer w-full text-center"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    Saison de {month}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Matchs */}
          {currentMatches.length > 0 ? (
            <div className="space-y-6">
              {currentMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <NoMatchCard />
          )}
        </div>
      </div>
    </div>
  );
}
