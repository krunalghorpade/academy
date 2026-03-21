import Hero from "@/components/sections/Hero";
import Hook from "@/components/sections/Hook";
import Positioning from "@/components/sections/Positioning";
import WhyKratex from "@/components/sections/WhyKratex";
import Programs from "@/components/sections/Programs";
import Differentiation from "@/components/sections/Differentiation";
import Transformation from "@/components/sections/Transformation";
import SocialProof from "@/components/sections/SocialProof";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Hook />
      <Positioning />
      <WhyKratex />
      <Programs />
      <Differentiation />
      <Transformation />
      <SocialProof />
      <Connect />
    </div>
  );
}
