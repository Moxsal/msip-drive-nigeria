import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Shield, AlertCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Alert, AlertDescription } from "@/components/ui/alert";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Business Executive",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo",
    rating: 5,
    text: "Outstanding service! The car was in pristine condition and the booking process was seamless.",
  },
  {
    name: "Chioma Okafor",
    role: "Event Planner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma",
    rating: 5,
    text: "I've rented from Msip multiple times for my events. Their luxury fleet and professional chauffeurs never disappoint.",
  },
  {
    name: "Ibrahim Musa",
    role: "Tourist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim",
    rating: 5,
    text: "Great experience exploring Nigeria with their reliable SUVs. The team was helpful and the prices were very competitive.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Msip Global Services - Premier Car Rental in Nigeria | Lagos, Abuja</title>
        <meta name="description" content="Nigeria's leading car rental service. Rent Toyota, Lexus, Mercedes from ₦25,000/day. Airport pickup, chauffeur service, corporate leasing. Book now!" />
        <meta name="keywords" content="car rental Nigeria, rent car Lagos, car hire Abuja, Toyota rental Nigeria, luxury car rental, airport pickup Lagos" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Promotion Banner */}
          <Alert className="container mx-auto my-4 bg-primary/10 border-primary">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground font-medium">
              🎉 Special Offer: Get 10% off on weekend rentals! Book now and save.
            </AlertDescription>
          </Alert>

          <Hero />
          <WhyChooseUs />

          {/* Featured Cars Preview */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Vehicles</h2>
              <p className="text-muted-foreground mb-6">Browse our premium fleet</p>
              <Button variant="hero" size="lg" asChild>
                <a href="/fleet">View All Cars</a>
              </Button>
            </div>
          </section>

          {/* Testimonials Slider */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Don't just take our word for it - hear from our satisfied customers
                </p>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="max-w-5xl mx-auto"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-medium transition-smooth">
                        <CardContent className="p-6">
                          <Quote className="h-8 w-8 text-primary/20 mb-4" />
                          <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                          <div className="flex items-center gap-3">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full bg-muted"
                            />
                            <div>
                              <div className="font-semibold">{testimonial.name}</div>
                              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <a href="/testimonials">Read More Reviews</a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-lg">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Paystack Secure</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Flutterwave Verified</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Hit the Road?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your perfect ride today and experience the difference with Msip Global Services
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/booking">Book Now</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
