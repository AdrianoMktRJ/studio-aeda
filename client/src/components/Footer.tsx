import { Link } from "wouter";
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Serviços", path: "/servicos" },
    { label: "Contato", path: "/contato" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/studioaedadigital/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578330103145" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@studioaeda.digital" },
    { icon: SiTiktok, label: "TikTok", href: "https://www.tiktok.com/@studio.aeda" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo e Descrição - 5 colunas */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center p-1">
                <img src="/logo-aeda.png" alt="AEDA Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center items-start">
                <span className="text-base font-bold text-white leading-none">Studio AEDA Digital</span>
                <span className="text-xs text-gray-500 leading-none mt-1">Intelligent management with AI</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Transformamos tecnologia em clareza: simplificamos processos, aumentamos produtividade 
              e geramos crescimento por meio de IA, automação e dados.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#1e3a8a] flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação - 3 colunas */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-4 text-white">Navegação</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <button className="text-sm text-gray-400 hover:text-white text-left transition-colors">
                    {item.label}
                  </button>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato - 4 colunas */}
          <div className="md:col-span-4">
            <h3 className="text-base font-semibold mb-4 text-white">Contato</h3>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">E-mail</p>
                <a
                  href="mailto:s.aedadigital@gmail.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>s.aedadigital@gmail.com</span>
                </a>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/5583993751326"
                  className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+55 (83) 99375-1326</span>
                </a>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">Horário</p>
                <p className="text-sm text-gray-300">Seg-Sex: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">© 2025 Studio AEDA Digital. Todos os direitos reservados.</p>
          <Link href="/privacidade">
            <button className="text-sm text-gray-400 hover:text-white transition-colors mt-2">
              Política de Privacidade e LGPD
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

