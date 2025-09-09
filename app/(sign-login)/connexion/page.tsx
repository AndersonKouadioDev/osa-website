import TitleBanner from '@/components/common/TitleBanner';
import LoginForm from '@/components/connexion/LoginForm';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner centerImage='/assets/images/all-img/logoOSA.png' />
            <LoginForm/>
        </div>
    );
}

export default Page;
