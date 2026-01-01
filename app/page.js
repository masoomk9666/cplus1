import Hero from "./components/Hero";
import Services from "./components/Services";
import Industry from "./components/Industry";
import Journey from "./components/Journey";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center ">
      <Hero />
      <Services />
      <Industry />
      <Journey /> 
    </div>
  );
}
