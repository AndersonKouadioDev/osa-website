import Image from "next/image";

const BetclicBanner = () => {
  return (
    <div className="relative w-full   overflow-hidden h-64 md:h-44 flex items-center justify-center">
      {/* Image en fond */}
      <Image
        src="/Assets/Images/all-img/betclic.jpg"
        alt="Bannière Betclic"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>

      {/* Texte centré */}
      <h1 className="relative font-semibold text-white text-4xl md:text-6xl font-light z-10 text-center">
        Publicité
      </h1>
    </div>
  );
};

export default BetclicBanner;
