/**
 * Serviço de integração com Google Calendar API
 * 
 * Para usar este serviço, você precisará:
 * 1. Criar projeto no Google Cloud Console
 * 2. Ativar Google Calendar API
 * 3. Criar credenciais OAuth 2.0
 * 4. Obter refresh token
 * 
 * Documentação: https://developers.google.com/calendar/api/guides/overview
 */

interface CalendarConfig {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  redirectUri: string;
}

interface CreateEventParams {
  summary: string; // Título do evento
  description: string; // Descrição
  startTime: Date; // Data/hora início
  endTime: Date; // Data/hora fim
  attendeeEmail: string; // Email do participante
  attendeeName: string; // Nome do participante
}

interface AvailableSlot {
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  datetime: Date;
}

export class CalendarService {
  private config: CalendarConfig;
  private accessToken: string | null = null;

  constructor() {
    // Configurações do Google Calendar API
    // IMPORTANTE: Adicione estas variáveis de ambiente no arquivo .env
    this.config = {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN || "",
      redirectUri: process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/auth/google/callback",
    };
  }

  /**
   * Verifica se o serviço está configurado
   */
  isConfigured(): boolean {
    return !!(this.config.clientId && this.config.clientSecret && this.config.refreshToken);
  }

  /**
   * Obtém access token usando refresh token
   */
  private async getAccessToken(): Promise<string | null> {
    if (!this.isConfigured()) {
      console.warn("Google Calendar não configurado");
      return null;
    }

    try {
      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: this.config.clientId,
          client_secret: this.config.clientSecret,
          refresh_token: this.config.refreshToken,
          grant_type: "refresh_token",
        }),
      });

      if (!response.ok) {
        console.error("Erro ao obter access token");
        return null;
      }

      const data = await response.json();
      this.accessToken = data.access_token;
      return this.accessToken;
    } catch (error) {
      console.error("Erro ao obter access token:", error);
      return null;
    }
  }

  /**
   * Cria evento no Google Calendar
   */
  async createEvent(params: CreateEventParams): Promise<string | null> {
    const token = await this.getAccessToken();
    if (!token) return null;

    try {
      const event = {
        summary: params.summary,
        description: params.description,
        start: {
          dateTime: params.startTime.toISOString(),
          timeZone: "America/Sao_Paulo",
        },
        end: {
          dateTime: params.endTime.toISOString(),
          timeZone: "America/Sao_Paulo",
        },
        attendees: [
          {
            email: params.attendeeEmail,
            displayName: params.attendeeName,
          },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 }, // 1 dia antes
            { method: "popup", minutes: 30 }, // 30 min antes
          ],
        },
        conferenceData: {
          createRequest: {
            requestId: `meet-${Date.now()}`,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      };

      const response = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Erro ao criar evento:", error);
        return null;
      }

      const result = await response.json();
      console.log("Evento criado com sucesso:", result.htmlLink);
      return result.htmlLink; // Retorna link do evento
    } catch (error) {
      console.error("Erro ao criar evento:", error);
      return null;
    }
  }

  /**
   * Busca horários disponíveis na agenda
   */
  async getAvailableSlots(daysAhead: number = 7): Promise<AvailableSlot[]> {
    const token = await this.getAccessToken();
    if (!token) return [];

    try {
      const now = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + daysAhead);

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?` +
        `timeMin=${now.toISOString()}&` +
        `timeMax=${endDate.toISOString()}&` +
        `singleEvents=true&` +
        `orderBy=startTime`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Erro ao buscar eventos");
        return [];
      }

      const data = await response.json();
      const busySlots = data.items || [];

      // Gerar slots disponíveis (Seg-Sex, 9h-18h, intervalos de 1h)
      const availableSlots: AvailableSlot[] = [];
      const workingHours = [9, 10, 11, 14, 15, 16, 17]; // Horários de trabalho

      for (let day = 0; day < daysAhead; day++) {
        const date = new Date();
        date.setDate(date.getDate() + day);
        
        // Pular fins de semana
        if (date.getDay() === 0 || date.getDay() === 6) continue;

        for (const hour of workingHours) {
          const slotTime = new Date(date);
          slotTime.setHours(hour, 0, 0, 0);

          // Verificar se o slot está ocupado
          const isOccupied = busySlots.some((event: any) => {
            const eventStart = new Date(event.start.dateTime || event.start.date);
            const eventEnd = new Date(event.end.dateTime || event.end.date);
            return slotTime >= eventStart && slotTime < eventEnd;
          });

          if (!isOccupied && slotTime > now) {
            availableSlots.push({
              date: slotTime.toISOString().split("T")[0],
              time: `${hour.toString().padStart(2, "0")}:00`,
              datetime: slotTime,
            });
          }
        }
      }

      return availableSlots;
    } catch (error) {
      console.error("Erro ao buscar slots disponíveis:", error);
      return [];
    }
  }

  /**
   * Gera URL de agendamento (Calendly-like)
   */
  generateSchedulingUrl(clientEmail: string, clientName: string): string {
    // Por enquanto, retorna URL do próprio site
    // TODO: Implementar página de agendamento interativa
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    const params = new URLSearchParams({
      email: clientEmail,
      name: clientName,
    });
    return `${baseUrl}/agendar?${params.toString()}`;
  }
}

// Exportar instância singleton
export const calendarService = new CalendarService();

