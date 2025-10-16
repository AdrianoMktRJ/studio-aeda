import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Zap, DollarSign, Target, TrendingUp, CheckCircle, Sparkles } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const results = [
    {
      icon: Zap,
      title: "Aumente Sua Produtividade",
      description: "Automatize tarefas repetitivas e foque no que realmente importa",
    },
    {
      icon: DollarSign,
      title: "Reduza Custos Operacionais",
      description: "Otimize processos e elimine desperdícios com inteligência artificial",
    },
    {
      icon: Target,
      title: "Atraia Clientes Qualificados",
      description: "Estratégias inteligentes de tráfego pago para máximo ROI",
    },
    {
      icon: TrendingUp,
      title: "Tome Decisões Claras",
      description: "Dados transformados em insights acionáveis para seu negócio",
    },
  ];

  const commitments = [
    {
      icon: CheckCircle,
      title: "Clareza Total",
      description:
        "Você sempre saberá o que está sendo feito e por quê. Nossos relatórios são feitos para serem compreendidos, não para confundir.",
    },
    {
      icon: TrendingUp,
      title: "Foco no ROI",
      description:
        "Nossa primeira pergunta sempre será sobre seu retorno de investimento. A tecnologia é o meio, seu lucro é o fim.",
    },
    {
      icon: Sparkles,
      title: "Soluções, Não Pacotes",
      description:
        "Não vendemos pacotes prontos. Escutamos seu desafio e desenhamos a solução exata que você precisa, sob medida para seu crescimento.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section com fundo visual de IA */}
      <section className="relative bg-gradient-to-br from-[#5b3cc4] via-[#5b3cc4] to-[#4a2ea3] text-white pt-32 pb-20 overflow-hidden">
        {/* Elementos visuais de IA - linhas e formas sutis */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute top-20 right-10 w-96 h-96" viewBox="0 0 400 400">
            <path
              d="M 50 200 Q 150 100 250 200 T 450 200"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-orange-400"
            />
            <path
              d="M 100 250 Q 200 150 300 250 T 500 250"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-pink-400"
            />
          </svg>
          
          {/* Círculos decorativos */}
          <div className="absolute top-40 right-32 w-32 h-32 rounded-full border-2 border-blue-400"></div>
          <div className="absolute top-60 right-20 w-20 h-20 rounded-full border-2 border-[#ffd600]"></div>
          
          {/* Padrão de grade sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Gestão inteligente com IA: mais produtividade, menos complexidade
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Transformamos IA em clareza: soluções sob medida para empresas que querem crescer rápido.
              </p>
              
              <Button
                size="lg"
                className="bg-[#ffd600] hover:bg-[#ffd600] text-gray-900 font-semibold px-10 py-7 text-lg rounded-lg shadow-lg transition-all"
                asChild
              >
                <Link href="/diagnostico">
                  Descubra 3 Oportunidades de IA no Seu Negócio
                </Link>
              </Button>
              
              <p className="mt-6 text-sm text-purple-200">
                Analisamos seus processos e identificamos 3 pontos de automação para reduzir custos.
              </p>
            </div>

            {/* Imagem da Coruja com elementos visuais */}
            <div className="relative flex items-center justify-center">
              {/* Borda decorativa com gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-[#5b3cc4] rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Coruja sem borda */}
              <div className="relative">
                <img 
                  src="/owl-aeda.png" 
                  alt="Coruja AEDA" 
                  className="w-80 h-80 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados que Geramos com IA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            O que você ganha trabalhando com IA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <result.icon className="w-6 h-6 text-[#5b3cc4]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Compromisso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Nosso Compromisso com Seus Resultados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <commitment.icon className="w-8 h-8 text-[#5b3cc4]" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{commitment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-[#5b3cc4] to-[#4a2ea3] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Vamos descobrir juntos o potencial da IA no seu negócio?
          </h2>
          
          <Button
            size="lg"
            className="bg-[#ffd600] hover:bg-[#ffd600] text-gray-900 font-semibold px-10 py-7 text-lg rounded-lg shadow-lg transition-all"
            asChild
          >
            <Link href="/diagnostico">Quero Meu Diagnóstico Gratuito</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

