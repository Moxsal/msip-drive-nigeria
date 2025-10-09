import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companySuv from "@/assets/company-suv.png";

const Index = () => {
  const testimonials = [
    {
      name: "Adewale Johnson",
      role: "Business Executive",
      content: "Professional service from start to finish. The chauffeur was punctual and courteous. Highly recommend Msip Global Services!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Ngozi Okafor",
      role: "Event Planner",
      content: "Used their services for my wedding. The cars were immaculate and the drivers were excellent. Made our special day even more memorable!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Ibrahim Musa",
      role: "Corporate Manager",
      content: "We've been using Msip for our corporate transport needs for over a year. Reliable, professional, and always on time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Msip Global Services Ltd - Professional Car Hire in Ogbomoso, Oyo State | Nigeria</title>
        <meta name="description" content="Professional car hire and chauffeur services in Ogbomoso, Oyo State. Executive cars, airport transfers, corporate hire. Available 24/7. Call +234-806-223-7960" />
        <meta name="keywords" content="car hire Ogbomoso, car hire Oyo State, chauffeur service Nigeria, airport transfer Ogbomoso, executive car hire, professional driver Nigeria" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />

        {/* Trust Badges Section */}
        <section className="py-6 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-primary mb-2" />
                <p className="text-sm font-medium">24/7 Service</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-primary mb-2" />
                <p className="text-sm font-medium">Safe & Clean Cars</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-10 w-10 text-primary mb-2" />
                <p className="text-sm font-medium">On-Time Pickup</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="h-10 w-10 text-primary mb-2" />
                <p className="text-sm font-medium">Reliable Drivers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="py-4 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <p className="text-background text-lg md:text-xl font-heading font-bold">
              🎉 Book Early and Save! Professional Car Hire Services Available 24/7
            </p>
          </div>
        </section>

        {/* Company Introduction with Image */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4">About Msip Global Services Ltd</Badge>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Professional Car Hire Services in Ogbomoso, Oyo State
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Msip Global Services Ltd</strong> is a trusted Nigerian car hire and chauffeur company, proudly serving clients in Ogbomoso, Oyo State, and across Nigeria.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We specialize in executive car hire, airport transfers, inter-state journeys, and corporate transport solutions, offering well-maintained vehicles and professional drivers who understand punctuality, safety, and discretion.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button variant="hero" size="lg" asChild>
                      <a href="#booking">Request a Hire</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:+2348062237960">Call Us Now</a>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={companySuv} 
                    alt="Msip Global Services professional car hire vehicle - Executive SUV in Ogbomoso"
                    className="rounded-lg shadow-large w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-background p-6 rounded-lg shadow-large max-w-xs hidden md:block">
                    <p className="text-2xl font-heading font-bold">10+ Years</p>
                    <p className="text-sm">Of Excellence in Car Hire Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it — hear from our satisfied customers
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-heading font-bold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                          <div className="flex gap-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{testimonial.content}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <a href="/testimonials">View All Testimonials</a>
              </Button>
            </div>
          </div>
        </section>

        <FAQ />
        <Newsletter />
        <FloatingWhatsApp />
        <Footer />
      </div>
    </>
  );
};

export default Index;
