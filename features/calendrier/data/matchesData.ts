import { Match } from "../types/match";

export const matchesData: Record<string, Match[]> = {
    Mars: [
      {
        id: 1,
        league: 'LIGUE 1 IVOIRE',
        team1: 'FC OSA',
        team2: 'AFAD PLATEAU',
        date: 'VENDREDI 03/05/2025',
        venue: 'Stade Robert Champroux Marcory',
        status: 'upcoming',
        team1_image: '/assets/images/all-img/logo.png',
       team2_image: '/assets/images/all-img/afad.png',
      },
      {
        id: 2,
        league: 'LIGUE 1 IVOIRE',
        team1: 'FC OSA',
        team2: 'AFAD PLATEAU',
        date: 'VENDREDI 03/05/2025',
        venue: 'Stade Robert Champroux Marcory',
        status: 'upcoming',
        team1_image: '/assets/images/all-img/logo.png',
        team2_image: '/assets/images/all-img/afad.png',
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
        team1_image: '/assets/images/all-img/logo.png',
        team2_image: '/assets/images/all-img/sol.png',
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