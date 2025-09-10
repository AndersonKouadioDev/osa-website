
import SportsNewsPage from '@/features/actualite/component/SportsNewsPage';
import Sponsors from '@/components/common/Sponsors';
import TitleBanner from '@/components/common/TitleBanner';
import React from 'react';

const Page = () => {
    return (
        <div>
             <TitleBanner title='Actualité' />
             <SportsNewsPage/>
          
             <Sponsors />
        </div>
    );
}

export default Page;
