import { z } from "zod";

export const users = {
  id: "serial",
  username: "text",
  password: "text",
};

export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users;
