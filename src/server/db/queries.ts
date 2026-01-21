import { type D1Database } from "@cloudflare/workers-types";
import { getDb } from "./db";
import { subscribers, type NewSubscriber } from "./schema";

export const insertSubscriber = async (
  d1Database: D1Database,
  newSubscriber: NewSubscriber,
) => {
  const db = getDb(d1Database);
  const [result] = await db
    .insert(subscribers)
    .values(newSubscriber)
    .returning();
  return result;
};
