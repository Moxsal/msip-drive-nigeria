import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Car, User, Shield, CreditCard, CheckCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const BookingPage = () => {
  const [selectedExtras, setSelectedExtras] = useState({
    chauffeur: false,
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const handleBooking = () => {
    const extras = Object.entries(selectedExtras)
      .filter(([_, checked]) => checked)
      .map(([key, _]) => key.charAt(0).toUpperCase() + key.slice(1))
      .join(", ");
    
    const message = `Hi, I'd like to book a car hire.${extras ? `\nExtras: ${extras}` : ""}\nPlease help me complete my booking.`;
    window.open(`https://wa.me/2348062237960?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Book Your Car - Easy Online Booking | Msip Global Services</title>
        <meta name="description" content="Book your car hire in Nigeria online. Professional chauffeur service with flexible pickup locations in Ogbomoso and across Nigeria." />
        <meta name="keywords" content="book car hire Nigeria, online car booking Ogbomoso, hire car Oyo State, car hire booking" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Book Your Car</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Complete your reservation in minutes with our secure booking system
                </p>
              </div>

              <Card className="max-w-4xl mx-auto shadow-large">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                        <User className="h-6 w-6 text-primary" />
                        Personal Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name *</label>
                          <input
                            type="text"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone Number *</label>
                          <input
                            type="tel"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                            placeholder="+234 800 000 0000"
                            required
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-medium">Email Address *</label>
                          <input
                            type="email"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hire Details */}
                    <div>
                      <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                        <Car className="h-6 w-6 text-primary" />
                        Hire Details
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Car className="h-4 w-4 text-primary" />
                            Select Car *
                          </label>
                          <select className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary" required>
                            <option value="">Choose a vehicle</option>
                            <option value="corolla">Toyota Corolla 2020 - ₦25,000/day</option>
                            <option value="camry">Toyota Camry 2021 - ₦35,000/day</option>
                            <option value="prado">Toyota Prado 2022 - ₦80,000/day</option>
                            <option value="lexus">Lexus RX 350 - ₦90,000/day</option>
                            <option value="mercedes">Mercedes-Benz E-Class - ₦100,000/day</option>
                            <option value="highlander">Toyota Highlander 2022 - ₦70,000/day</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            Pickup Location *
                          </label>
                          <select className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary" required>
                            <option value="">Select location</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="port-harcourt">Port Harcourt</option>
                            <option value="kano">Kano</option>
                            <option value="ibadan">Ibadan</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Pickup Date *
                          </label>
                          <input
                            type="date"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Return Date *
                          </label>
                          <input
                            type="date"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-medium flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            Return Location *
                          </label>
                          <select className="w-full h-10 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary" required>
                            <option value="">Select location</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="port-harcourt">Port Harcourt</option>
                            <option value="kano">Kano</option>
                            <option value="ibadan">Ibadan</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Extras */}
                    <div>
                      <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        Additional Services
                      </h2>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="chauffeur" 
                            checked={selectedExtras.chauffeur}
                            onCheckedChange={(checked) => setSelectedExtras({...selectedExtras, chauffeur: checked as boolean})}
                          />
                          <label htmlFor="chauffeur" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Professional Chauffeur (+₦15,000/day)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="insurance" 
                            checked={selectedExtras.insurance}
                            onCheckedChange={(checked) => setSelectedExtras({...selectedExtras, insurance: checked as boolean})}
                          />
                          <label htmlFor="insurance" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Full Insurance Coverage (+₦5,000/day)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="gps" 
                            checked={selectedExtras.gps}
                            onCheckedChange={(checked) => setSelectedExtras({...selectedExtras, gps: checked as boolean})}
                          />
                          <label htmlFor="gps" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            GPS Navigation System (+₦2,000/day)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="childSeat" 
                            checked={selectedExtras.childSeat}
                            onCheckedChange={(checked) => setSelectedExtras({...selectedExtras, childSeat: checked as boolean})}
                          />
                          <label htmlFor="childSeat" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Child Safety Seat (+₦3,000/day)
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        Secure Payment Options
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        We accept secure payments through Paystack and Flutterwave. You'll be redirected to complete your payment after confirming your booking via WhatsApp.
                      </p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-md border">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">Paystack Secure</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-md border">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">Flutterwave Verified</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full" 
                      type="button"
                      onClick={handleBooking}
                    >
                      Confirm Booking via WhatsApp
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By proceeding, you agree to our terms and conditions. We'll contact you via WhatsApp to finalize your booking and payment.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </>
  );
};

export default BookingPage;
