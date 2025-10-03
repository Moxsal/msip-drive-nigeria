import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Fleet />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
