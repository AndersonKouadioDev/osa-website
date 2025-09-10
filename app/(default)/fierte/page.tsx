import Sponsors from '@/components/common/Sponsors';
import TitleBanner from '@/components/common/TitleBanner';
import Fierte from '@/features/fierte/components/Fierte';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner title='Ex Pensionnaires' />
            <Fierte />
            <Sponsors />
        </div>
    );
}

export default Page;
