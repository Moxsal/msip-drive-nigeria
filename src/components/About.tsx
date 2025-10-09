import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Star, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Msip Global Services Ltd</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional Car Hire & Chauffeur Services in Ogbomoso, Oyo State
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-large">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Msip Global Services Ltd</strong> is a trusted Nigerian car hire and chauffeur company, proudly serving clients in <strong>Ogbomoso, Oyo State</strong>, and across Nigeria.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to redefine professional car hire, our mission is to make transportation safe, comfortable, and dependable for individuals, families, and corporate clients.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in executive car hire, airport transfers, inter-state journeys, and corporate transport solutions, offering well-maintained vehicles and professional drivers who understand punctuality, safety, and discretion.
              </p>

              <div className="my-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-heading font-bold mb-4">Our Commitment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Reliable and punctual service — always on time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clean, air-conditioned vehicles for every journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Polite, well-trained, and uniformed drivers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Transparent communication and instant booking confirmation</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become one of Nigeria's most recognized names in professional car hire, known for quality service and customer satisfaction.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To make professional car hire easy, reliable, and accessible for everyone — whether you need transportation for business, airport pickup, or private hire.
                  </p>
                </div>
              </div>

              <div className="my-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-4 text-center">Our Core Values</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-medium">Integrity</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="font-medium">Safety</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="font-medium">Professionalism</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Customer Care</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Whether you need transportation for business, airport pickup, or private hire, <strong>Msip Global Services Ltd</strong> ensures every trip is handled with excellence, reliability, and comfort.
                </p>
                <p className="text-xl font-heading font-bold text-primary">
                  Contact us today — your journey starts with confidence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
