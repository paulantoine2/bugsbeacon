import {
  buildExceptionId,
  buildExeptionFingerprint,
} from "@/lib/edge-runtime/utils";
import { postEventsToTinyBird } from "@/lib/tinybird";
import { ProcessedEvent, ingestSchema } from "@/lib/validations/ingest";
import { Database } from "@/types_db";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UAParser } from "ua-parser-js";
import { z } from "zod";

export const runtime = "edge";

if (process.env.NEXT_PUBLIC_SUPABASE_URL === undefined) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is not defined!");
}

if (process.env.SUPABASE_SERVICE_KEY === undefined) {
  throw new Error("SUPABASE_SERVICE_KEY is not defined!");
}

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export async function POST(request: NextRequest) {
  try {
    const projectKey = request.headers.get("Project-Key");
    const userAgent = request.headers.get("User-Agent");

    if (!projectKey)
      return NextResponse.json(
        { success: false, message: "Project-Key is required" },
        { status: 400 }
      );

    const { data, error } = await supabase
      .from("project_key")
      .select()
      .eq("key", projectKey)
      .single();

    if (error)
      return NextResponse.json(
        { success: false, message: "service unavailable" },
        { status: 500 }
      );

    const project_id = data?.project_id;

    if (!project_id)
      return NextResponse.json(
        { success: false, message: "invalid project_key" },
        { status: 401 }
      );

    const json = await request.json();
    const body = ingestSchema.parse(json);

    const uaParser = new UAParser(userAgent || "");

    const processedEvents: ProcessedEvent[] = body.events.map((event) => ({
      ...event,
      project_id: project_id,
      version: body.version,
      env: body.env,
      fingerprint: buildExeptionFingerprint(event.exception),
      id: buildExceptionId(),
      browser: uaParser.getBrowser(),
      engine: uaParser.getEngine(),
    }));

    postEventsToTinyBird(processedEvents);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "invalid payload" },
        { status: 422 }
      );
    }
  }
}
