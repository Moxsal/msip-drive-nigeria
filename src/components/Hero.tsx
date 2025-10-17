import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Car } from "lucide-react";
import heroImage from "@/assets/company-building-fleet.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MSIP Global Services Limited building - Professional car hire in Ogbomoso, Nigeria"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-6">
            Professional Car Hire Services in Ogbomoso, Oyo State
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8">
            Drive with Confidence – Available for Corporate, Airport & Private Hire
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#fleet">Browse Fleet</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground">
              <a href="tel:+2348062237960">Call Now</a>
            </Button>
          </div>
        </div>

        {/* Booking Form Card */}
        <Card className="max-w-4xl mx-auto p-6 md:p-8 bg-background/95 backdrop-blur-sm shadow-large" id="booking">
          <h2 className="text-2xl font-heading font-bold text-center mb-6">Quick Hire Request</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Pick-up Location
              </label>
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary">
                <option value="">Select location</option>
                <option value="ogbomoso">Ogbomoso, Oyo State</option>
                <option value="ibadan">Ibadan</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="other">Other Location</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Pick-up Date
              </label>
              <input
                type="date"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Drop-off Date
              </label>
              <input
                type="date"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Car className="h-4 w-4 text-primary" />
                Car Type
              </label>
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary">
                <option value="">Select hire type</option>
                <option value="business">Business/Executive</option>
                <option value="airport">Airport Transfer</option>
                <option value="personal">Personal/Private</option>
                <option value="corporate">Corporate Event</option>
                <option value="interstate">Inter-State Travel</option>
              </select>
            </div>

            <div className="md:col-span-2 lg:col-span-4">
              <Button variant="hero" size="lg" className="w-full" type="button" asChild>
                <a href={`https://wa.me/2348062237960?text=${encodeURIComponent("Hi, I'd like to hire a car from Msip Global Services Ltd. Please help me with the details.")}`} target="_blank" rel="noopener noreferrer">
                  Confirm Hire Request via WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
