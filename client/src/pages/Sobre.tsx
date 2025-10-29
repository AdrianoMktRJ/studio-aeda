import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Lightbulb, Target, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sobre() {
  const values = [
    {
      icon: Heart,
      title: "Humanização",
      description: "Entendemos que cada negócio é único. Nossas soluções são personalizadas para você.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos as melhores tecnologias em IA e automação disponíveis no mercado.",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em resultados mensuráveis e impacto real no seu negócio.",
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Somos seus parceiros no caminho para a transformação digital.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Sobre Studio AEDA Digital</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Transformamos tecnologia em clareza: simplificamos processos, aumentamos produtividade e geramos crescimento.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center">Nossa História</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Studio AEDA Digital nasceu da frustração de profissionais que viam suas horas sendo consumidas por tarefas repetitivas e sem valor agregado. Advogados perdendo prazos, construtoras sem controle de custos, empresas inteiras operando com processos manuais.
            </p>
            <p>
              Percebemos que a inteligência artificial e a automação poderiam ser a solução, mas a maioria das soluções no mercado era cara, complexa e inacessível para pequenas e médias empresas.
            </p>
            <p>
              Então decidimos criar algo diferente: soluções de IA e automação que fossem acessíveis, práticas e focadas em resultados reais. Soluções que transformassem a vida dos profissionais, liberando tempo para o que realmente importa: decisões estratégicas e relacionamentos.
            </p>
            <p>
              Hoje, ajudamos dezenas de empresas a automatizar seus processos, aumentar produtividade e crescer com confiança.
            </p>
            </div>
            <div>
              <img 
                src="/images/team-consulting.jpg" 
                alt="Equipe de consultoria em tecnologia" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#f97316]">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Missão</h3>
              <p className="text-gray-600">
                Democratizar o acesso à inteligência artificial e automação, transformando a forma como pequenas e médias empresas operam.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#f97316]">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser a referência em soluções de IA e automação para construtoras e escritórios de advocacia na América Latina.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border-l-4 border-[#f97316]">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Valores</h3>
              <p className="text-gray-600">
                Humanização, inovação, transparência, parceria e compromisso com resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Detalhados */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex gap-4">
                  <Icon className="w-12 h-12 text-[#f97316] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-16 px-4 bg-[#1e3a8a] text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Por que escolher Studio AEDA Digital?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f97316]">Experiência Comprovada</h3>
              <p className="text-blue-100 leading-relaxed">
                Nossa equipe tem anos de experiência em implementação de IA, automação e transformação digital. Sabemos o que funciona e o que não funciona.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f97316]">Foco em Resultados</h3>
              <p className="text-blue-100 leading-relaxed">
                Não vendemos promessas. Vendemos resultados mensuráveis. Nossos clientes aumentam produtividade em até 40% em 30 dias.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f97316]">Suporte Personalizado</h3>
              <p className="text-blue-100 leading-relaxed">
                Cada negócio é único. Oferecemos suporte personalizado e acompanhamento contínuo para garantir seu sucesso.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f97316]">Garantia de Satisfação</h3>
              <p className="text-blue-100 leading-relaxed">
                Se não ficar satisfeito com os resultados nos primeiros 7 dias, devolvemos 100% do seu investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6">Vamos trabalhar juntos?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Comece com um diagnóstico gratuito e descubra como podemos ajudar seu negócio.
          </p>
          <Button
            className="bg-[#f97316] hover:bg-[#b86105] text-white font-semibold px-12 py-6 rounded-lg shadow-md transition-all text-lg inline-flex items-center gap-2"
            asChild
          >
            <Link href="/contato">
              Solicitar Agendar Contato
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
