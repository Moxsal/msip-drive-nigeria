import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I book a car hire?",
    answer: "You can book a car through our website's booking page, call us at +234806 223 7960, or send us a message via WhatsApp. We'll confirm your reservation and send you all the details."
  },
  {
    question: "What documents do I need to rent a car?",
    answer: "You'll need a valid driver's license, a government-issued ID (National ID, International Passport, or Voter's Card), and proof of address. For corporate hire services, we may require additional documentation."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 24 hours before pickup receive a full refund. Cancellations within 24 hours are subject to a 50% cancellation fee. No-shows are non-refundable."
  },
  {
    question: "Do you offer chauffeur services?",
    answer: "Yes! We offer professional chauffeur services at an additional cost of ₦15,000 per day. Our drivers are experienced, courteous, and familiar with routes across Nigeria."
  },
  {
    question: "Are your cars insured?",
    answer: "Yes, all our vehicles are fully insured with comprehensive coverage. We also offer additional insurance options for extra peace of mind."
  },
  {
    question: "What is your fuel policy?",
    answer: "We operate on a full-to-full fuel policy. You'll receive the car with a full tank and should return it full. Alternatively, we can refuel it for you at current fuel rates plus a service charge."
  },
  {
    question: "Can I rent a car for airport pickup?",
    answer: "Absolutely! We offer reliable airport pickup and drop-off services at Lagos, Abuja, and other major Nigerian airports. Just let us know your flight details when booking."
  },
  {
    question: "What are your payment options?",
    answer: "We accept bank transfers, Paystack, Flutterwave, and cash payments. A deposit is required to secure your booking, with the balance due at pickup or delivery."
  },
  {
    question: "Do you offer long-term hire services?",
    answer: "Yes, we have special rates for weekly and monthly hire packages. Contact us for custom packages for corporate clients or extended personal use."
  },
  {
    question: "What if the car breaks down during my hire period?",
    answer: "We provide 24/7 roadside assistance. If there's a mechanical issue, we'll arrange for repairs or provide a replacement vehicle at no extra cost to you."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our car hire services
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-medium">
          <CardContent className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="text-primary font-semibold hover:underline"
          >
            Contact us for more information →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;