// components/TeamCelebration.tsx
export default function TeamCelebration() {
  return (
    <div className="px-7 mt-10">
      <div className="relative w-full min-h-[600px] h-screen overflow-hidden rounded-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url("/assets/images/all-img/victoire.jpg")`,
          }}
        />

        {/* Bottom Navigation Buttons */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-2 flex flex-wrap justify-center gap-2 bg-black bg-opacity-50">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded-full transition-colors shadow-lg">
            Calendrier / Résultats
          </button>
          <button className="hover:bg-gray-700 text-[#FFC107] ring ring-[#FFC107] font-semibold py-2 px-4 rounded-full transition-colors shadow-lg">
            Statistiques / Classements
          </button>
        </div>
      </div>
    </div>
  );
}