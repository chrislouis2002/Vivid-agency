export const metadata = {
  title: "Become a Live Streaming Host in Nigeria | ₦500,000 Salary | Vivid Agency",
  description:
    "Join Vivid Agency as a professional live streaming host in Nigeria. Accommodation, equipment and training provided. Earn ₦500,000 base income plus quarterly bonuses.",
  openGraph: {
    title: "Live Streaming Host Opportunity | Vivid Agency",
    description:
      "Apply to become a professional live streaming host. Accommodation and training provided.",
    images: ["/images/vivid-hero.jpg"],
  },
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import Proof from "@/components/proof";
import IncomePotential from "@/components/income-potential";
import FAQ from "@/components/faq";
import LimitedPositions from "@/components/limited-positions";
import FloatingCTA from "@/components/FloatingCTA";
import DayInLife from "@/components/DayInLife";
import ReferralProgram from "@/components/ReferralProgram";
import JobPreview from "@/components/JobPreview";
export default function Home() {
  return (
    <>
      <PageIllustration />
      <FloatingCTA />
      <Hero />
      <IncomePotential />
      <Proof />
      <JobPreview/>
      {/* <Workflows /> */}
       {/* <DayInLife /> */}
      <Features />
      <FAQ />
      <LimitedPositions />
      <ReferralProgram />
      <Cta />
     
    </>
  );
}
