import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Instagram, Facebook, Linkedin, Globe, Users, Target, TrendingUp } from "lucide-react";

export default function DiagnosticoDetalhado() {
  const [formData, setFormData] = useState({
    // Dados básicos (vindos do primeiro formulário via URL params)
    name: "",
    email: "",
    phone: "",
    company: "",
    
    // Perfil dos clientes
    clientProfile: "",
    clientLocation: "",
    clientPainPoints: "",
    
    // Canais de comunicação
    instagramUrl: "",
    facebookUrl: "",
    linkedinUrl: "",
    websiteUrl: "",
    otherChannels: "",
    
    // Processos internos
    timeConsumingProcesses: "",
    manualTasks: "",
    
    // Objetivos
    growthGoals: "",
    monthlyRevenue: "",
    desiredResults: "",
  });

  const submitMutation = trpc.forms.submitDetailedDiagnosis.useMutation({
    onSuccess: () => {
      toast.success("Diagnóstico detalhado enviado com sucesso! Em breve entraremos em contato.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        clientProfile: "",
        clientLocation: "",
        clientPainPoints: "",
        instagramUrl: "",
        facebookUrl: "",
        linkedinUrl: "",
        websiteUrl: "",
        otherChannels: "",
        timeConsumingProcesses: "",
        manualTasks: "",
        growthGoals: "",
        monthlyRevenue: "",
        desiredResults: "",
      });
    },
    onError: (error: any) => {
      toast.error("Erro ao enviar diagnóstico. Tente novamente.");
      console.error(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#5b3cc4] to-[#7c5ce0] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-[#ffd600]" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Obrigado pelo seu interesse!
              </h1>
              <p className="text-xl text-purple-100 mb-4">
                Para criar um diagnóstico personalizado e preciso, precisamos entender melhor seu negócio e seus desafios.
              </p>
              <p className="text-lg text-purple-200">
                Preencha as informações abaixo e nossa IA analisará suas redes sociais e processos para identificar as melhores oportunidades de crescimento.
              </p>
            </div>
          </div>
        </section>

        {/* Formulário Detalhado */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Dados Básicos */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-3">
                    <Users className="w-7 h-7 text-[#5b3cc4]" />
                    Dados Básicos
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                </Card>

                {/* Perfil dos Clientes */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-3">
                    <Target className="w-7 h-7 text-[#5b3cc4]" />
                    Perfil dos Seus Clientes
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="clientProfile" className="block text-sm font-medium text-gray-700 mb-2">
                        Quem são seus clientes? *
                      </label>
                      <Textarea
                        id="clientProfile"
                        name="clientProfile"
                        required
                        value={formData.clientProfile}
                        onChange={handleChange}
                        placeholder="Ex: Empresas de médio porte do setor de varejo, com faturamento entre R$ 1-10 milhões/ano..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientLocation" className="block text-sm font-medium text-gray-700 mb-2">
                        Onde seus clientes estão localizados? *
                      </label>
                      <Input
                        id="clientLocation"
                        name="clientLocation"
                        type="text"
                        required
                        value={formData.clientLocation}
                        onChange={handleChange}
                        placeholder="Ex: Principalmente São Paulo e Rio de Janeiro"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientPainPoints" className="block text-sm font-medium text-gray-700 mb-2">
                        Quais são as principais dores dos seus clientes? *
                      </label>
                      <Textarea
                        id="clientPainPoints"
                        name="clientPainPoints"
                        required
                        value={formData.clientPainPoints}
                        onChange={handleChange}
                        placeholder="Ex: Dificuldade em controlar estoque, perda de vendas por falta de produtos, processos manuais que geram erros..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                </Card>

                {/* Canais de Comunicação */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-3">
                    <Globe className="w-7 h-7 text-[#5b3cc4]" />
                    Seus Canais de Comunicação
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    Informe os links das suas redes sociais para que possamos analisar sua presença digital automaticamente.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="instagramUrl" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </label>
                      <Input
                        id="instagramUrl"
                        name="instagramUrl"
                        type="url"
                        value={formData.instagramUrl}
                        onChange={handleChange}
                        placeholder="https://instagram.com/suaempresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="facebookUrl" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </label>
                      <Input
                        id="facebookUrl"
                        name="facebookUrl"
                        type="url"
                        value={formData.facebookUrl}
                        onChange={handleChange}
                        placeholder="https://facebook.com/suaempresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </label>
                      <Input
                        id="linkedinUrl"
                        name="linkedinUrl"
                        type="url"
                        value={formData.linkedinUrl}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/company/suaempresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Site/Blog
                      </label>
                      <Input
                        id="websiteUrl"
                        name="websiteUrl"
                        type="url"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        placeholder="https://seusite.com.br"
                      />
                    </div>

                    <div>
                      <label htmlFor="otherChannels" className="block text-sm font-medium text-gray-700 mb-2">
                        Outros canais (WhatsApp Business, TikTok, etc.)
                      </label>
                      <Textarea
                        id="otherChannels"
                        name="otherChannels"
                        value={formData.otherChannels}
                        onChange={handleChange}
                        placeholder="Liste outros canais que você utiliza..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </Card>

                {/* Processos Internos */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-3">
                    <TrendingUp className="w-7 h-7 text-[#5b3cc4]" />
                    Processos e Operação
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="timeConsumingProcesses" className="block text-sm font-medium text-gray-700 mb-2">
                        Quais processos consomem mais tempo da sua equipe? *
                      </label>
                      <Textarea
                        id="timeConsumingProcesses"
                        name="timeConsumingProcesses"
                        required
                        value={formData.timeConsumingProcesses}
                        onChange={handleChange}
                        placeholder="Ex: Atendimento ao cliente, emissão de propostas, controle de estoque, relatórios manuais..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="manualTasks" className="block text-sm font-medium text-gray-700 mb-2">
                        Quais tarefas ainda são feitas manualmente? *
                      </label>
                      <Textarea
                        id="manualTasks"
                        name="manualTasks"
                        required
                        value={formData.manualTasks}
                        onChange={handleChange}
                        placeholder="Ex: Envio de orçamentos, follow-up de clientes, agendamento de reuniões, postagens em redes sociais..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </Card>

                {/* Objetivos */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
                    Objetivos de Crescimento
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-700 mb-2">
                        Faturamento mensal aproximado *
                      </label>
                      <select
                        id="monthlyRevenue"
                        name="monthlyRevenue"
                        required
                        value={formData.monthlyRevenue}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5b3cc4]"
                      >
                        <option value="">Selecione</option>
                        <option value="0-10k">Até R$ 10 mil</option>
                        <option value="10k-50k">R$ 10 mil - R$ 50 mil</option>
                        <option value="50k-100k">R$ 50 mil - R$ 100 mil</option>
                        <option value="100k-500k">R$ 100 mil - R$ 500 mil</option>
                        <option value="500k+">Acima de R$ 500 mil</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="growthGoals" className="block text-sm font-medium text-gray-700 mb-2">
                        Quais são seus objetivos de crescimento para os próximos 12 meses? *
                      </label>
                      <Textarea
                        id="growthGoals"
                        name="growthGoals"
                        required
                        value={formData.growthGoals}
                        onChange={handleChange}
                        placeholder="Ex: Aumentar faturamento em 50%, reduzir custos operacionais em 30%, expandir para novos mercados..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="desiredResults" className="block text-sm font-medium text-gray-700 mb-2">
                        O que você espera alcançar com IA? *
                      </label>
                      <Textarea
                        id="desiredResults"
                        name="desiredResults"
                        required
                        value={formData.desiredResults}
                        onChange={handleChange}
                        placeholder="Ex: Automatizar atendimento, melhorar conversão de vendas, reduzir tempo gasto em tarefas repetitivas..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </Card>

                {/* Botão de Envio */}
                <div className="bg-gradient-to-r from-[#5b3cc4] to-[#7c5ce0] p-8 rounded-lg text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Pronto para descobrir o potencial da IA no seu negócio?
                  </h3>
                  <p className="text-purple-100 mb-6">
                    Após enviar, nossa IA analisará suas informações e você receberá um diagnóstico completo em até 24 horas.
                  </p>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitMutation.isPending}
                    className="bg-[#ffd600] hover:bg-[#e6c200] text-black font-bold py-7 px-12 text-lg rounded-lg shadow-lg transition-all"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando Diagnóstico...
                      </>
                    ) : (
                      "Enviar Diagnóstico Completo"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

