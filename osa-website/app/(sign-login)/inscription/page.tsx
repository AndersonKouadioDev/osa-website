import TitleBanner from '@/components/common/TitleBanner';
import InscriptionForm from '@/components/inscription/InscriptionForm';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner title='Inscription ' />
            <InscriptionForm/>
        </div>
    );
}

export default Page;
