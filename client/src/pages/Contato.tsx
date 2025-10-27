import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitMutation = trpc.forms.submitContato.useMutation({
    onSuccess: () => {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve.",
      });
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    },
    onError: (error) => {
      toast.error("Erro ao enviar mensagem", {
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "s.aedadigital@gmail.com",
      link: "mailto:s.aedadigital@gmail.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "+55 (83) 99375-1326",
      link: "https://wa.me/5583993751326",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h às 18h",
      link: null,
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "João Pessoa, PB - Brasil",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#0f2847] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Estamos prontos para ajudar sua empresa a crescer com inteligência artificial
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1e3a8a]">
                Solicite seu Diagnóstico Gratuito
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato para agendar 
                uma análise gratuita dos seus processos.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full"
                  />
                </div>

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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente como podemos ajudar sua empresa a crescer com IA..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitMutation.isPending}
                  className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a] text-white font-semibold py-6 text-lg rounded-lg shadow-md transition-all"
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1e3a8a]">
                Outras Formas de Contato
              </h2>
              <p className="text-gray-600 mb-8">
                Prefere falar diretamente conosco? Escolha a melhor forma de contato:
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#1e3a8a]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1e3a8a] mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA WhatsApp */}
              <div className="mt-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Prefere WhatsApp?</h3>
                <p className="mb-4 text-green-50">
                  Fale diretamente com nossa equipe e tire suas dúvidas em tempo real.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-white hover:bg-gray-100 text-green-600 font-semibold py-6"
                  asChild
                >
                  <a
                    href="https://wa.me/5583993751326"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

