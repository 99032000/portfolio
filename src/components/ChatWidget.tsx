"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What does Damon do?",
  "What's his AI experience?",
  "Can I get his resume?",
];

// Render markdown links [text](url) and bare URLs as clickable links
function renderContent(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|https?:\/\/\S+)/g);
  return parts.map((part, i) => {
    const md = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (md) {
      return (
        <a
          key={i}
          href={md[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-300 hover:text-cyan-200"
        >
          {md[1]}
        </a>
      );
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-300 hover:text-cyan-200 break-all"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Damon Chen's AI assistant. Ask me anything about his skills, experience or projects — in English or 中文. You can also grab his [resume](/resume.pdf).",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput("");
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || "Request failed");
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const current = acc;
        setMessages((m) => [
          ...m.slice(0, -1),
          { role: "assistant", content: current },
        ]);
      }
      if (!acc) throw new Error("Empty response");
    } catch (e) {
      setMessages((m) => [
        ...m.slice(0, -1),
        {
          role: "assistant",
          content: `⚠️ ${e instanceof Error ? e.message : "Something went wrong."} Please try again.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glow-btn flex items-center justify-center text-2xl shadow-lg"
      >
        {open ? "✕" : "✦"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-3rem))] h-[520px] glass !rounded-2xl flex flex-col overflow-hidden shadow-2xl fade-up">
          <div className="px-4 py-3 border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-cyan-500/20">
            <p className="font-semibold text-sm">
              ✦ Damon&apos;s AI Assistant
            </p>
            <p className="text-xs text-white/50">Powered by Gemini</p>
          </div>

          <div
            ref={scrollRef}
            className="chat-scroll flex-1 overflow-y-auto p-4 space-y-3"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap rounded-2xl ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-br-sm"
                      : "bg-white/8 border border-white/10 text-white/85 rounded-bl-sm"
                  }`}
                >
                  {m.content ? (
                    renderContent(m.content)
                  ) : (
                    <span className="flex gap-1 py-1">
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
                    </span>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="p-3 border-t border-white/10 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Damon..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm outline-none focus:border-purple-500/60 placeholder:text-white/30"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="glow-btn w-9 h-9 rounded-full text-sm disabled:opacity-40 shrink-0"
              aria-label="Send"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}
