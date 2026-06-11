# Damon — AI Portfolio

Personal portfolio with a dark futuristic AI design and a built-in AI chat assistant (Gemini) that answers questions about Damon's skills and experience.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Gemini API (streaming)

## Setup

```bash
# 1. Fresh install (required first time — node_modules was installed on Linux)
rm -rf node_modules && npm install

# 2. Add your API key
cp .env.local.example .env.local
# edit .env.local and set GEMINI_API_KEY

# 3. Run
npm run dev
```

Open http://localhost:3000

## AI Chat

- UI: `src/components/ChatWidget.tsx` — floating widget, streaming responses, suggestion chips
- API: `src/app/api/chat/route.ts` — edge route calling Gemini `streamGenerateContent` (SSE → plain-text stream)
- Persona/grounding: `src/lib/profile.ts` — edit `chatSystemPrompt` and `profile` to update both the site content and what the assistant knows

The key works with Google AI Studio keys or Vertex AI express-mode keys. To use full Vertex AI (service account), swap the fetch URL in `route.ts` to the Vertex endpoint and add OAuth — the rest is unchanged.

## Deploy (Vercel)

```bash
vercel
```

Then add `GEMINI_API_KEY` in Project → Settings → Environment Variables.

## Customise

- Profile data, experience, projects: `src/lib/profile.ts`
- Colors/effects: `src/app/globals.css` (`--accent`, `--accent2`)
- Sections: `src/components/Sections.tsx`
