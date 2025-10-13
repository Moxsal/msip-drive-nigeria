import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Heart, Shield, Check } from "lucide-react";
import fleetShowcase from "@/assets/fleet-showcase.png";
import hiaceVan from "@/assets/hiace-van.png";
import siennaGray from "@/assets/sienna-gray.png";
import fortunerWhite from "@/assets/fortuner-white.png";

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src={fleetShowcase} 
                    alt="Msip Global Services full fleet showcase - Multiple vehicles available for hire in Ogbomoso" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Our Complete Fleet</h3>
                    <p className="text-sm text-muted-foreground">Diverse range of vehicles for every occasion</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src={fortunerWhite} 
                    alt="Toyota Fortuner - Executive SUV available for hire" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Executive SUVs</h3>
                    <p className="text-sm text-muted-foreground">Premium vehicles for business and VIP travel</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth">
                  <img 
                    src={hiaceVan} 
                    alt="Toyota Hiace - Spacious van for group transport" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Group Transport</h3>
                    <p className="text-sm text-muted-foreground">Spacious vans for corporate and family trips</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-medium transition-smooth md:col-span-2 lg:col-span-1">
                  <img 
                    src={siennaGray} 
                    alt="Toyota Sienna - Comfortable minivan for families" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-heading font-bold">Family Vehicles</h3>
                    <p className="text-sm text-muted-foreground">Comfortable and spacious for family journeys</p>
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
