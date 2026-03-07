export const metadata = {
  title: "Become a Live Streaming Host in Nigeria | ₦450,000 Salary | Vivid Agency",
  description:
    "Join Vivid Agency as a professional live streaming host in Nigeria. Accommodation, equipment and training provided. Earn ₦450,000 base income plus quarterly bonuses.",
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

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Proof />
      <Workflows />
      <Features />
      <Cta />
    </>
  );
}
