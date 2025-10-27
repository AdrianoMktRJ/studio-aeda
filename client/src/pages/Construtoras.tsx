import { Building2, MessageSquare, Calendar, BarChart3, Zap, CheckCircle2, ArrowRight } from "lucide-react";
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
              <span className="text-sm font-medium">Soluções para Construtoras</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automatize a Gestão da Sua Obra com Inteligência Artificial
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Reduza tempo em tarefas administrativas, melhore a comunicação com clientes e fornecedores, 
              e tenha controle total sobre seus projetos de construção.
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
              Desafios Comuns em Construtoras
            </h2>
            <p className="text-xl text-gray-600">
              Sabemos que gerenciar uma obra envolve múltiplos desafios. Veja como a IA pode ajudar:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Comunicação Fragmentada</h3>
                  <p className="text-gray-700">
                    Mensagens perdidas entre WhatsApp, e-mail e ligações. Difícil acompanhar o histórico de conversas com clientes e fornecedores.
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
                    Horas gastas respondendo as mesmas perguntas, enviando atualizações de obra e organizando documentos.
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
                  <h3 className="font-bold text-gray-900 mb-2">Falta de Visibilidade do Progresso</h3>
                  <p className="text-gray-700">
                    Dificuldade em acompanhar o andamento de múltiplas obras simultaneamente e identificar gargalos.
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
                  <h3 className="font-bold text-gray-900 mb-2">Gestão de Prazos e Agendamentos</h3>
                  <p className="text-gray-700">
                    Coordenar fornecedores, equipes e clientes sem conflitos de agenda é um desafio constante.
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
              Automações inteligentes que economizam tempo e melhoram a eficiência da sua construtora
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
                Responde automaticamente perguntas frequentes de clientes sobre andamento da obra, 
                documentação e prazos - 24 horas por dia.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Cliente pergunta: "Qual o prazo de entrega?" → IA responde instantaneamente com base nos dados do projeto.
                </p>
              </div>
            </div>

            {/* Solução 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integração com KanFlow
              </h3>
              <p className="text-gray-600 mb-4">
                Automatize a criação de tarefas, atualizações de status e notificações da equipe 
                diretamente do WhatsApp ou redes sociais.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Fornecedor confirma entrega → Sistema cria tarefa automaticamente no KanFlow para a equipe.
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
                Coordene visitas de clientes, entregas de fornecedores e reuniões de equipe 
                automaticamente, evitando conflitos.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Cliente solicita visita → IA verifica agenda e oferece horários disponíveis instantaneamente.
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
                Responda comentários e mensagens no Instagram e Facebook automaticamente, 
                mantendo engajamento com leads.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Lead comenta em post → IA responde e qualifica interesse, enviando para sua equipe.
                </p>
              </div>
            </div>

            {/* Solução 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Relatórios Automáticos
              </h3>
              <p className="text-gray-600 mb-4">
                Gere relatórios de progresso de obra automaticamente e envie para clientes 
                semanalmente, sem esforço manual.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Toda sexta-feira → Sistema envia relatório com fotos e status atualizado para o cliente.
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
                sobre orçamento, prazo e necessidades.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exemplo prático:</p>
                <p className="text-blue-800">
                  Lead preenche formulário → IA faz perguntas qualificadoras e agenda reunião comercial.
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
              Com base em estudos de mercado sobre automação e IA na construção civil
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
                <span className="text-3xl font-bold text-blue-600">30%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Melhoria na Comunicação
              </h3>
              <p className="text-gray-600">
                Empresas com automação de comunicação reportam 30% menos retrabalho
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
                IA responde clientes a qualquer hora, melhorando satisfação e conversão
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
                Vamos mostrar como a IA pode transformar a gestão da sua construtora
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

              <div className="mb-6">
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

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Principal Desafio
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Descreva o principal desafio que você enfrenta na gestão das suas obras..."
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

