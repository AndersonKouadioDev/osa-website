import Sponsors from '@/components/common/Sponsors';
import TitleBanner from '@/components/common/TitleBanner';
import Fierte from '@/components/fierte/Fierte';
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
