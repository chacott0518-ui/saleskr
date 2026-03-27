import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import GlobalExportSection from "@/components/sections/GlobalExportSection";
import AwardsSection from "@/components/sections/AwardsSection";
import LatestUpdatesSection from "@/components/sections/LatestUpdatesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <GlobalExportSection />
      <AwardsSection />
      <LatestUpdatesSection />
    </>
  );
}
