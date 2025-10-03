import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Business Executive",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo",
    rating: 5,
    text: "Outstanding service! The car was in pristine condition and the booking process was seamless. Msip Global Services made my business trip to Lagos hassle-free.",
  },
  {
    name: "Chioma Okafor",
    role: "Event Planner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma",
    rating: 5,
    text: "I've rented from Msip multiple times for my events. Their luxury fleet and professional chauffeurs never disappoint. Highly recommended!",
  },
  {
    name: "Ibrahim Musa",
    role: "Tourist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim",
    rating: 5,
    text: "Great experience exploring Nigeria with their reliable SUVs. The team was helpful and the prices were very competitive. Will definitely use them again!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
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
            <span className="text-sm font-medium">1000+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// Missing imports
import { Shield, Users } from "lucide-react";
