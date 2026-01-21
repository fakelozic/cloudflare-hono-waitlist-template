import { Hono } from "hono";
import { cors } from "hono/cors";
const app = new Hono().get("/api/health", (c) => c.json({ status: "Healthy" }));

export default app;

export type AppType = typeof app;
