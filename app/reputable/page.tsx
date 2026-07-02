import RevealManager from "@/components/RevealManager";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyReputable from "@/components/WhyReputable";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function ReputablePage() {
  return (
    <>
      <RevealManager />
      <Nav />
      <main>
        <Hero />
        <Products />
        <WhyReputable />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
