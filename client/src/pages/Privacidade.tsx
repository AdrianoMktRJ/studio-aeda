import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Lock, Eye, FileText, Mail, AlertCircle } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5b3cc4] to-[#4a2ea3] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#ffd600]" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-purple-100">
              Seu direito à privacidade e proteção de dados é nossa prioridade
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introdução */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Compromisso com a LGPD</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                O <strong>Studio AEDA Digital</strong> está comprometido com a proteção dos seus dados pessoais e 
                com o cumprimento da <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Última atualização: <strong>16 de outubro de 2025</strong>
              </p>
            </div>

            {/* Seções */}
            <div className="space-y-10">
              
              {/* 1. Dados Coletados */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">1. Dados que Coletamos</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Coletamos apenas os dados necessários para prestar nossos serviços e melhorar sua experiência:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Dados de identificação:</strong> nome, e-mail, telefone</li>
                  <li><strong>Dados empresariais:</strong> nome da empresa, número de funcionários, setor de atuação</li>
                  <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas</li>
                  <li><strong>Dados de comunicação:</strong> mensagens enviadas através dos formulários de contato</li>
                </ul>
              </div>

              {/* 2. Finalidade */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">2. Como Usamos Seus Dados</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Utilizamos seus dados pessoais para as seguintes finalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Responder às suas solicitações de contato e diagnóstico</li>
                  <li>Prestar os serviços contratados</li>
                  <li>Enviar comunicações sobre nossos serviços (com seu consentimento)</li>
                  <li>Melhorar nosso site e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </div>

              {/* 3. Base Legal */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">3. Base Legal para Tratamento</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  O tratamento dos seus dados pessoais está fundamentado nas seguintes bases legais da LGPD:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Consentimento:</strong> ao preencher nossos formulários, você consente com o tratamento dos dados</li>
                  <li><strong>Execução de contrato:</strong> para prestar os serviços solicitados</li>
                  <li><strong>Legítimo interesse:</strong> para melhorar nossos serviços e comunicação</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> quando exigido por lei</li>
                </ul>
              </div>

              {/* 4. Compartilhamento */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">4. Compartilhamento de Dados</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. 
                  Seus dados podem ser compartilhados apenas nas seguintes situações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Com prestadores de serviços (hospedagem, e-mail) sob contrato de confidencialidade</li>
                  <li>Quando exigido por lei ou ordem judicial</li>
                  <li>Para proteção de direitos, segurança e propriedade</li>
                </ul>
              </div>

              {/* 5. Segurança */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">5. Segurança dos Dados</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra 
                  acesso não autorizado, perda, destruição ou alteração:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Criptografia de dados em trânsito (HTTPS/SSL)</li>
                  <li>Controle de acesso restrito aos dados</li>
                  <li>Backups regulares e seguros</li>
                  <li>Monitoramento contínuo de segurança</li>
                </ul>
              </div>

              {/* 6. Seus Direitos */}
              <div className="border-l-4 border-[#ffd600] pl-6 bg-yellow-50 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">6. Seus Direitos (LGPD)</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  De acordo com a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessá-los</li>
                  <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou incorretos</li>
                  <li><strong>Anonimização ou exclusão:</strong> solicitar a exclusão de dados desnecessários</li>
                  <li><strong>Portabilidade:</strong> solicitar a transferência de dados a outro fornecedor</li>
                  <li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer momento</li>
                  <li><strong>Oposição:</strong> opor-se ao tratamento de dados em certas situações</li>
                </ul>
              </div>

              {/* 7. Retenção */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">7. Tempo de Retenção</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais 
                  foram coletados, incluindo requisitos legais, contratuais ou regulatórios. Após esse período, 
                  os dados são excluídos ou anonimizados de forma segura.
                </p>
              </div>

              {/* 8. Cookies */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">8. Cookies e Tecnologias</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, 
                  analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar suas preferências 
                  de cookies através das configurações do seu navegador.
                </p>
              </div>

              {/* 9. Contato */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">9. Encarregado de Dados (DPO)</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade e 
                  o tratamento dos seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Studio AEDA Digital</p>
                  <p className="text-gray-600">E-mail: <a href="mailto:s.aedadigital@gmail.com" className="text-[#5b3cc4] hover:underline">s.aedadigital@gmail.com</a></p>
                  <p className="text-gray-600">WhatsApp: <a href="https://wa.me/5583993751326" className="text-[#5b3cc4] hover:underline">+55 (83) 99375-1326</a></p>
                </div>
              </div>

              {/* 10. Alterações */}
              <div className="border-l-4 border-[#5b3cc4] pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-[#5b3cc4]" />
                  <h3 className="text-2xl font-bold text-gray-900">10. Alterações na Política</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas 
                  práticas ou requisitos legais. Recomendamos que você revise esta página regularmente. 
                  A data da última atualização está indicada no início deste documento.
                </p>
              </div>

            </div>

            {/* CTA Final */}
            <div className="mt-16 bg-gradient-to-br from-[#5b3cc4] to-[#4a2ea3] text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Dúvidas sobre privacidade?</h3>
              <p className="mb-6 text-purple-100">
                Estamos à disposição para esclarecer qualquer questão sobre o tratamento dos seus dados.
              </p>
              <a
                href="/contato"
                className="inline-block bg-[#ffd600] hover:bg-[#ffd600] text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all"
              >
                Entre em Contato
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

