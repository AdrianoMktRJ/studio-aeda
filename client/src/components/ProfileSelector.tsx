import { useEffect, useState } from "react";
import { useProfile } from "@/contexts/ProfileContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Scale, Building2, X } from "lucide-react";

export default function ProfileSelector() {
  const { setProfile, hasSelectedProfile } = useProfile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar modal após 3 segundos se o usuário ainda não selecionou um perfil
    if (!hasSelectedProfile) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasSelectedProfile]);

  const handleSelectProfile = (profileType: "advogado" | "construtora") => {
    setProfile(profileType);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-0">
        {/* Botão de fechar */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 bg-white/80 hover:bg-white transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Bem-vindo ao Studio AEDA Digital
            </h2>
            <p className="text-gray-600 text-lg">
              Para personalizar sua experiência, selecione seu perfil:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Advogado */}
            <button
              onClick={() => handleSelectProfile("advogado")}
              className="group relative bg-gradient-to-br from-[#2D5F5D] to-[#1e4442] text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <Scale className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Advogado</h3>
                <p className="text-white/90 leading-relaxed">
                  Soluções especializadas para escritórios de advocacia: automação de processos,
                  gestão de documentos e análise de dados jurídicos.
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all"></div>
            </button>

            {/* Card Construtora */}
            <button
              onClick={() => handleSelectProfile("construtora")}
              className="group relative bg-gradient-to-br from-[#D97706] to-[#b86105] text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <Building2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Construtora</h3>
                <p className="text-white/90 leading-relaxed">
                  Ferramentas para empresas de construção: gestão de obras, controle de custos,
                  análise de produtividade e automação de processos.
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all"></div>
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Você pode fechar esta janela e continuar navegando sem selecionar um perfil.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

