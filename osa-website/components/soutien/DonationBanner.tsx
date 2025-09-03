export default function DonationBanner() {
  return (
    <div className=" mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-3xl border border-primary p-6 sm:p-8 shadow-lg">
        
        {/* Titre */}
        <h1 className="text-[#5D0B9E] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 tracking-wide">
          COMMENT FAIRE UN DON ?
        </h1>

        <hr className="border-gray-400 mb-6 sm:mb-8" />
        
        {/* Texte */}
        <div className="text-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-6 md:px-12 lg:px-24 xl:px-36 mx-auto">
            Faites comme M. <span className="font-semibold">SYLLA HAMOUDJATA (AMZA GAMAL)</span>, notre fondateur FC OSA, 
            et soutenez à nos côtés les projets de nos associations partenaires. 
            C'est facile avec notre formulaire de don en ligne.
          </p>
        </div>
      </div>
    </div>
  );
}
