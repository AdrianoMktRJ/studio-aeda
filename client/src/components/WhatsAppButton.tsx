import { MessageCircle } from "lucide-react";
import { useProfile } from "@/contexts/ProfileContext";

export default function WhatsAppButton() {
  const { profile } = useProfile();
  const whatsappNumber = "5583993751326";
  
  // Mensagem personalizada baseada no perfil
  const getMessage = () => {
    if (profile === "advogado") {
      return "Olá! Sou advogado(a) e gostaria de saber mais sobre as soluções de IA para escritórios de advocacia.";
    } else if (profile === "construtora") {
      return "Olá! Represento uma construtora e gostaria de saber mais sobre as soluções de IA para gestão de obras.";
    }
    return "Olá! Gostaria de saber mais sobre os serviços do Studio AEDA Digital.";
  };

  const message = getMessage();
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}

