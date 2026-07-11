import Hero from "@/src/components/website/hero/Hero";
import About from "@/src/components/website/sections/About";
import Blog from "@/src/components/website/sections/Blog";
import Contact from "@/src/components/website/sections/Contact";
import FAQ from "@/src/components/website/sections/FAQ";
import Portfolio from "@/src/components/website/sections/Portfolio";
import Services from "@/src/components/website/sections/Services";
import Technologies from "@/src/components/website/sections/Technologies";


export default function HomePage() {
  return (
    <>
      <Hero/>
      <About />
      <Services/>
      <Portfolio/>
      <Technologies/>
      <Blog/>
      <FAQ/>
      <Contact/>
    </>
  );
}