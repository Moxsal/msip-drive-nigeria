import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Msip Global Services</h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for premium car rentals across Nigeria
            </p>
          </div>

          <Card className="shadow-medium">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Msip Global Services Ltd</strong> is a professional car rental company dedicated to serving individuals, families, and corporate clients across Nigeria. With years of experience in the automotive industry, we've built a reputation for reliability, quality, and exceptional customer service.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a comfortable sedan for daily commutes, a spacious SUV for family trips, or a luxury vehicle for special occasions, we have the perfect car for you. Our fleet consists of well-maintained, modern vehicles from trusted brands like Toyota, Lexus, and Mercedes-Benz.
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  {[
                    "Wide selection of vehicles",
                    "Competitive pricing",
                    "Flexible rental terms",
                    "Professional chauffeur service",
                    "24/7 customer support",
                    "Airport pickup & delivery",
                    "Corporate solutions",
                    "Comprehensive insurance",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  We serve major cities across Nigeria including Lagos, Abuja, Port Harcourt, Kano, and Ibadan. Our commitment to excellence has made us the preferred choice for both Nigerian nationals and international visitors seeking reliable transportation solutions.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-foreground font-medium italic">
                    "At Msip Global Services, we don't just rent cars – we provide peace of mind, convenience, and memorable driving experiences."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
