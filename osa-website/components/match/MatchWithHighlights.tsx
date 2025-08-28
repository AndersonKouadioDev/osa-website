import Image from "next/image";
import React from "react";

export default function MatchWithHighlights() {
  return (
    <div className=" bg-gradient-to-br bg-white flex items-center justify-center p-7">
      <div className="w-full max-w-7xl border border-primary rounded-xl shadow-md">
        {/* Header */}
        <div className="bg-primary text-white text-center py-4 rounded-t-lg mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Temps forts</h2>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-lg p-4 sm:p-8">
          {/* Match Score Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-6 sm:gap-12">
            {/* FC OSA Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
              <Image
                src={"/Assets/images/all-img/logoOSA.png"}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Score */}
            <div className="flex items-center text-center">
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mr-2 sm:mr-4">
                3
              </span>
              <span className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mx-2">
                -
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-black ml-2 sm:ml-4">
                1
              </span>
            </div>

            {/* SOL FC Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
              <Image
                src={"/Assets/images/all-img/sol.png"}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Match Events */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Side Events (FC OSA) */}
            <div className="flex-1 space-y-4 w-full">
              {/* Goal 19' */}
              <div className="flex items-center">
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg px-3 py-2 mr-4 min-w-[50px] sm:min-w-[60px] text-center">
                  <span className="text-purple-600 font-bold text-sm sm:text-base">
                    19'
                  </span>
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  Koffi Dylane
                </span>
              </div>

              {/* Goal 41' */}
              <div className="flex items-center">
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg px-3 py-2 mr-4 min-w-[50px] sm:min-w-[60px] text-center">
                  <span className="text-purple-600 font-bold text-sm sm:text-base">
                    41'
                  </span>
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  Konate Oumar
                </span>
              </div>

              {/* Goal 79' */}
              <div className="flex items-center">
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg px-3 py-2 mr-4 min-w-[50px] sm:min-w-[60px] text-center">
                  <span className="text-purple-600 font-bold text-sm sm:text-base">
                    79'
                  </span>
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  Konate Oumar
                </span>
              </div>
            </div>

            {/* Center Stats */}
            <div className="flex-1 text-center">
              {/* Yellow Cards */}
              <div className="mb-6">
                <h3 className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">
                  Cartons jaunes
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-xl sm:text-2xl font-bold text-gray-800">
                    0
                  </span>
                  <div className="w-5 h-7 sm:w-6 sm:h-8 bg-yellow-400 rounded-sm"></div>
                  <span className="text-xl sm:text-2xl font-bold text-gray-800">
                    0
                  </span>
                </div>
              </div>

              {/* Red Cards */}
              <div>
                <h3 className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">
                  Cartons rouges
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-xl sm:text-2xl font-bold text-gray-800">
                    0
                  </span>
                  <div className="w-5 h-7 sm:w-6 sm:h-8 bg-red-500 rounded-sm"></div>
                  <span className="text-xl sm:text-2xl font-bold text-gray-800">
                    0
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Events (SOL FC) */}
            <div className="flex-1 space-y-4 w-full">
              <div className="flex items-center justify-end">
                <span className="text-gray-800 font-medium mr-4 text-sm sm:text-base">
                  Konate Oumar
                </span>
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg px-3 py-2 min-w-[50px] sm:min-w-[60px] text-center">
                  <span className="text-purple-600 font-bold text-sm sm:text-base">
                    76'
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
