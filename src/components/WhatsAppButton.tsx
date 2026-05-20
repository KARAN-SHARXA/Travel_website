import { MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppUrl, CONTACT } from "@/lib/contact";

const FloatingContactButtons = () => {
  const whatsappMessage = "I'm interested in booking a taxi with Kuldeep Tour and Travel.";

  return (
    <>
      {/* 📞 Call Button */}
      <a
        href={`tel:${CONTACT.phoneE164}`}
        className="
          fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40
          w-12 h-12 sm:w-14 sm:h-14
          bg-green-600 text-white
          rounded-full
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-transform duration-200
          hover:scale-110
          animate-pop-up
        "
        style={{ animationDelay: "0.05s" }}
        aria-label="Call Us"
      >
        <Phone size={20} className="sm:w-6 sm:h-6" />
      </a>

      {/* 💬 WhatsApp Button */}
      <a
        href={buildWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40
          w-12 h-12 sm:w-14 sm:h-14
          bg-[#25D366] text-white
          rounded-full
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-transform duration-200
          hover:scale-110
          animate-pop-up
        "
        style={{ animationDelay: "0.15s" }}
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
      </a>
    </>
  );
};

export default FloatingContactButtons;





