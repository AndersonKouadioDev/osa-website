import Sponsors from '@/components/common/Sponsors';
import AdBanner from '@/components/home/AdBanner';
import LastConfrontations from '@/components/match/LastConfrontations';
import MatchOverview from '@/components/match/MatchOverview';
import MatchResult from '@/components/match/MatchResult';
import MatchWithHighlights from '@/components/match/MatchWithHighlights';
import TeamComposition from '@/components/match/TeamComposition';
import React from 'react';

const Page = () => {
    return (
        <div>
            <MatchResult />
             <AdBanner title="Publicité"  className='mt-10' />
            <MatchOverview />
            <MatchWithHighlights />
            <TeamComposition />
            <LastConfrontations />
            <Sponsors />
        </div>
    );
}

export default Page;
