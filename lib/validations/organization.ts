import * as z from "zod";

export const organizationCreateSchema = z.object({
  name: z.string().min(3).max(50),
});
