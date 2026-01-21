import { Hono } from "hono";
import { accessAuth } from "./middlewares/auth";
const app = new Hono()
  .use(accessAuth)
  .get("/api/health", (c) => c.json({ status: "Healthy" }));

export default app;

export type AppType = typeof app;
