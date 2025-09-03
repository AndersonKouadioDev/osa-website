"use client";
import Image from 'next/image';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function MatchOverview() {
  const possessionData = [
    { name: 'FC OSA', value: 65 },
    { name: 'SOL FC', value: 35 }
  ];
  
  const COLORS = ['#eab308', '#eef2ff'];

  return (
    <div className="bg-white flex flex-col items-center justify-center pt-8 pb-2 px-4 sm:pt-10 sm:pb-2 sm:px-6 md:pt-12 md:pb-2 md:px-8">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Aperçu</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Possession Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden border border-primary">
            <div className="bg-primary text-white text-center py-2 sm:py-3 md:py-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Possession</h2>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-6 md:gap-8">
                {/* FC OSA */}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-1 sm:mb-2">65%</div>
                  <div className="text-gray-800 font-semibold text-sm sm:text-base">FC OSA</div>
                </div>

                {/* Circular Progress */}
                <div className="mx-2 sm:mx-4 md:mx-6">
                  <PieChart width={128} height={128}>
                    <Pie
                      data={possessionData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      innerRadius={35}
                      startAngle={90}
                      endAngle={450}
                    >
                      {possessionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </div>

                {/* SOL FC */}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-1 sm:mb-2">35%</div>
                  <div className="text-gray-800 font-semibold text-sm sm:text-base">SOL FC</div>
                </div>
              </div>
            </div>
          </div>

          {/* En bref Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden border border-primary">
            <div className="bg-primary text-white text-center py-2 sm:py-3 md:py-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">En bref</h2>
            </div>
            <div className="p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4">
              {/* Lieu */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-8 flex items-center justify-center rounded-2xl">
                  <div className="w-12 h-10 sm:w-14 sm:h-8 md:w-16 md:h-10 relative overflow-hidden rounded-md border border-black">
                    <Image
                      src={"/Assets/images/all-img/lieu.png"}
                      alt="logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm sm:text-base text-gray-600">Lieu</div>
                  <div className="text-gray-800 font-medium text-sm sm:text-base">Stade Robert Champroux Marcory</div>
                </div>
              </div>

              {/* Diffusé */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                <div className="w-12 h-10 sm:w-14 sm:h-8 md:w-16 md:h-10 relative overflow-hidden rounded-md border border-black">
                  <Image
                    src={"/Assets/images/nav/osatv.png"}
                    alt="logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm sm:text-base text-gray-600">Diffusé</div>
                  <div className="text-gray-800 font-medium text-sm sm:text-base">Diffusé sur OSA TV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
