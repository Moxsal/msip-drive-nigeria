import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Heart } from "lucide-react";

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

          {/* Mission & Values */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Core Values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Card className="text-center hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for excellence in every aspect of our service delivery
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Integrity</h3>
                    <p className="text-muted-foreground">
                      Honesty and transparency in all our business dealings
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Customer Focus</h3>
                    <p className="text-muted-foreground">
                      Your satisfaction and safety are our top priorities
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">Reliability</h3>
                    <p className="text-muted-foreground">
                      Dependable service you can trust, every single time
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
