import TitleBanner from '@/components/common/TitleBanner';
import FCOSACategories from '@/components/formation/FCOSACategories';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner  centerImage='/Assets/images/all-img/tariff-bg-1.png' />
            <FCOSACategories />
        </div>
    );
}

export default Page;
