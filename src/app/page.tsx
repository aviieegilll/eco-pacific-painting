import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Reviews from "@/components/sections/Reviews";
import Process from "@/components/sections/Process";
import QuoteForm from "@/components/sections/QuoteForm";
import Appointment from "@/components/sections/Appointment";
import ServiceArea from "@/components/sections/ServiceArea";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <BeforeAfter />
        <Reviews />
        <Process />
        <QuoteForm />
        <Appointment />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
