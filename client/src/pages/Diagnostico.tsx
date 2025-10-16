import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Zap, Target, Loader2 } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Diagnostico() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    challenge: "",
  });

  const submitMutation = trpc.forms.submitDiagnostico.useMutation({
    onSuccess: () => {
      toast.success("Diagnóstico solicitado com sucesso!", {
        description: "Nossa equipe entrará em contato em breve.",
      });
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "",
        challenge: "",
      });
    },
    onError: (error) => {
      toast.error("Erro ao enviar diagnóstico", {
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: "Análise Gratuita",
      description: "Avaliação completa dos seus processos sem nenhum custo",
    },
    {
      icon: Zap,
      title: "Identificação de Oportunidades",
      description: "3 pontos específicos de automação para reduzir custos",
    },
    {
      icon: Target,
      title: "Plano de Ação",
      description: "Roadmap personalizado para implementação de IA",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5b3cc4] to-[#4a2ea3] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Diagnóstico Gratuito de IA
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Descubra como a inteligência artificial pode transformar seu negócio. 
            Analisamos seus processos e identificamos oportunidades de automação.
          </p>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            O que você recebe no diagnóstico
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#5b3cc4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
                Solicite seu Diagnóstico Gratuito
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail corporativo *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da empresa *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Sua empresa"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Número de funcionários *
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5b3cc4]"
                  >
                    <option value="">Selecione</option>
                    <option value="1-10">1-10 funcionários</option>
                    <option value="11-50">11-50 funcionários</option>
                    <option value="51-200">51-200 funcionários</option>
                    <option value="201-500">201-500 funcionários</option>
                    <option value="500+">Mais de 500 funcionários</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-2">
                    Qual o principal desafio do seu negócio? *
                  </label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    required
                    value={formData.challenge}
                    onChange={handleChange}
                    placeholder="Ex: Processos manuais que tomam muito tempo, dificuldade em analisar dados, necessidade de automatizar atendimento..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitMutation.isPending}
                  className="w-full bg-[#5b3cc4] hover:bg-[#5b3cc4] text-white font-semibold py-7 text-lg rounded-lg shadow-md transition-all"
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Solicitar Diagnóstico Gratuito"
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Ao enviar este formulário, você concorda em receber comunicações do Studio AEDA Digital
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Como funciona o diagnóstico
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Você preenche o formulário",
                description: "Conte-nos sobre seu negócio e seus desafios",
              },
              {
                step: "2",
                title: "Agendamos uma conversa",
                description: "Nossa equipe entra em contato em até 24 horas",
              },
              {
                step: "3",
                title: "Análise dos processos",
                description: "Avaliamos seus processos e identificamos oportunidades",
              },
              {
                step: "4",
                title: "Recebe o diagnóstico",
                description: "Apresentamos 3 pontos de automação e um plano de ação",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5b3cc4] to-[#4a2ea3] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

