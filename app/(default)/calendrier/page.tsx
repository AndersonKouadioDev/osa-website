import TeamCelebration from "@/features/calendrier/components/TeamCelebration";
import UpcomingMatchesPage from "@/features/calendrier/components/UpcomingMatchesPage";
import BetclicBanner from "@/components/club/BetclicBanner";
import Sponsors from "@/components/common/Sponsors";
import TitleBanner from "@/components/common/TitleBanner";
import AppPromoBanner from "@/components/home/AppPromoBanner";
import React from "react";

const Page = () => {
  return (
    <div>
      <TitleBanner title="Calendrier" />
      <TeamCelebration />
      <UpcomingMatchesPage />
      <AppPromoBanner />
      <BetclicBanner />
      <Sponsors />
    </div>
  );
};

export default Page;
