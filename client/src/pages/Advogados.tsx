import { Scale, MessageSquare, Calendar, FileText, Zap, CheckCircle2, ArrowRight } from "lucide-react";
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
              <span className="text-sm font-medium">Soluções para Escritórios de Advocacia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automatize a Gestão do Seu Escritório com Inteligência Artificial
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Reduza tempo em tarefas administrativas, melhore o atendimento aos clientes 
              e tenha controle total sobre processos e prazos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Agendar Demonstração
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
              <a 
                href="#desafios" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
              >
                Ver Soluções
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Desafios Comuns */}
      <section id="desafios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desafios Comuns em Escritórios de Advocacia
            </h2>
            <p className="text-xl text-gray-600">
              Sabemos que gerenciar um escritório jurídico envolve múltiplos desafios. Veja como a IA pode ajudar:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sobrecarga de Atendimento</h3>
                  <p className="text-gray-700">
                    Clientes ligam, mandam WhatsApp e e-mail com as mesmas perguntas sobre processos, 
                    prazos e documentos. Difícil acompanhar tudo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Tarefas Administrativas Repetitivas</h3>
                  <p className="text-gray-700">
                    Horas gastas enviando atualizações de processos, organizando documentos 
                    e respondendo perguntas básicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Controle de Prazos e Processos</h3>
                  <p className="text-gray-700">
                    Gerenciar múltiplos processos, prazos e audiências sem perder nenhum detalhe 
                    é um desafio constante.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Captação e Qualificação de Clientes</h3>
                  <p className="text-gray-700">
                    Leads chegam por vários canais, mas falta tempo para qualificar e responder 
                    rapidamente antes de perder a oportunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções com IA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como a IA Resolve Esses Desafios
            </h2>
            <p className="text-xl text-gray-600">
              Automações inteligentes que economizam tempo e melhoram a eficiência do seu escritório
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solução 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Assistente de IA no WhatsApp
              </h3>
              <p className="text-gray-600 mb-4">
                Responde automaticamente perguntas frequentes de clientes sobre andamento de processos, 
                documentos necessários e prazos - 24 horas por dia.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Cliente pergunta: "Qual o status do meu processo?" → IA responde com informações atualizadas.
                </p>
              </div>
            </div>

            {/* Solução 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integração com KanFlow
              </h3>
              <p className="text-gray-600 mb-4">
                Automatize a criação de tarefas, lembretes de prazos e notificações da equipe 
                diretamente do WhatsApp ou sistema de processos.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Novo prazo no processo → Sistema cria tarefa automaticamente e notifica advogado responsável.
                </p>
              </div>
            </div>

            {/* Solução 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Agendamento Inteligente
              </h3>
              <p className="text-gray-600 mb-4">
                Coordene consultas, audiências e reuniões automaticamente, 
                evitando conflitos de agenda e otimizando o tempo da equipe.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Cliente solicita consulta → IA verifica agenda e oferece horários disponíveis instantaneamente.
                </p>
              </div>
            </div>

            {/* Solução 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automação de Redes Sociais
              </h3>
              <p className="text-gray-600 mb-4">
                Responda comentários e mensagens no Instagram, Facebook e LinkedIn automaticamente, 
                mantendo engajamento com potenciais clientes.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Lead comenta em post jurídico → IA responde e qualifica interesse, agendando consulta.
                </p>
              </div>
            </div>

            {/* Solução 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Atualizações Automáticas
              </h3>
              <p className="text-gray-600 mb-4">
                Envie atualizações de processos para clientes automaticamente via WhatsApp ou e-mail, 
                sem esforço manual da equipe.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Processo tem movimentação → Sistema envia notificação automática para o cliente.
                </p>
              </div>
            </div>

            {/* Solução 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Qualificação de Leads
              </h3>
              <p className="text-gray-600 mb-4">
                IA qualifica leads automaticamente via WhatsApp ou site, coletando informações 
                sobre o caso, urgência e viabilidade.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Lead preenche formulário → IA faz perguntas qualificadoras e agenda consulta inicial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Esperados
            </h2>
            <p className="text-xl text-gray-600">
              Com base em estudos de mercado sobre automação e IA em escritórios jurídicos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">40%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Redução de Tarefas Repetitivas
              </h3>
              <p className="text-gray-600">
                Estudos mostram que a automação pode reduzir tarefas administrativas em até 40%
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">50%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mais Tempo para Casos Complexos
              </h3>
              <p className="text-gray-600">
                Advogados ganham até 50% mais tempo para focar em estratégia e casos importantes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Atendimento Contínuo
              </h3>
              <p className="text-gray-600">
                IA responde clientes a qualquer hora, melhorando satisfação e retenção
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Agende uma Demonstração Personalizada
              </h2>
              <p className="text-xl text-blue-100">
                Vamos mostrar como a IA pode transformar a gestão do seu escritório
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

              <div className="mb-6">
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
                Agendar Demonstração
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

