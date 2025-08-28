import React from 'react';

export default function LastConfrontations() {
  const confrontations = [
    { result: 'Défaite', score: '0' },
    { result: 'Nul', score: '0' },
    { result: 'Victoire', score: '2' }
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full">
        {/* Header */}
        <div className="bg-primary text-white text-center py-4 rounded-t-lg">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Dernières confrontations
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-lg p-4 sm:p-6 md:p-8">
          {/* Scores Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6">
            {confrontations.map((match, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-gray-500 mb-2 sm:mb-4">
                  {match.score}
                </div>
              </div>
            ))}
          </div>

          {/* Results Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {confrontations.map((match, index) => (
              <div key={index} className="text-center">
                <div
                  className={`py-2 sm:py-3 px-4 sm:px-6 rounded-full text-white font-semibold text-base sm:text-lg md:text-xl ${
                    match.result === 'Victoire'
                      ? 'bg-primary'
                      : match.result === 'Nul'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                >
                  {match.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
