import Hero from "./components/Hero";
import Industry from "./components/Industry";
import ServicesLabs from "./components/ServicesLabs";
import Testimonials from "./components/Testimonials";
import Labs from "./components/Labs";
import BusinessModel from "./components/BusinessModel";
import StartupSection from "./components/StartupSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/layout/Footer";
import PrebuiltModelsSection from "./components/PrebuiltModelsSection";
import WorkflowAutomation from "./components/WorkflowAutomation";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center ">
      <Hero />
      <Labs />
      <Industry />
      <WorkflowAutomation />
      <ServicesLabs />
      <BusinessModel />
      <PrebuiltModelsSection /> 
      <StartupSection />
      <Testimonials />
      <ContactSection />
      
      <Footer />
    </div>
  );
}
