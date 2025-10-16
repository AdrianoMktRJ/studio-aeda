import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createFormSubmission } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Router para submissões de formulários
  forms: router({
    submitDiagnostico: publicProcedure
      .input(
        z.object({
          name: z.string(),
          email: z.string().email(),
          phone: z.string(),
          company: z.string(),
          employees: z.string(),
          challenge: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        // Gerar ID único
        const id = `diag_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        // Salvar no banco de dados
        await createFormSubmission({
          id,
          type: "diagnostico",
          name: input.name,
          email: input.email,
          phone: input.phone,
          company: input.company,
          employees: input.employees,
          challenge: input.challenge,
          message: null,
        });

        // Enviar notificação ao proprietário
        const message = `📊 **Novo Diagnóstico Solicitado**\n\n` +
          `👤 **Nome:** ${input.name}\n` +
          `📧 **Email:** ${input.email}\n` +
          `📱 **Telefone:** ${input.phone}\n` +
          `🏭 **Empresa:** ${input.company}\n` +
          `👥 **Funcionários:** ${input.employees}\n` +
          `🎯 **Desafio:** ${input.challenge}`;

        await notifyOwner({
          title: "📊 Novo Diagnóstico - Studio AEDA",
          content: message,
        });

        return { success: true, id };
      }),

    submitContato: publicProcedure
      .input(
        z.object({
          name: z.string(),
          email: z.string().email(),
          phone: z.string().optional(),
          message: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        // Gerar ID único
        const id = `cont_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        // Salvar no banco de dados
        await createFormSubmission({
          id,
          type: "contato",
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          message: input.message,
          company: null,
          employees: null,
          challenge: null,
        });

        // Enviar notificação ao proprietário
        const message = `💬 **Novo Contato Recebido**\n\n` +
          `👤 **Nome:** ${input.name}\n` +
          `📧 **Email:** ${input.email}\n` +
          `${input.phone ? `📱 **Telefone:** ${input.phone}\n` : ""}` +
          `📝 **Mensagem:** ${input.message}`;

        await notifyOwner({
          title: "💬 Novo Contato - Studio AEDA",
          content: message,
        });

        return { success: true, id };
      }),
  }),
});

export type AppRouter = typeof appRouter;
