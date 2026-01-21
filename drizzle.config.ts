import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/server/db/migrations",
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
});
