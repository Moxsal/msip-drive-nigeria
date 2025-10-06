import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/2348062237960"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-orange-glow hover:scale-110 transition-smooth bg-[#25D366] hover:bg-[#20BA5A] text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default FloatingWhatsApp;