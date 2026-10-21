import { SYSTEM_PROMPT } from "@/components/AI/systemPrompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GEMINI_MODEL = "gemini-flash-latest";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse`;

const MAX_MESSAGES = 20;
const MAX_CHARS = 2000;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return json(
      { error: { message: "GEMINI_API_KEY is not set on the server. Add it to .env.local and restart." } },
      500
    );
  }

  let messages;
  try {
    ({ messages } = await request.json());
  } catch {
    return json({ error: { message: "Invalid JSON body." } }, 400);
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: { message: "`messages` must be a non-empty array." } }, 400);
  }

  // Basic abuse protection: cap history length and message size.
  const contents = messages.slice(-MAX_MESSAGES).map((m) => ({
    role: m?.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m?.content ?? "").slice(0, MAX_CHARS) }],
  }));

  let upstream;
  try {
    upstream = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Auth-format (AQ.) keys must be sent in this header, not as ?key=
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
      }),
    });
  } catch {
    return json({ error: { message: "Could not reach the Gemini API." } }, 502);
  }

  if (!upstream.ok || !upstream.body) {
    // Pass Gemini's error body through so the widget can show its message.
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: { "Content-Type": upstream.headers.get("Content-Type") ?? "application/json" },
    });
  }

  // Pipe the SSE stream straight through; the widget's existing parser is unchanged.
  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
