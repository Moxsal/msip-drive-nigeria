import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Shield, Users, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Business Executive",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo",
    rating: 5,
    text: "Outstanding service! The car was in pristine condition and the booking process was seamless. Msip Global Services made my business trip to Lagos hassle-free.",
    date: "January 2025"
  },
  {
    name: "Chioma Okafor",
    role: "Event Planner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma",
    rating: 5,
    text: "I've rented from Msip multiple times for my events. Their luxury fleet and professional chauffeurs never disappoint. Highly recommended!",
    date: "December 2024"
  },
  {
    name: "Ibrahim Musa",
    role: "Tourist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim",
    rating: 5,
    text: "Great experience exploring Nigeria with their reliable SUVs. The team was helpful and the prices were very competitive. Will definitely use them again!",
    date: "November 2024"
  },
  {
    name: "Funke Adeyemi",
    role: "Corporate Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Funke",
    rating: 5,
    text: "We use Msip for all our corporate transportation needs. Their service is consistently excellent, and their fleet is always well-maintained. A truly professional company.",
    date: "January 2025"
  },
  {
    name: "Emeka Nwosu",
    role: "Entrepreneur",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emeka",
    rating: 5,
    text: "The chauffeur service is top-notch! Professional drivers, punctual, and the cars are always spotless. Worth every naira.",
    date: "December 2024"
  },
  {
    name: "Aisha Mohammed",
    role: "International Consultant",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    rating: 5,
    text: "As someone who travels frequently to Nigeria for work, Msip has become my go-to for airport pickups and city transportation. Reliable and trustworthy service.",
    date: "October 2024"
  },
  {
    name: "Tunde Bakare",
    role: "Family Traveler",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tunde",
    rating: 5,
    text: "Rented a Toyota Highlander for a family road trip. Spacious, comfortable, and great value. The customer service team was very accommodating with our requests.",
    date: "September 2024"
  },
  {
    name: "Grace Eze",
    role: "Wedding Coordinator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
    rating: 5,
    text: "Used Msip for wedding car rentals - the Mercedes-Benz was stunning! Everything was handled professionally from booking to return. Highly recommend for special occasions.",
    date: "August 2024"
  },
  {
    name: "Yusuf Abdullahi",
    role: "Real Estate Agent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusuf",
    rating: 5,
    text: "I rent frequently for client meetings. Msip offers the best rates and their cars always make a great impression. The team is responsive and professional.",
    date: "November 2024"
  }
];

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Customer Reviews & Testimonials | Msip Global Services</title>
        <meta name="description" content="Read what our customers say about Msip Global Services car rental. 5-star rated service with 1000+ happy clients across Nigeria." />
        <meta name="keywords" content="car rental reviews Nigeria, Msip testimonials, customer feedback Lagos car hire" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Customer Testimonials</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our satisfied customers across Nigeria
              </p>
            </div>
          </section>

          {/* Trust Stats */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">5-Star</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <ThumbsUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-medium transition-smooth">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3 mb-2">
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
                      <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Trusted by Thousands</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Verified Reviews</span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;
