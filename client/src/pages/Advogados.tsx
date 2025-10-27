import { Scale, FileText, Clock, Shield, CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Advogados() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-medium">Automação Jurídica com IA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Foque no Direito, Nós Cuidamos do Resto
            </h1>
            
            <p className="text-xl text-blue-100 mb-4">
              Tecnologia que liberta, inteligência que humaniza
            </p>
            
            <p className="text-lg text-blue-200 mb-8">
              Advogados lidam com prazos apertados, pilhas de documentos e tarefas manuais que consomem tempo. 
              Isso reduz o espaço para estratégias e atendimento ao cliente.
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
              Automação Jurídica com Inteligência Artificial
            </h2>
            <p className="text-xl text-gray-600">
              Apresentamos uma solução de automação jurídica com inteligência artificial que:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Geração Automática de Documentos</h3>
                  <p className="text-gray-700">
                    Gera e preenche petições, contratos e minutas de forma automática, 
                    economizando horas de trabalho manual.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Acompanhamento de Prazos</h3>
                  <p className="text-gray-700">
                    Acompanha prazos processuais e envia alertas para evitar atrasos 
                    e garantir cumprimento de todas as obrigações.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Organização Inteligente</h3>
                  <p className="text-gray-700">
                    Organiza e classifica documentos, permitindo buscas rápidas por 
                    jurisprudências e cláusulas relevantes.
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
                  <h3 className="font-bold text-gray-900 mb-2">Integração Simples</h3>
                  <p className="text-gray-700">
                    Integra-se ao seu sistema atual sem necessidade de equipe de TI, 
                    mantendo seus processos funcionando normalmente.
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
              Benefícios para Seu Escritório
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mais Tempo Estratégico</h3>
              <p className="text-gray-600 text-sm">
                Mais tempo para atividades estratégicas e atendimento personalizado ao cliente
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Redução de Erros</h3>
              <p className="text-gray-600 text-sm">
                Redução de erros de digitação e esquecimentos que podem comprometer processos
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Maior Agilidade</h3>
              <p className="text-gray-600 text-sm">
                Maior agilidade no atendimento ao cliente e no cumprimento de prazos processuais
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visão Unificada</h3>
              <p className="text-gray-600 text-sm">
                Visão unificada de processos, tarefas e indicadores de performance do escritório
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
              Adaptada especialmente para o setor jurídico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analisar</h3>
              <p className="text-gray-600">
                Analisamos os fluxos do escritório e identificamos gargalos que impedem a produtividade
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">E</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eliminar</h3>
              <p className="text-gray-600">
                Eliminamos tarefas repetitivas com automação inteligente, liberando tempo da equipe
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desenvolver</h3>
              <p className="text-gray-600">
                Desenvolvemos soluções inteligentes para geração de documentos e gestão de prazos
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aprimorar</h3>
              <p className="text-gray-600">
                Aprimoramos continuamente com acompanhamento humanizado e suporte dedicado
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
                Quer Dedicar Mais Tempo ao Que Importa?
              </h2>
              <p className="text-xl text-blue-100">
                Clique em "Solicitar Contato" e descubra como a IA pode transformar seu escritório
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
                    Nome do Escritório *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome do escritório"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Área de Atuação Principal *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecione</option>
                    <option value="civil">Direito Civil</option>
                    <option value="trabalhista">Direito Trabalhista</option>
                    <option value="criminal">Direito Criminal</option>
                    <option value="empresarial">Direito Empresarial</option>
                    <option value="familia">Direito de Família</option>
                    <option value="tributario">Direito Tributário</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Número de Processos Ativos *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecione</option>
                    <option value="1-50">1-50 processos</option>
                    <option value="51-100">51-100 processos</option>
                    <option value="101-500">101-500 processos</option>
                    <option value="500+">Mais de 500 processos</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Principal Desafio
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Descreva o principal desafio que você enfrenta na gestão do escritório..."
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

