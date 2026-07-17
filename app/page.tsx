import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import LeadCatcher from "@/components/LeadCatcher";
import PremiumAddons from "@/components/PremiumAddons";
import TrustFlow from "@/components/TrustFlow";
import Industries from "@/components/Industries";
import About from "@/components/About";
import CustomSolutions from "@/components/CustomSolutions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProblemSolution />
      <LeadCatcher />
      <PremiumAddons />
      <TrustFlow />
      <Industries />
      <About />
      <CustomSolutions />
      <Contact />
    </main>
  );
}