import Image from 'next/image';

const HistorySection = () => {
  return (
    <div className='px-7'>
      <div className="p-8 flex justify-center">
      <div className="bg-white rounded-lg flex flex-col lg:flex-row overflow-hidden w-full">

        {/* Image */}
        <div className="w-full p-4 lg:p-8">
          <h2 className="text-4xl font-bold text-[#5D0B9E] mb-6 text-center lg:text-left">HISTORIE</h2>
          <Image
            src="/Assets/Images/all-img/equipe.jpg"
            alt="FC OSA team celebrating"
            width={500}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Texte */}
        <div className="w-full p-4 lg:p-6 text-gray-700 flex flex-col justify-center">
          <p className="mb-4 text-center lg:text-left">
            Une ascension débutée en 2015 en <span className="font-bold">DISTRICT 2</span> (6e Division), avant la montée en <span className="font-bold">DISTRICT 1</span> (5e Division) pour la saison 2016. Premier de sa zone, le jeune club accède à la <span className="font-bold">Division Régionale</span> (4e Division) pour jouer la montée en 3e Division en 2017. Après deux échecs en 2017 et 2018 pour la montée en 3e Division, c’est en 2019 que le <span className="font-bold">FC OSA</span> obtient avec brio sa montée pour accéder en <span className="font-bold">3e Division (D3)</span>.
          </p>
          <p className="mb-4 text-center lg:text-left">
            Après avoir manqué de peu la montée en Ligue 2 deux années consécutives, <span className="font-bold">2023</span> fut la bonne avec une accession en <span className="font-bold">Ligue 2</span> de Côte dIvoire. Et au terme dune première saison exceptionnelle en Ligue 2, le <span className="font-bold">FC OSA</span> a composté son ticket pour l’élite du football Ivoirien, la <span className="font-bold">Ligue 1</span> de Côte dIvoire. Une montée historique qui vient couronner toutes ces années de durs labeurs.
          </p>
          <p className="text-center lg:text-left">
            Les joueurs formés au centre jouent pour s’aguerrir en équipe senior avant d’entamer une carrière professionnelle pour les plus sérieux, courageux et talentueux.
          </p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default HistorySection;
