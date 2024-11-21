import AboutUs from "./_components/landingPage/AboutUs";
import CreateAccount from "./_components/landingPage/CreateAccount";
import FAQ from "./_components/landingPage/FAQ";
import Hero from "./_components/landingPage/Hero";
import HowItWorks from "./_components/landingPage/HowItWorks";
import Services from "./_components/landingPage/Services";
import Testimonials from "./_components/landingPage/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <AboutUs/>
      <HowItWorks/>
      <Testimonials/>
      <CreateAccount/>
      <FAQ/>
    </div> 
  );
}
