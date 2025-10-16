import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Lightbulb, Eye, Users, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Sobre() {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscamos sempre as melhores e mais atuais soluções&nbsp;tecnológicas",
    },
    {
      icon: Eye,
      title: "Clareza",
      description: "Comunicação transparente e resultados&nbsp;compreensíveis",
    },
    {
      icon: Users,
      title: "Personalização",
      description: "Cada solução é única, desenhada para suas necessidades&nbsp;específicas",
    },
    {
      icon: Zap,
      title: "Produtividade",
      description: "Foco em otimizar processos e maximizar&nbsp;eficiência",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Comprometidos com o sucesso e expansão dos nossos&nbsp;clientes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5b3cc4] to-[#4a2ea3] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre o Studio AEDA Digital</h1>
          <p className="text-xl max-w-3xl mx-auto text-purple-100">
            Muito mais que uma agência: somos gestores de soluções inteligentes de IA. Nosso propósito 
            é tornar a inteligência artificial acessível e estratégica para empresas e&nbsp;profissionais.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Nossa História</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            O Studio AEDA Digital nasceu da percepção de que a inteligência artificial não deveria ser 
            um privilégio de grandes corporações. Fundada com a missão de democratizar o acesso a 
            tecnologias avançadas, nossa empresa se dedica a criar soluções personalizadas que realmente 
            fazem diferença no dia a dia dos nossos&nbsp;clientes.
          </p>
        </div>
      </section>

      {/* Nosso Propósito */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Nosso Propósito</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
            Acreditamos que a tecnologia deve servir às pessoas, e não o contrário. Por isso, desenvolvemos 
            soluções que não são apenas poderosas, mas também intuitivas e acessíveis. Nosso objetivo é 
            transformar complexidade em clareza, dados em insights e processos em&nbsp;resultados.
          </p>
          
          {/* Citação em destaque */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border-l-4 border-[#5b3cc4]">
            <div className="flex items-start gap-4">
              <span className="text-6xl text-[#5b3cc4] leading-none">"</span>
              <p className="text-xl italic text-gray-800 pt-4">
                Nossa missão é ser a ponte entre a inteligência artificial e o sucesso do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#5b3cc4]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Símbolo - A Coruja AEDA */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Texto */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Nosso Símbolo – A Coruja AEDA
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A coruja é universalmente reconhecida como símbolo de sabedoria, visão noturna e capacidade 
                de enxergar o que outros não conseguem. Nossa Coruja AEDA representa exatamente isso: a 
                habilidade de identificar oportunidades onde outros veem apenas dados.
              </p>
              
              {/* Citação em destaque */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ffd600]">
                <div className="flex items-start gap-4">
                  <span className="text-5xl text-[#ffd600] leading-none">"</span>
                  <p className="text-lg italic text-[#5b3cc4] pt-3">
                    A coruja enxerga onde outros não conseguem — clareza e inteligência digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem da Coruja */}
            <div className="flex items-center justify-center">
              <img 
                src="/owl-aeda.png" 
                alt="Coruja AEDA" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-[#5b3cc4] to-[#4a2ea3] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Descubra como podemos otimizar seus processos e aumentar sua produtividade
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#ffd600] hover:bg-[#ffd600] text-gray-900 font-semibold px-10 py-7 text-lg rounded-lg shadow-lg transition-all"
              asChild
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#5b3cc4] font-semibold px-10 py-7 text-lg rounded-lg transition-all"
              asChild
            >
              <Link href="/diagnostico">Diagnóstico Gratuito</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

