import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Plane, Briefcase, Crown } from "lucide-react";

const services = [
  {
    icon: UserCircle,
    title: "Chauffeur Service",
    description: "Professional drivers available to take you wherever you need to go in comfort and style.",
    features: ["Experienced drivers", "Flexible hours", "Well-maintained vehicles"],
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop-off",
    description: "Reliable airport transfer services. Never miss a flight with our punctual service.",
    features: ["Meet & greet", "Flight monitoring", "24/7 availability"],
  },
  {
    icon: Briefcase,
    title: "Corporate Leasing",
    description: "Long-term and short-term leasing options for businesses and corporate clients.",
    features: ["Flexible contracts", "Bulk discounts", "Dedicated support"],
  },
  {
    icon: Crown,
    title: "Luxury Car Rental",
    description: "Premium vehicles for special occasions, business meetings, and VIP clients.",
    features: ["Mercedes, Lexus, BMW", "Immaculate condition", "VIP treatment"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive car rental solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`https://wa.me/2348062237960?text=${encodeURIComponent(`Hi, I'm interested in your ${service.title}. Please provide more information.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Service
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
