import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Send via WhatsApp
      const message = `Newsletter Signup:\n\nEmail: ${email}`;
      window.open(
        `https://wa.me/2348062237960?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-large">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Stay Updated with Our Latest Offers
              </h2>
              <p className="text-lg text-muted-foreground">
                Subscribe to our newsletter and get exclusive deals, promotions, and car hire tips delivered to your inbox
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 h-12 px-4 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;