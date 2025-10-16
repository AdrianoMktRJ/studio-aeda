import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Bot, BarChart3, Megaphone, Cog, Lightbulb, Users } from "lucide-react";

export default function Servicos() {
  const services = [
    {
      icon: Bot,
      title: "Automação Inteligente",
      description:
        "Automatize processos repetitivos e libere sua equipe para focar em tarefas estratégicas. Implementamos soluções de IA que aprendem e se adaptam ao seu negócio.",
      features: [
        "Chatbots e assistentes virtuais",
        "Automação de workflows",
        "Processamento de documentos",
        "Integração de sistemas",
      ],
    },
    {
      icon: BarChart3,
      title: "Análise de Dados e BI",
      description:
        "Transforme dados brutos em insights acionáveis. Criamos dashboards inteligentes e relatórios que facilitam a tomada de decisão.",
      features: [
        "Dashboards personalizados",
        "Análise preditiva",
        "Visualização de dados",
        "Relatórios automatizados",
      ],
    },
    {
      icon: Megaphone,
      title: "Marketing Digital com IA",
      description:
        "Estratégias de tráfego pago otimizadas por inteligência artificial para maximizar seu ROI e atrair clientes qualificados.",
      features: [
        "Campanhas otimizadas por IA",
        "Segmentação inteligente",
        "Análise de performance",
        "Automação de marketing",
      ],
    },
    {
      icon: Cog,
      title: "Consultoria em IA",
      description:
        "Orientação estratégica para implementar IA no seu negócio de forma eficiente e sustentável. Identificamos oportunidades e traçamos o melhor caminho.",
      features: [
        "Diagnóstico de processos",
        "Roadmap de implementação",
        "Treinamento de equipes",
        "Suporte contínuo",
      ],
    },
    {
      icon: Lightbulb,
      title: "Desenvolvimento de Soluções Custom",
      description:
        "Criamos soluções sob medida para desafios específicos do seu negócio. Do conceito à implementação, desenvolvemos ferramentas que realmente funcionam.",
      features: [
        "Aplicações web e mobile",
        "Sistemas personalizados",
        "APIs e integrações",
        "Prototipagem rápida",
      ],
    },
    {
      icon: Users,
      title: "Treinamento e Capacitação",
      description:
        "Capacite sua equipe para trabalhar com IA e ferramentas digitais. Oferecemos treinamentos práticos e acessíveis.",
      features: [
        "Workshops práticos",
        "Treinamento in-company",
        "Material didático",
        "Certificação",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Soluções completas de IA e automação para transformar seu negócio e impulsionar resultados
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-purple-600" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 mt-1">✓</span>
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Como Trabalhamos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description: "Analisamos seus processos e identificamos oportunidades de melhoria",
              },
              {
                step: "02",
                title: "Planejamento",
                description: "Desenhamos a solução ideal sob medida para suas necessidades",
              },
              {
                step: "03",
                title: "Implementação",
                description: "Desenvolvemos e implantamos a solução com acompanhamento próximo",
              },
              {
                step: "04",
                title: "Otimização",
                description: "Monitoramos resultados e otimizamos continuamente",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar seu negócio com IA?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Agende um diagnóstico gratuito e descubra como podemos ajudar sua empresa a crescer
          </p>
          
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-10 py-7 text-lg rounded-lg shadow-lg transition-all"
            asChild
          >
            <Link href="/diagnostico">Agendar Diagnóstico Gratuito</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

