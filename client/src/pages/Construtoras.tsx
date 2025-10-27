import { Building2, BarChart3, Calendar, Shield, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Construtoras() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">IA para Gestão de Obras</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reduza Custos e Entregue no Prazo
            </h1>
            
            <p className="text-xl text-blue-100 mb-4">
              Tecnologia que liberta, inteligência que humaniza
            </p>
            
            <p className="text-lg text-blue-200 mb-8">
              Gerenciar obras envolve alocar recursos, cumprir prazos e controlar custos. 
              Erros de planejamento resultam em atrasos e desperdícios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#solucao"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ver Soluções
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contato" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Solicitar Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section id="solucao" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Plataforma Usa Inteligência Artificial Para
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Otimização de Recursos</h3>
                  <p className="text-gray-700">
                    Otimiza a alocação de equipamentos e equipes, prevendo atrasos e propondo 
                    ajustes para manter o cronograma.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Cronogramas Dinâmicos</h3>
                  <p className="text-gray-700">
                    Gera cronogramas dinâmicos e sugere antecipação de compras, garantindo que 
                    materiais cheguem no canteiro no momento certo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Análise de Segurança</h3>
                  <p className="text-gray-700">
                    Analisa dados de segurança e desempenho para identificar riscos e corrigir 
                    falhas antes que se tornem problemas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Simulação 3D</h3>
                  <p className="text-gray-700">
                    Simula projetos em 3D, permitindo ajustes no design e nos processos 
                    ainda na fase de planejamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios para Sua Construtora
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Redução de Custos</h3>
              <p className="text-gray-600 text-sm">
                Redução de custos operacionais e de desperdícios através de planejamento inteligente
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cumprimento de Prazos</h3>
              <p className="text-gray-600 text-sm">
                Cumprimento de prazos com cronogramas inteligentes que antecipam problemas
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Aumento da Segurança</h3>
              <p className="text-gray-600 text-sm">
                Aumento da segurança no canteiro de obras com análise preditiva de riscos
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Decisões Baseadas em Dados</h3>
              <p className="text-gray-600 text-sm">
                Decisões baseadas em dados concretos, não em intuição ou experiência isolada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia A.E.D.A. */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Metodologia A.E.D.A.
            </h2>
            <p className="text-xl text-gray-600">
              Adaptada especialmente para o setor de construção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analisar</h3>
              <p className="text-gray-600">
                Analisamos o processo de gestão de obras e identificamos desperdícios e gargalos
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">E</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eliminar</h3>
              <p className="text-gray-600">
                Eliminamos tarefas manuais e controles espalhados, centralizando dados em um só lugar
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desenvolver</h3>
              <p className="text-gray-600">
                Desenvolvemos automações para alocação de recursos e previsões de risco
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aprimorar</h3>
              <p className="text-gray-600">
                Aprimoramos continuamente com dashboards e acompanhamento técnico personalizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garantia de Satisfação de 7 Dias
            </h2>
            <p className="text-xl text-gray-700">
              Se não atender às expectativas nos primeiros 7 dias, devolvemos 100% do seu investimento. 
              Sem burocracia, sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para Otimizar Sua Obra?
              </h2>
              <p className="text-xl text-blue-100">
                Clique em "Solicitar Contato" e descubra como a IA pode reduzir custos e atrasos
              </p>
            </div>

            <form className="bg-white rounded-xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome da Construtora *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da empresa"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Número de Obras Ativas *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecione</option>
                    <option value="1-3">1-3 obras</option>
                    <option value="4-10">4-10 obras</option>
                    <option value="11-20">11-20 obras</option>
                    <option value="20+">Mais de 20 obras</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Porte da Empresa *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecione</option>
                    <option value="pequeno">Pequeno Porte</option>
                    <option value="medio">Médio Porte</option>
                    <option value="grande">Grande Porte</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Principais Desafios
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Descreva os principais desafios que você enfrenta na gestão das suas obras..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Solicitar Contato
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                * Campos obrigatórios. Responderemos em até 24 horas.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

