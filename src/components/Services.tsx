import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Plane, Briefcase, Car, Check } from "lucide-react";
import servicesBanner from "@/assets/services-banner.png";

const services = [
  {
    icon: User,
    title: "Executive Car Hire",
    description: "Premium cars with professional, uniformed drivers for business trips and VIP transport. Travel in style with our executive fleet.",
    fullDescription: "Our executive car hire service provides professional transportation for business meetings, corporate events, and VIP occasions. Experience comfort, punctuality, and discretion with our uniformed chauffeurs and premium vehicles.",
    features: [
      "Professional Uniformed Drivers",
      "Executive & Luxury Vehicles",
      "Punctual & Reliable Service",
      "Perfect for Business & VIP Travel",
      "Air-Conditioned Comfort",
      "Privacy & Discretion Guaranteed",
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable pickups and drop-offs from major airports across Nigeria. On-time service ensures you never miss a flight.",
    fullDescription: "Start or end your journey stress-free with our professional airport transfer service. We provide meet-and-greet service, monitor flight schedules, and ensure punctual arrivals and departures from all major Nigerian airports.",
    features: [
      "Meet & Greet at Arrivals",
      "Real-time Flight Monitoring",
      "Lagos, Abuja, Port Harcourt & More",
      "On-Time Guarantee",
      "Luggage Assistance Included",
      "24/7 Availability",
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Corporate & Event Hire",
    description: "Long-term and short-term car hire for businesses, conferences, and special occasions. Flexible packages tailored to your needs.",
    fullDescription: "Our corporate and event hire service is designed for businesses and organizations that require reliable transportation solutions. From conferences to weddings, we provide professional vehicles and drivers for any occasion.",
    features: [
      "Flexible Daily, Weekly & Monthly Hire",
      "Corporate Events & Conferences",
      "Wedding & Special Occasion Hire",
      "Dedicated Account Support",
      "Priority Booking",
      "Professional & Reliable Service",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Car,
    title: "Private Chauffeur Service",
    description: "Experienced, uniformed drivers ensuring safety, privacy, and comfort for all your transportation needs.",
    fullDescription: "Our private chauffeur service offers experienced, professional drivers who understand the importance of safety, discretion, and customer satisfaction. Perfect for personal errands, family trips, or any occasion requiring a trusted driver.",
    features: [
      "Licensed & Experienced Drivers",
      "Uniformed & Professional",
      "Safe & Defensive Driving",
      "Courteous & Discreet Service",
      "Available for Any Occasion",
      "Flexible Hourly or Daily Hire",
    ],
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <img 
            src={servicesBanner} 
            alt="Msip Global Services - Auto & Chauffeur Services in Ogbomoso"
            className="rounded-lg shadow-large w-full h-auto object-cover animate-fade-in"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional car hire solutions tailored to your specific needs across Nigeria
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
                    href={`https://wa.me/2348062237960?text=${encodeURIComponent(`Hi, I'm interested in ${service.title} from Msip Global Services Ltd. Please provide more information.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire {service.title}
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
