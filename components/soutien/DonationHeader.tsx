import React from 'react';

const DonationHeader = () => {
    return (
        <div>
             <div className="bg-white px-4 pt-6 pb-4 sm:px-8 flex flex-col items-center">
          <h1 className="text-purple-600 text-3xl sm:text-4xl font-bold tracking-wide text-center">
            FAIRE UN DON
          </h1>
        </div>

        {/* Yellow banner */}
        <div className="bg-yellow-400 py-3 px-4 sm:py-4 sm:px-8 flex flex-col items-center">
          <h2 className="text-black text-lg sm:text-xl font-semibold text-center">
            Mon don pour le club
          </h2>
        </div>
        </div>
    );
}

export default DonationHeader;
