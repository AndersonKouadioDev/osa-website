import Image from 'next/image';
import React from 'react';

export default function FondationOSAHistoire() {
  return (
    <div className="w-full flex-1 bg-white rounded-3xl border border-[#5D0B9E] p-6 md:p-8 shadow-lg">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#5D0B9E] mb-4">
          NOTRE HISTOIRE
        </h1>
      </div>

      {/* Photo Section */}
      <div className="relative w-full mb-6 md:mb-8 h-52 md:h-96">
        <Image 
          src="/Assets/images/all-img/fondation3.jpg" 
          alt="logo" 
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed">
        <p className="text-justify">
          Le football est un sport collectif, comme dans tous les autres « sport collectif », l&apos;esprit d&apos;équipe tient un rôle 
          majeur dans la réussite sportive. Le ciment de cet esprit d&apos;équipe, c&apos;est la convivialité, l&apos;envie d&apos;être ensemble 
          et le plaisir de partager. Tout ceci se résume en une bonne éducation et une vie sociale épanouie.
        </p>
        
        <p className="text-justify">
          Pour concrétiser ses actions sociales en faveur de l&apos;éducation et du bien-être des populations ivoiriennes 
          singulièrement celles d&apos;Abobo, le président fondateur Monsieur <strong>SYLLA HAMOUDJATA</strong> dit <strong>AMZA GAMAL</strong> a 
          décidé de mettre sur pieds la <strong>FONDATION OSA</strong>.
        </p>
      </div>
    </div>
  );
}
