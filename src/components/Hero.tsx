"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/profile";

const phrases = [
  "Full Stack Developer",
  "AI Agent Builder",
  "Next.js / NestJS Engineer",
  "RAG & Data Warehouse Architect",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx % phrases.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), 1500);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIdx((i) => i + 1);
          }
        }
      },
      deleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[600px] rounded-full bg-purple-700/20 blur-[140px] pointer-events-none" />
      <div className="text-center fade-up">
        <p className="font-mono text-sm text-cyan-300/80 mb-4">
          {"// Hi, I'm"}
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="h-8 font-mono text-base sm:text-lg md:text-xl text-white/70">
          {text}
          <span className="cursor-blink text-purple-400">▍</span>
        </p>
        <p className="mt-6 max-w-xl mx-auto text-white/50">{profile.tagline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="glow-btn px-6 py-3 rounded-full text-sm font-semibold text-white"
          >
            View My Work
          </a>
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-chat"))
            }
            className="px-6 py-3 rounded-full text-sm font-semibold border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-colors"
          >
            ✦ Ask my AI Assistant
          </button>
        </div>
      </div>
    </section>
  );
}
