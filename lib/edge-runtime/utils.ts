import { z } from "zod";
import { Exception } from "../validations/ingest";
import { v5 as uuidv5 } from "uuid";
import { v4 as uuidv4 } from "uuid";

export function isValidBody<T extends Record<string, unknown>>(
  body: any,
  bodySchema: z.ZodType<T>
): body is T {
  const safeParseOut = bodySchema.safeParse(body);
  if ("error" in safeParseOut) {
    console.error(
      "Error parsing request body: " + safeParseOut.error.toString()
    );
  }
  return safeParseOut.success;
}

const FINGERPRINT_NAMESPACE = "7b07e053-ad88-45a3-aa69-d52a0af98725";

export function buildExeptionFingerprint(exception: Exception): string {
  return uuidv5(
    exception.name +
      exception.message +
      exception.stacktrace
        .map((frame) => frame.filename + frame.function)
        .join(""),
    FINGERPRINT_NAMESPACE
  );
}

export function buildExceptionId(): string {
  return uuidv4();
}
