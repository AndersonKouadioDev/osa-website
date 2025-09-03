import OSAFondationBanner from '@/components/common/OSAFondationBanner';
import Sponsors from '@/components/common/Sponsors';
import TitleBanner from '@/components/common/TitleBanner';
import FondationOSAContact from '@/components/fondation/FondationOSAContact';
import FondationOSADonGSH from '@/components/fondation/FondationOSADonGSH';
import FondationOSAHistoire from '@/components/fondation/FondationOSAHistoire';
import FondationOSAMission from '@/components/fondation/FondationOSAMission';
import AdBanner from '@/components/home/AdBanner';
import React from 'react';

const Page = () => {
  return (
    <div className="px-4 sm:px-7 py-6 max-w-[1400px] mx-auto">
         <TitleBanner title='Fondation' />
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        
        {/* Colonne principale */}
        <div className="w-full lg:w-2/3 space-y-6">
          <FondationOSAHistoire />  
          <FondationOSADonGSH />
          <FondationOSAMission />
        </div>

        {/* Colonne secondaire */}
        <div className="w-full lg:w-1/3 space">
          <OSAFondationBanner />
          <FondationOSAContact />
          <AdBanner title="Publicité"  className='h-[550px]' />
        </div>

      </div>
       <Sponsors />
    </div>
  );
}

export default Page;
