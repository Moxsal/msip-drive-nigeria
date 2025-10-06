import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Plane, Briefcase, Car, Check } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Chauffeur Hire",
    description: "Professional drivers available 24/7 for all your transportation needs. Our experienced chauffeurs are trained to provide safe, comfortable, and discreet service.",
    fullDescription: "Whether you need a driver for business meetings, social events, or daily errands, our professional chauffeur service ensures you travel in style and comfort. All our drivers are licensed, vetted, and trained in defensive driving techniques.",
    features: [
      "Experienced & Licensed Drivers",
      "Available 24/7 for Any Occasion",
      "Expert Knowledge of Local Routes",
      "Professional, Courteous & Discreet",
      "Flexible Hourly or Daily Rates",
      "Perfect for Business or Leisure",
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop-off",
    description: "Reliable airport transfers from Lagos, Abuja, and all major Nigerian airports. Never worry about missing your flight or waiting for transportation again.",
    fullDescription: "Start your journey stress-free with our professional airport pickup and drop-off service. We monitor flight schedules, provide meet-and-greet service, and ensure punctual arrivals and departures.",
    features: [
      "Meet & Greet at Arrivals Hall",
      "Real-time Flight Monitoring",
      "Lagos, Abuja & Port Harcourt Airports",
      "On-time Guarantee or Money Back",
      "Luggage Assistance Included",
      "Available for Domestic & International Flights",
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Corporate Leasing",
    description: "Affordable long-term rental solutions for companies and businesses. Simplify your corporate transportation with our flexible leasing packages.",
    fullDescription: "Our corporate leasing program is designed for businesses that need reliable, cost-effective transportation solutions. From small startups to large corporations, we provide customized packages with dedicated support.",
    features: [
      "Flexible Daily, Weekly & Monthly Contracts",
      "Attractive Volume Discounts",
      "Dedicated Account Manager",
      "Priority Booking & Support",
      "Monthly Invoicing & Reporting",
      "Maintenance & Insurance Included",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Car,
    title: "Luxury Car Rental",
    description: "Premium rides for VIPs, events, and weddings. Make a grand entrance with our collection of luxury vehicles including Mercedes-Benz, Lexus, and BMW.",
    fullDescription: "Elevate your special occasions with our luxury car rental service. Perfect for weddings, corporate events, red carpet arrivals, and VIP transportation. All luxury rentals include premium insurance and optional chauffeur service.",
    features: [
      "Mercedes-Benz, Lexus, BMW & Range Rover",
      "Perfect for Weddings & Special Events",
      "Red Carpet Treatment & VIP Service",
      "Complimentary Chauffeur Available",
      "Champagne & Refreshments on Request",
      "Flexible Rental Duration",
    ],
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-large transition-smooth overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-3">{service.description}</p>
                <p className="text-sm text-muted-foreground mb-4">{service.fullDescription}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="w-full" asChild>
                  <a 
                    href={`https://wa.me/2348062237960?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}. Please provide more information.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book {service.title}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
