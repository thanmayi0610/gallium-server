import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import betterAuthServerClient from "./integrations/better-auth";

const allRoutes = new Hono();

allRoutes.use(
  cors({
    origin: "http://localhost:4000",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

allRoutes.on(["GET", "POST"], "/api/auth/**", (context) => {
  return betterAuthServerClient.handler(context.req.raw);
});

allRoutes.get("", (context) => {
  return context.json({ message: "Hello, World" }, 200);
});

serve(allRoutes, ({ port }) => {
  console.log(`\tRunning @ http://localhost:${port}`);
});





