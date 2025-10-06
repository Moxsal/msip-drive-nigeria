import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Fleet from "@/components/Fleet";

const FleetPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Fleet - Premium Car Rental in Nigeria | Msip Global Services</title>
        <meta name="description" content="Browse our extensive fleet of premium cars in Nigeria. Toyota Corolla, Camry, Prado, Lexus RX, Mercedes-Benz, and more. Affordable daily rates." />
        <meta name="keywords" content="car rental Nigeria, rent car Lagos, rent car Abuja, Toyota rental Nigeria, luxury car rental" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Premium Fleet</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from Nigeria's finest selection of well-maintained vehicles for every occasion
              </p>
            </div>
          </section>
          <Fleet />
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </>
  );
};

export default FleetPage;
