import BetclicBanner from '@/components/club/BetclicBanner';
import ClubAmbitions from '@/components/club/ClubAmbitions';
import ExPensionnaires from '@/components/club/ExPensionnaires';
import HistorySection from '@/components/club/HistorySection';
import PalmaresSection from '@/components/club/PalmaresSection';
import Penssionaire from '@/components/club/Penssionaire';
import PhilosophySection from '@/components/club/PhilosophySection';
import QuiSommes from '@/components/club/QuiSommes';
import Sponsors from '@/components/common/Sponsors';
import TitleBanner from '@/components/common/TitleBanner';
import React from 'react';

const Page = () => {
    return (
        <div className=''>
            <TitleBanner title='club' />
            <QuiSommes />
            <HistorySection /> 
            <ClubAmbitions />
         <PhilosophySection />
         <PalmaresSection />
         <Penssionaire/>
         <BetclicBanner />
         <Sponsors />
        </div>
    );
}

export default Page;
