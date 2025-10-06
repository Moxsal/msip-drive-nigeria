import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Heart, Shield, Check } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Trusted Car Rental Company in Nigeria | Msip Global Services</title>
        <meta name="description" content="Learn about Msip Global Services Ltd - Nigeria's trusted car rental company. Our mission, values, and commitment to exceptional service since inception." />
        <meta name="keywords" content="about Msip Global Services, car rental company Nigeria, trusted car hire Lagos" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Msip Global Services</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner for premium car rentals in Nigeria
              </p>
            </div>
          </section>

          <About />

          {/* Why Choose Us Stats */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Premium Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Customer Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Images */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Facilities & Fleet</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Professional service backed by quality infrastructure
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src="https://images.unsplash.com/photo-1562141968-fbaf2c21b1cf?auto=format&fit=crop&w=800&q=80" 
                    alt="Modern Office" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Professional Office</h3>
                    <p className="text-sm text-muted-foreground">State-of-the-art facilities for customer service</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Team" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Trained professionals ready to serve you</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" 
                    alt="Premium Fleet" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Premium Fleet</h3>
                    <p className="text-sm text-muted-foreground">Well-maintained vehicles for every need</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Location Map */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Visit Our Office</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're conveniently located in Lagos, Nigeria
                </p>
              </div>

              <Card className="max-w-5xl mx-auto overflow-hidden shadow-large">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7297914556243!2d3.3502074!3d6.4278339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Msip Global Services Office Location"
                  />
                </div>
              </Card>
            </div>
          </section>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
