import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Chauffeur, Airport Pickup & Corporate Rental | Msip Global</title>
        <meta name="description" content="Professional car rental services in Nigeria: Chauffeur hire, airport pickup & drop-off, corporate leasing, luxury car rental. 24/7 availability." />
        <meta name="keywords" content="chauffeur service Nigeria, airport pickup Lagos, corporate car rental, luxury car hire Nigeria" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive car rental solutions designed for your comfort and convenience
              </p>
            </div>
          </section>
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
