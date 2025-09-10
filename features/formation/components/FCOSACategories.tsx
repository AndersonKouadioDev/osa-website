"use client"

import React from 'react'
import { categories } from '../data/category_fc_osa_data'



export default function FCOSACategories() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Catégories */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          Nos Catégories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className="
                  relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                  border-2 border-transparent 
                  h-56 sm:h-72 md:h-80 lg:h-96 w-full
                "
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Badge du level */}
                <span className="absolute bottom-4 left-4 text-[#ffc107] text-lg sm:text-xl md:text-2xl font-bold px-3 py-1 rounded-lg shadow-md bg-black/50">
                  {category.level}
                </span>
              </div>
              <h1 className="text-center font-bold text-2xl py-4">
                Nos {category.name}s
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
