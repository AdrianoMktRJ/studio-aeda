import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    tipo: "construtora",
    mensagem: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      tipo: "construtora",
      mensagem: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Entre em Contato</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Vamos conversar sobre como podemos ajudar seu negócio a crescer com IA e automação.
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Mail className="w-12 h-12 text-[#f97316] mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">E-mail</h3>
              <a href="mailto:s.aedadigital@gmail.com" className="text-gray-600 hover:text-[#f97316]">
                s.aedadigital@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Phone className="w-12 h-12 text-[#f97316] mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">WhatsApp</h3>
              <a href="https://wa.me/5583993751326" className="text-gray-600 hover:text-[#f97316]">
                +55 (83) 99375-1326
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Clock className="w-12 h-12 text-[#f97316] mb-4" />
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Horário</h3>
              <p className="text-gray-600">Seg-Sex: 9h às 18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center">Agende uma Conversa</h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f97316]"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f97316]"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">Telefone *</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f97316]"
                  placeholder="(83) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">Empresa *</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f97316]"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">Você é? *</label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f97316]"
              >
                <option value="construtora">Construtora</option>
                <option value="advocacia">Escritório de Advocacia</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">Mensagem</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f97316]"
                placeholder="Conte-nos um pouco sobre seu negócio e seus desafios..."
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#f97316] hover:bg-[#b86105] text-white font-semibold py-6 rounded-lg transition-all text-lg inline-flex items-center justify-center gap-2"
            >
              Agendar Conversa
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <p className="text-center text-gray-600 mt-6 text-sm">
            * Campos obrigatórios. Responderemos em até 24 horas.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-[#1e3a8a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Prefere falar por WhatsApp?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Clique no botão abaixo e converse diretamente com nosso time.
          </p>
          <Button
            className="bg-[#f97316] hover:bg-[#b86105] text-white font-semibold px-12 py-6 rounded-lg shadow-md transition-all text-lg"
            asChild
          >
            <a href="https://wa.me/5583993751326" target="_blank" rel="noopener noreferrer">
              Abrir WhatsApp
            </a>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
