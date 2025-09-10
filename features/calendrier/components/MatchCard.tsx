// components/MatchCard.tsx
import Image from 'next/image';
import { MatchCardProps } from '../types/match';



const teamLogos: Record<string, string> = {
  'FC OSA': '/path/to/osa-logo.png',
  'AFAD PLATEAU': '/path/to/afad-logo.png',
  'SOL FC': '/path/to/sol-logo.png',
  // Ajoute d'autres logos ici
};

export default function MatchCard({ match }: MatchCardProps) {
  const isFinished = match.status === 'finished';

  return (
    <div
      className={`relative rounded-2xl border ${
        isFinished ? 'border-black' : 'hover:border-primary hover:border-2 transition-transform border border-black'
      } overflow-hidden shadow p-4 sm:p-6 text-black`}
    >
      {/* Date */}
      <div className="text-sm md:text-base mb-6 text-center text-black">
        <span>
          {match.date}
        </span>
      </div>

      {/* Badge ligue pour mobile et tablette */}
      <div className="flex justify-center mb-4 lg:hidden">
        <div className="flex items-center gap-1.5 px-1 py-0.5 rounded-lg   ">
          <div className="w-5 h-5 relative">
            <Image
              src="/assets/images/all-img/LogoL1.jpg"
              alt="Ligue 1 Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xs text-black font-semibold">
            {match.league}
          </span>
        </div>
      </div>

      {/* Bloc principal */}
      <div className="relative flex flex-col text-black md:mt-3 md:flex-row items-center justify-center flex-grow text-center md:text-left md:space-x-8 w-full md:w-auto  rounded-xl p-4">

        {/* Badge ligue pour PC */}
        <div className="hidden lg:flex absolute top-2 left-4 items-center gap-1.5 px-2 py-4 rounded-lg  ">
          <div className="w-10 h-10 relative">
            <Image
              src="/assets/images/all-img/LogoL1.jpg"
              alt="Ligue 1 Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xs text-black font-semibold">
            {match.league}
          </span>
        </div>

        {/* Team 1 */}
        <div className="flex flex-col items-center md:items-start mb-3 md:mb-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative text-black">
              <Image
                src={match.team1_image}
                alt={`${match.team1} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-black text-lg">{match.team1}</span>
          </div>
        </div>

        {/* Score ou Heure */}
       <div
  className={`text-3xl sm:text-4xl font-bold  text-center px-4 py-1 my-2 md:my-0 ${
    isFinished
      ? ' rounded-lg text-[#FFC107]'
      : 'text-black'
  }`}
>
  {isFinished ? match.score : '01:00'}
</div>

        {/* Team 2 */}
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative text-black">
              <Image
                src={match.team2_image || teamLogos[match.team2] || '/path/to/default-logo.png'}
                alt={`${match.team2} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-black text-lg">{match.team2}</span>
          </div>
        </div>
      </div>

      {/* Boutons */}
      <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
        {isFinished ? (
          <>
            <button className="bg-white text-purple-600 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-gray-200">
              Replay &gt;
            </button>
            <button className="bg-white text-purple-600 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-gray-200">
              Stats &gt;
            </button>
            <button className="bg-green-500 text-white rounded-full px-4 py-2 text-sm font-semibold">
              TERMINÉ
            </button>
          </>
        ) : (
          <button className="bg-[#7E22CE] text-white rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-purple-700">
            Infos Billetterie
          </button>
        )}
      </div>

      {/* Venue */}
      <div className="text-center text-sm text-gray-500 mt-4">
        {match.venue}
      </div>
    </div>
  );
}