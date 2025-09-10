import Sponsors from "@/components/common/Sponsors";
import AdBanner from "@/components/home/AdBanner";
import LastConfrontations from "@/features/match/components/LastConfrontations";
import MatchOverview from "@/features/match/components/MatchOverview";
import MatchResult from "@/features/match/components/MatchResult";
import MatchWithHighlights from "@/features/match/components/MatchWithHighlights";
import TeamComposition from "@/features/match/components/TeamComposition";
import React from "react";

const Page = () => {
  return (
    <div>
      <MatchResult />
      <AdBanner title="Publicité" className="mt-10" />
      <MatchOverview />
      <MatchWithHighlights />
      <TeamComposition />
      <LastConfrontations />
      <Sponsors />
    </div>
  );
};

export default Page;
