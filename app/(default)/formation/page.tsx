import TitleBanner from '@/components/common/TitleBanner';
import AcademyInfoPage from '@/components/formation/AcademyInfoPage';

import PresentationOSA from '@/components/formation/PresentationOSA';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner   title='Centre de formation' />
            <PresentationOSA />
            <AcademyInfoPage />
        </div>
    );
}

export default Page;
