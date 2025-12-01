import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import Videos from "@/components/Videos";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Technology />
      <Videos />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
