/**
 * Serviço de integração com WhatsApp Business API
 * 
 * Para usar este serviço, você precisará configurar:
 * 1. Conta Meta Business verificada
 * 2. Token de acesso da API do WhatsApp
 * 3. ID do número de telefone verificado
 * 
 * Documentação: https://developers.facebook.com/docs/whatsapp/cloud-api
 */

interface WhatsAppConfig {
  accessToken: string;
  phoneNumberId: string;
  apiVersion: string;
}

interface SendMessageParams {
  to: string; // Número no formato internacional: +5583993751326
  message: string;
  templateName?: string; // Nome do template aprovado (opcional)
}

export class WhatsAppService {
  private config: WhatsAppConfig;
  private baseUrl: string;

  constructor() {
    // Configurações da API do WhatsApp Business
    // IMPORTANTE: Adicione estas variáveis de ambiente no arquivo .env
    this.config = {
      accessToken: process.env.WHATSAPP_ACCESS_TOKEN || "",
      phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "",
      apiVersion: "v18.0",
    };

    this.baseUrl = `https://graph.facebook.com/${this.config.apiVersion}/${this.config.phoneNumberId}/messages`;
  }

  /**
   * Verifica se o serviço está configurado corretamente
   */
  isConfigured(): boolean {
    return !!(this.config.accessToken && this.config.phoneNumberId);
  }

  /**
   * Envia mensagem de texto simples
   */
  async sendTextMessage({ to, message }: SendMessageParams): Promise<boolean> {
    if (!this.isConfigured()) {
      console.warn("WhatsApp não configurado. Mensagem não enviada:", message);
      return false;
    }

    try {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.config.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: to.replace(/\D/g, ""), // Remove caracteres não numéricos
          type: "text",
          text: {
            body: message,
          },
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Erro ao enviar mensagem WhatsApp:", error);
        return false;
      }

      const result = await response.json();
      console.log("Mensagem WhatsApp enviada com sucesso:", result);
      return true;
    } catch (error) {
      console.error("Erro ao enviar mensagem WhatsApp:", error);
      return false;
    }
  }

  /**
   * Envia mensagem de agradecimento após primeiro formulário
   */
  async sendThankYouMessage(to: string, name: string): Promise<boolean> {
    const message = `Olá ${name}! 👋\n\n` +
      `Obrigado por solicitar um diagnóstico gratuito com o Studio AEDA Digital! 🦉\n\n` +
      `Para criar um diagnóstico personalizado e preciso, precisamos conhecer melhor seu negócio.\n\n` +
      `📋 Por favor, preencha nosso formulário detalhado:\n` +
      `https://studio-aeda-updated.com/diagnostico-detalhado\n\n` +
      `Levará apenas 5 minutos e você receberá:\n` +
      `✅ Análise completa das suas redes sociais\n` +
      `✅ Identificação de oportunidades de automação\n` +
      `✅ Relatório com potencial de crescimento\n` +
      `✅ Agendamento de reunião para apresentação\n\n` +
      `Qualquer dúvida, estou à disposição! 😊`;

    return this.sendTextMessage({ to, message });
  }

  /**
   * Envia link de agendamento após diagnóstico detalhado
   */
  async sendSchedulingLink(to: string, name: string, schedulingUrl: string): Promise<boolean> {
    const message = `Olá ${name}! 🎉\n\n` +
      `Seu diagnóstico está pronto! 📊\n\n` +
      `Nossa IA analisou suas informações e identificou oportunidades incríveis de crescimento para ${name}.\n\n` +
      `Vamos agendar uma reunião para apresentar:\n` +
      `✅ Análise completa da sua presença digital\n` +
      `✅ Situação atual vs potencial com IA\n` +
      `✅ Plano de ação personalizado\n` +
      `✅ Estimativa de ROI\n\n` +
      `📅 Escolha o melhor horário:\n` +
      `${schedulingUrl}\n\n` +
      `Estou ansioso para mostrar como podemos transformar seu negócio! 🚀`;

    return this.sendTextMessage({ to, message });
  }

  /**
   * Envia lembrete de reunião agendada
   */
  async sendMeetingReminder(to: string, name: string, meetingDate: string, meetingTime: string): Promise<boolean> {
    const message = `Olá ${name}! 📅\n\n` +
      `Lembrete da nossa reunião:\n\n` +
      `📆 Data: ${meetingDate}\n` +
      `🕐 Horário: ${meetingTime}\n\n` +
      `Vamos apresentar seu diagnóstico completo e mostrar como a IA pode transformar seu negócio! 🚀\n\n` +
      `Nos vemos em breve! 😊`;

    return this.sendTextMessage({ to, message });
  }
}

// Exportar instância singleton
export const whatsappService = new WhatsAppService();

