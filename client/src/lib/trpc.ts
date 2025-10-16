import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../server/routers";
import superjson from "superjson";

function getBaseUrl( ) {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Vercel auto-populates this
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // In a local dev environment
  return `http://localhost:4000`;
}

export const trpc = createTRPCReact<AppRouter>( );

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${getBaseUrl( )}/api/trpc`,
      transformer: superjson,
    }),
  ],
});
