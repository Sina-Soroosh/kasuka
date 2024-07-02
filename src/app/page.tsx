import Header from "@/components/modules/Header/Header";
import About from "@/components/templates/About";
import CTA from "@/components/templates/CTA";
import Hero from "@/components/templates/Hero";
import Portfolio from "@/components/templates/Portfolio";
import Services from "@/components/templates/Services";
import Team from "@/components/templates/Team";
import Testimonials from "@/components/templates/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Portfolio />
      <Testimonials />
      <Team />
    </>
  );
}
