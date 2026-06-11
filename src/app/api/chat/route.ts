import { NextRequest } from "next/server";
import { chatSystemPrompt } from "@/lib/profile";

export const runtime = "edge";

const MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

// "vertex" = Vertex AI express mode (aiplatform.googleapis.com, ?key=)
// "studio" = Google AI Studio (generativelanguage.googleapis.com)
const PROVIDER = process.env.GEMINI_PROVIDER || "vertex";

function apiUrl(apiKey: string) {
  if (PROVIDER === "studio") {
    return `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse&key=${apiKey}`;
  }
  return `https://aiplatform.googleapis.com/v1/publishers/google/models/${MODEL}:streamGenerateContent?alt=sse&key=${apiKey}`;
}

type Message = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "GEMINI_API_KEY is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let messages: Message[];
  try {
    const body = await req.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) throw new Error();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Keep last 20 turns, cap message length
  const contents = messages.slice(-20).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content).slice(0, 4000) }],
  }));

  let upstream: Response;
  try {
    upstream = await fetch(apiUrl(apiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: chatSystemPrompt }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
      }),
    });
  } catch (e) {
    console.error("Gemini fetch failed:", e);
    return new Response(
      JSON.stringify({ error: "Could not reach the AI service" }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("Gemini error:", upstream.status, detail);
    const friendly =
      upstream.status === 429
        ? "The assistant has hit its usage limit. Please try again later, or email Damon directly."
        : "AI service unavailable";
    return new Response(JSON.stringify({ error: friendly }), {
      status: upstream.status === 429 ? 429 : 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Parse Gemini SSE and re-emit plain text chunks
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (!data || data === "[DONE]") continue;
            try {
              const json = JSON.parse(data);
              const parts: { text?: string; thought?: boolean }[] =
                json.candidates?.[0]?.content?.parts ?? [];
              const text = parts
                .filter((p) => p.text && !p.thought)
                .map((p) => p.text)
                .join("");
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              // ignore partial JSON
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
