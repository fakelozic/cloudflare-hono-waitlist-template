import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, check } from "drizzle-orm/sqlite-core";

export const subscribers = sqliteTable(
  "subscribers",
  {
    id: integer("id").primaryKey(),
    email: text("email").notNull().unique(),
    createdAt: text("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: text("updated_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    trafficSource: text("traffic_source"),
    device: text("device"),
    emailVerified: text("email_verified").default(sql`(CURRENT_TIMESTAMP)`),
    unsubscribed: text("unsubscribed").default(sql`(CURRENT_TIMESTAMP)`),
    confirmationToken: text("confirmation_token"),
  },
  (table) => [check("email", sql`${table.email} LIKE '%@%.%'`)],
);

export type NewSubscriber = typeof subscribers.$inferInsert;
