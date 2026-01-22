import Hero from "./components/home/Hero";
import Industry from "./components/home/Industry";
import ServicesLabs from "./components/home/ServicesLabs";
import Testimonials from "./components/home/Testimonials";
import Labs from "./components/home/Labs";
import BusinessModel from "./components/home/BusinessModel";
import StartupSection from "./components/home/StartupSection";
import PrebuiltModelsSection from "./components/home/PrebuiltModelsSection";
import WorkflowAutomation from "./components/home/WorkflowAutomation";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout footerType="A">
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
    </div>
    </Layout>
  );
}
