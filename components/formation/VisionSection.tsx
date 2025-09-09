'use client';

import Image from 'next/image';

export default function VisionSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Quote mark */}
            <div className="text-yellow-400 text-8xl lg:text-9xl font-bold leading-none opacity-90">
              &quot;
            </div>

            {/* Main title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight -mt-4 uppercase">
              notre vision est{' '}
              <span className="text-yellow-400 uppercase">grande</span>
            </h1>

            {/* Description text */}
            <p className="text-lg lg:text-xl text-purple-100 leading-relaxed max-w-2xl">
              Nous sommes convaincus que la suite sera plus remarquable et plus grandiose.
              Sachez que nous sommes fiers de ce que nous avons fait durant toutes ces années
              tout en espérant avoir un jour nos propres infrastructures avec des terrains
              d&apos;entraînements, des salles de classes, dortoirs, etc... pour continuer à bien
              former et éduquer les enfants que nous avons au sein de notre club.
            </p>

            {/* Founder info */}
            <div className="pt-8 border-t border-purple-400/30">
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                M. Sylla Hamoudiata (Amza Gamal)
              </h3>
              <p className="text-purple-200 font-medium uppercase tracking-wider text-sm">
                président fondateur
              </p>
            </div>
          </div>

          {/* Right content - Image and trophy */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main profile image */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[30rem] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={'/Assets/images/all-img/president.png'}
                  alt="président fondateur"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Trophy decoration */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <svg
                  className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L13.09 8.26L20 9.27L13.09 10.28L12 17L10.91 10.28L4 9.27L10.91 8.26L12 2Z" />
                  <path d="M12 17V22H8V20H6V18H18V20H16V22H12V17Z" />
                </svg>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 -right-8 w-8 h-8 bg-purple-300/30 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
    </section>
  );
}