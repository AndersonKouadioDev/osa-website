import TitleBanner from '@/components/common/TitleBanner';
import DonationBanner from '@/components/soutien/DonationBanner';
import DonationForm from '@/components/soutien/DonationForm';
import SupportInfo from '@/components/soutien/SupportInfo';
import React from 'react';

const Page = () => {
    return (
        <div>
             <TitleBanner title='Soutenir le club' />
            <DonationBanner />
            <DonationForm />
            <SupportInfo/>
        </div>
    );
}

export default Page;
