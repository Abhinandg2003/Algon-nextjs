import { SYSTEM_PROMPT } from "@/components/AI/systemPrompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// gemini-flash-lite-latest: fast and responds reliably on this key's tier.
// (gemini-flash-latest / gemini-3.8-flash accepted requests but never
// answered, which left the widget loading forever.) Override with
// GEMINI_MODEL in .env if you move to a different model or plan.
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-flash-lite-latest";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse`;

// If Gemini hasn't started replying by then, give up and tell the visitor,
// rather than leaving the chat spinning with no error.
const UPSTREAM_TIMEOUT_MS = 25000;

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

  // Abort only the wait for Gemini to START replying; once the stream is
  // flowing the timer is cleared so long answers aren't cut off.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

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
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timer);
    if (err?.name === "AbortError") {
      console.error(`[api/chat] Gemini (${GEMINI_MODEL}) did not respond within ${UPSTREAM_TIMEOUT_MS / 1000}s`);
      return json({ error: { message: "The assistant is taking too long to respond. Please try again in a moment." } }, 504);
    }
    console.error("[api/chat] Could not reach the Gemini API:", err);
    return json({ error: { message: "Could not reach the Gemini API." } }, 502);
  }
  clearTimeout(timer);

  if (!upstream.ok || !upstream.body) {
    // Pass Gemini's error body through so the widget can show its message.
    const text = await upstream.text();
    console.error(`[api/chat] Gemini (${GEMINI_MODEL}) error ${upstream.status}:`, text.slice(0, 500));
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
