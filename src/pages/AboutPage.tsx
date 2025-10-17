import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Heart, Shield, Check } from "lucide-react";
import companyBuilding from "@/assets/company-building-fleet.jpg";
import companyOffice from "@/assets/company-office-van.jpg";
import companyFleet from "@/assets/company-building-sienna.jpg";
import companyFortuner from "@/assets/company-building-fortuner.jpg";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Trusted Car Hire Company in Nigeria | Msip Global Services</title>
        <meta name="description" content="Learn about Msip Global Services Ltd - Nigeria's trusted car hire company. Our mission, values, and commitment to exceptional service since inception." />
        <meta name="keywords" content="about Msip Global Services, car hire company Nigeria, trusted car hire Ogbomoso" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Msip Global Services</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner for premium car hire services in Nigeria
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src={companyBuilding} 
                    alt="MSIP Global Services Limited office with Toyota Sienna fleet" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Our Company Building</h3>
                    <p className="text-sm text-muted-foreground">Professional facilities in Ogbomoso, Nigeria</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src={companyFleet} 
                    alt="MSIP Global Services premium fleet at office building" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Premium Fleet</h3>
                    <p className="text-sm text-muted-foreground">Multiple vehicles available for hire</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src={companyOffice} 
                    alt="MSIP Global Services Toyota Sienna van at office" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Executive Transport</h3>
                    <p className="text-sm text-muted-foreground">Toyota Sienna for comfortable group travel</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src={companyFortuner} 
                    alt="MSIP Global Services Toyota Fortuner SUV" 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Luxury SUVs</h3>
                    <p className="text-sm text-muted-foreground">Premium vehicles for VIP and corporate clients</p>
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
