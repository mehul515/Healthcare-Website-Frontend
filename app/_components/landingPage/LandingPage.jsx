import AboutUs from "./AboutUs";
import CreateAccount from "./CreateAccount";
import FAQ from "./FAQ";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Testimonials from "./Testimonials";


export default function LandingPage() {
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
