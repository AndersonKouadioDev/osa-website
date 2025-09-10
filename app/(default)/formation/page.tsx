import TitleBanner from '@/components/common/TitleBanner';
import AcademyInfoPage from '@/components/formation/AcademyInfoPage';
import FCOSACategories from '@/features/formation/components/FCOSACategories';

import PresentationOSA from '@/components/formation/PresentationOSA';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner   title='Centre de formation' />
            <PresentationOSA />
            <FCOSACategories />
            <AcademyInfoPage />
        </div>
    );
}

export default Page;
