import Header from '../components/Header';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import About from '../components/About';
import Features from '../components/Features';
import Process from '../components/Process';
import CaseStudy from '../components/CaseStudy';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-dark text-light min-h-screen avalon px-20">
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <Services />
      <About />
      {/* <Features /> */}
      <Process />
      <CaseStudy />
      <Testimonials />
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Contact />
      <CTA />
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
}
