import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import PremiumAddons from "@/components/PremiumAddons";
import TrustFlow from "@/components/TrustFlow";
import About from "@/components/About";
import CustomSolutions from "@/components/CustomSolutions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <PremiumAddons />
      <TrustFlow />
      <About />
      <CustomSolutions />
      <Contact />
    </>
  );
}