import Boutique from "@/components/boutique/boutique";
import BetclicBanner from "@/components/club/BetclicBanner";
import TitleBanner from "@/components/common/TitleBanner";
import AppPromoBanner from "@/components/home/AppPromoBanner";
import React from "react";

const Page = () => {
  return (
    <div>
      <TitleBanner title="Notre Boutique" />
      <Boutique />
      <AppPromoBanner />
      <BetclicBanner />
    </div>
  );
};

export default Page;
