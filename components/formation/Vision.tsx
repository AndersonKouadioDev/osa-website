import Image from 'next/image';
import React from 'react';

const Vision = () => {
    return (
        <div className='px-7 mt-7'>
            <div 
                className="relative text-white overflow-hidden rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 50%, #4c1d95 100%)'
                }}
            >
                {/* Dégradé noir en bas */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10 rounded-b-2xl" />

                <div className="max-w-7xl mx-auto px-6 py-6 lg:px-8 relative z-20">
                    {/* Grille pour le texte */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start relative">
                        {/* Contenu textuel */}
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase">
                                    notre vision est grande
                                </h2>

                                <div className="text-3xl text-yellow-400 font-bold mb-3 leading-none">
                                    ❝❝
                                </div>

                                <div className="space-y-3 text-base lg:text-lg leading-relaxed">
                                    <p>
                                        Nous sommes convaincus que la suite sera plus remarquable et plus grandiose. 
                                        Sachez que nous sommes fiers de ce que nous avons fait durant toutes ces années 
                                        tout en espérant avoir un jour nos propres infrastructures avec des terrains 
                                        d&apos;entraînements, des salles de classes, dortoirs, etc... pour continuer à bien former et 
                                        éduquer les enfants que nous avons au sein de notre club..
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-purple-400 border-opacity-30">
                                <h3 className="text-xl lg:text-2xl font-bold mb-1">
                                    M. Sylla Hamoudjata (Amza Gamal)
                                </h3>
                                <p className="text-purple-200 font-medium tracking-wide">
                                    PRÉSIDENT FONDATEUR
                                </p>
                            </div>

                            {/* Image sur mobile juste en dessous du président */}
                            <div className="block lg:hidden mt-4">
                                <Image
                                    src={'/assets/images/all-img/president.png'}
                                    alt='Président'
                                    width={250}
                                    height={350}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image du président sur grand écran */}
                    <div className="hidden lg:block absolute bottom-0 right-0 w-[350px] h-auto transform translate-x-20 translate-y-32">
                        <Image
                            src={'/assets/images/all-img/president.png'}
                            alt='Président'
                            width={350}
                            height={500}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
