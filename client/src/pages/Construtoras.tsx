import { Building2, BarChart3, Calendar, Shield, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { useState, FormEvent } from "react";
import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Construtoras() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    numeroObras: "",
    porte: "",
    desafios: "",
  });

  const submitMutation = trpc.forms.submitConstrutoras.useMutation({
    onSuccess: () => {
      alert("✅ Solicitação enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        numeroObras: "",
        porte: "",
        desafios: "",
      });
    },
    onError: (error) => {
      console.error("Erro ao enviar formulário:", error);
      alert("❌ Erro ao enviar solicitação. Tente novamente.");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Automação inteligente para construtoras que querem eliminar atrasos, reduzir desperdícios e 
              aumentar a previsibilidade de entrega.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contato"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Solicitar Contato
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#solucoes"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 border border-white/30"
              >
                Ver Soluções
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dor do Cliente */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Você Reconhece Esses Problemas?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Muitas construtoras enfrentam desafios diários que impactam diretamente nos resultados:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Atrasos Constantes</h3>
                <p className="text-gray-700">
                  Cronogramas que não refletem a realidade, causando retrabalho e custos extras
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Comunicação Fragmentada</h3>
                <p className="text-gray-700">
                  Informações espalhadas em WhatsApp, e-mail e planilhas, gerando confusão
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Falta de Visibilidade</h3>
                <p className="text-gray-700">
                  Dificuldade em acompanhar o status real de cada obra e identificar gargalos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Como a IA Resolve Esses Desafios
              </h2>
              <p className="text-xl text-gray-600">
                Soluções práticas e comprovadas para otimizar sua gestão de obras
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solução 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cronogramas Dinâmicos
                </h3>
                <p className="text-gray-600 mb-4">
                  Ajustes automáticos de prazos com base em histórico e condições reais da obra
                </p>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <strong>Exemplo:</strong> Atraso na fundação? O sistema recalcula automaticamente 
                  todas as etapas seguintes e notifica a equipe.
                </div>
              </div>

              {/* Solução 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gestão Automatizada de Tarefas
                </h3>
                <p className="text-gray-600 mb-4">
                  Centralização de informações e automação de processos repetitivos
                </p>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <strong>Exemplo:</strong> Relatórios diários gerados automaticamente e enviados 
                  para stakeholders via WhatsApp ou e-mail.
                </div>
              </div>

              {/* Solução 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Previsão de Riscos
                </h3>
                <p className="text-gray-600 mb-4">
                  Identificação antecipada de problemas antes que se tornem críticos
                </p>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <strong>Exemplo:</strong> Alerta automático quando estoque de materiais está 
                  baixo ou quando há risco de atraso.
                </div>
              </div>

              {/* Solução 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Comunicação Unificada
                </h3>
                <p className="text-gray-600 mb-4">
                  Todas as informações da obra em um só lugar, acessível para toda a equipe
                </p>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <strong>Exemplo:</strong> Dashboard centralizado mostrando status de todas as 
                  obras em tempo real.
                </div>
              </div>

              {/* Solução 5 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Relatórios Inteligentes
                </h3>
                <p className="text-gray-600 mb-4">
                  Análises automáticas de desempenho e sugestões de melhoria
                </p>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <strong>Exemplo:</strong> Comparação automática entre obras similares para 
                  identificar oportunidades de otimização.
                </div>
              </div>

              {/* Solução 6 */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qualificação de Leads
                </h3>
                <p className="text-gray-600 mb-4">
                  Identificação automática dos melhores clientes e oportunidades
                </p>
                <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  <strong>Exemplo:</strong> Sistema analisa perfil de clientes e prioriza 
                  aqueles com maior potencial de fechamento.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia A.E.D.A. */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Metodologia A.E.D.A.
            </h2>
            <p className="text-xl text-gray-600">
              Um processo estruturado para transformar sua gestão de obras
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analisar</h3>
              <p className="text-gray-600">
                Mapeamos processos, identificamos gargalos e definimos prioridades para sua construtora
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

            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
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
                  <select 
                    name="numeroObras"
                    value={formData.numeroObras}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
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
                  <select 
                    name="porte"
                    value={formData.porte}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
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
                  name="desafios"
                  value={formData.desafios}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Descreva os principais desafios que você enfrenta na gestão das suas obras..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitMutation.isPending ? "Enviando..." : "Solicitar Contato"}
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

