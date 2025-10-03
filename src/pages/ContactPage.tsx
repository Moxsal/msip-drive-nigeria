import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Msip Global Services</title>
        <meta name="description" content="Contact Msip Global Services for car rentals in Nigeria. Call +234806 223 7960, WhatsApp us, or visit our office. We're here to help 24/7." />
        <meta name="keywords" content="contact car rental Nigeria, Msip contact Lagos, car hire phone number Nigeria" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help with all your car rental needs
              </p>
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
