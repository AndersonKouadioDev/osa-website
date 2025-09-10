import TitleBanner from '@/components/common/TitleBanner';
import ContactPage from '@/components/contact/ContactPage';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner title='Contact' />
            <ContactPage />
        </div>
    );
}

export default Page;
