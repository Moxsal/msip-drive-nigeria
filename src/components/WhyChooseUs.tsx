import { Car, DollarSign, Clock, Shield, Users, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Car,
    title: "Wide Range of Cars",
    description: "From economy sedans to luxury SUVs, we have the perfect car for every need and budget.",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Competitive pricing with no hidden fees. Get the best value for your money.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist you whenever you need help.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All our vehicles are comprehensively insured for your peace of mind.",
  },
  {
    icon: Users,
    title: "Professional Chauffeurs",
    description: "Experienced and courteous drivers available for your comfort and safety.",
  },
  {
    icon: Headphones,
    title: "Easy Booking",
    description: "Simple online booking process or instant booking via WhatsApp.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional car hire services that exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-smooth group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-smooth">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
