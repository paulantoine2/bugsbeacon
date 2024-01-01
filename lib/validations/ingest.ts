import * as z from "zod";

export const exceptionSchema = z.object({
  handled: z.boolean(),
  crash: z.boolean(),
  name: z.string(),
  message: z.string(),
  stacktrace: z.array(
    z.object({
      colno: z.number(),
      lineno: z.number(),
      filename: z.string(),
      function: z.string(),
    })
  ),
});

export const eventSchema = z.object({
  timestamp: z.string(),
  exception: exceptionSchema,
});

export const ingestSchema = z.object({
  version: z.string(),
  env: z.string(),
  events: z.array(eventSchema),
});

export type Exception = z.infer<typeof exceptionSchema>;
export type Event = z.infer<typeof eventSchema>;

export type ProcessedEvent = Event & {
  id: string;
  project_id: string;
  version: string;
  env: string;
  fingerprint: string;
  browser: {
    name: string | undefined;
    version: string | undefined;
  };
  engine: {
    name: string | undefined;
    version: string | undefined;
  };
};
