import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Bot, BarChart3, Megaphone, Cog, Building2, Scale } from "lucide-react";
import { useState } from "react";

type ProfileType = "construtora" | "advocacia";

export default function Servicos() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>("construtora");

  const servicesContent = {
    construtora: {
      services: [
        {
          icon: Bot,
          title: "Automação Inteligente",
          description:
            "Automatize processos de orçamento, controle de obras e gestão de fornecedores. Libere sua equipe para focar no que realmente importa: entregar projetos de qualidade.",
          features: [
            "Automação de orçamentos e propostas",
            "Controle de obras e cronogramas",
            "Gestão automatizada de fornecedores",
            "Processamento de documentos técnicos",
          ],
        },
        {
          icon: BarChart3,
          title: "Análise de Dados e BI",
          description:
            "Dashboards em tempo real para acompanhar custos, prazos e produtividade de cada obra. Tome decisões baseadas em dados concretos.",
          features: [
            "Dashboard de obras em andamento",
            "Análise de custos e margens",
            "Previsão de prazos e recursos",
            "Relatórios de produtividade",
          ],
        },
        {
          icon: Megaphone,
          title: "Marketing Digital com IA",
          description:
            "Atraia mais clientes qualificados para seus empreendimentos. Campanhas otimizadas para gerar leads de alto valor no mercado imobiliário.",
          features: [
            "Campanhas para lançamentos",
            "Segmentação por perfil de comprador",
            "Anúncios otimizados por IA",
            "Análise de ROI por empreendimento",
          ],
        },
        {
          icon: Cog,
          title: "Consultoria em IA",
          description:
            "Identificamos oportunidades de automação específicas para construtoras: desde o comercial até a entrega de chaves.",
          features: [
            "Diagnóstico de processos construtivos",
            "Roadmap de digitalização",
            "Treinamento de equipes técnicas",
            "Suporte contínuo especializado",
          ],
        },
      ],
      cta: {
        title: "Pronto para modernizar sua construtora?",
        description:
          "Agende uma conversa e descubra como IA pode reduzir custos e aumentar a eficiência das suas obras.",
      },
    },
    advocacia: {
      services: [
        {
          icon: Bot,
          title: "Automação Inteligente",
          description:
            "Automatize petições, contratos e análise de processos. Reduza tempo em tarefas repetitivas e foque em estratégia jurídica.",
          features: [
            "Geração automatizada de petições",
            "Revisão inteligente de contratos",
            "Análise de jurisprudência",
            "Gestão automatizada de prazos",
          ],
        },
        {
          icon: BarChart3,
          title: "Análise de Dados e BI",
          description:
            "Acompanhe KPIs do escritório: taxa de sucesso, tempo médio de processos, produtividade por advogado e rentabilidade por área.",
          features: [
            "Dashboard de processos ativos",
            "Análise de rentabilidade por área",
            "Previsão de resultados processuais",
            "Relatórios de produtividade",
          ],
        },
        {
          icon: Megaphone,
          title: "Marketing Digital com IA",
          description:
            "Posicione seu escritório como referência na sua área de atuação. Atraia clientes de alto valor com estratégias inteligentes.",
          features: [
            "Campanhas para captação de clientes",
            "Segmentação por área jurídica",
            "Conteúdo otimizado para advogados",
            "Análise de ROI por campanha",
          ],
        },
        {
          icon: Cog,
          title: "Consultoria em IA",
          description:
            "Orientação estratégica para implementar IA no seu escritório: da gestão de processos ao relacionamento com clientes.",
          features: [
            "Diagnóstico de processos jurídicos",
            "Roadmap de transformação digital",
            "Treinamento para equipe jurídica",
            "Suporte especializado contínuo",
          ],
        },
      ],
      cta: {
        title: "Pronto para digitalizar seu escritório?",
        description:
          "Agende uma conversa e descubra como IA pode aumentar a produtividade e rentabilidade do seu escritório.",
      },
    },
  };

  const currentContent = servicesContent[selectedProfile];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#0f2847] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Soluções completas de IA e automação para transformar seu negócio e impulsionar resultados
          </p>
        </div>
      </section>

      {/* Seletor de Perfil */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-600 mb-6 text-lg">
              Escolha seu segmento para ver exemplos específicos:
            </p>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setSelectedProfile("construtora")}
                className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                  selectedProfile === "construtora"
                    ? "bg-[#1e3a8a] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                <Building2 className="w-6 h-6" />
                Construtoras
              </button>

              <button
                onClick={() => setSelectedProfile("advocacia")}
                className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                  selectedProfile === "advocacia"
                    ? "bg-[#1e3a8a] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                <Scale className="w-6 h-6" />
                Advogados
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all border border-gray-100 animate-in fade-in duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[#1e3a8a]" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-[#1e3a8a]">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#f97316] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1e3a8a]">Como Trabalhamos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Análise",
                description: "Entendemos profundamente seus processos e identificamos oportunidades",
              },
              {
                step: "02",
                title: "Estratégia",
                description: "Desenhamos a solução ideal sob medida para suas necessidades",
              },
              {
                step: "03",
                title: "Desenvolvimento",
                description: "Implementamos a solução com acompanhamento próximo e transparente",
              },
              {
                step: "04",
                title: "Acompanhamento",
                description: "Monitoramos resultados e otimizamos continuamente para máximo ROI",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1e3a8a]">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#0f2847] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {currentContent.cta.title}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {currentContent.cta.description}
          </p>
          
          <Button
            size="lg"
            className="bg-[#f97316] hover:bg-[#b45309] text-white font-semibold px-10 py-7 text-lg rounded-lg shadow-lg transition-all"
            asChild
          >
            <Link href="/contato">Agendar Contato</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

