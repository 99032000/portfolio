import { profile } from "@/lib/profile";

function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-cyan-300/80 mb-2">{`// ${tag}`}</p>
      <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">
        {title}
      </h2>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-14">
      <SectionTitle tag="about" title="About Me" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass p-8 md:col-span-2">
          <p className="text-white/70 leading-relaxed">
            I&apos;m a full stack developer with {profile.yearsExperience}+
            years of experience in e-commerce and startups, currently building
            at{" "}
            <span className="text-purple-300">{profile.currentRole.company}</span>
            , a women&apos;s fast-fashion brand. I work across the whole stack —
            TypeScript, Next.js, NestJS and Laravel on the web side; GCP, AWS
            and Vercel in the cloud — and I&apos;m deeply into AI engineering:
            Genkit pipelines, RAG, multi-modal AI, and AI-driven data discovery
            on BigQuery.
          </p>
          <p className="text-white/70 leading-relaxed mt-4">
            I hold a Bachelor of IT (Mobile Application Development), am an AWS
            Certified Solutions Architect, and speak English and Mandarin.
          </p>
        </div>
        <div className="glass p-8 font-mono text-sm space-y-3">
          <p>
            <span className="text-cyan-300">location:</span>{" "}
            <span className="text-white/70">{profile.location}</span>
          </p>
          <p>
            <span className="text-cyan-300">experience:</span>{" "}
            <span className="text-white/70">{profile.yearsExperience}+ years</span>
          </p>
          <p>
            <span className="text-cyan-300">languages:</span>{" "}
            <span className="text-white/70">{profile.languages.join(", ")}</span>
          </p>
          <p>
            <span className="text-cyan-300">education:</span>{" "}
            <span className="text-white/70">Bachelor of IT</span>
          </p>
          <p>
            <span className="text-cyan-300">certs:</span>{" "}
            <span className="text-white/70">AWS Solutions Architect</span>
          </p>
          <p>
            <span className="text-cyan-300">focus:</span>{" "}
            <span className="text-white/70">E-commerce × AI</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-14">
      <SectionTitle tag="skills" title="Tech Stack" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div key={group} className="glass p-6">
            <h3 className="font-semibold text-purple-300 mb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-14">
      <SectionTitle tag="experience" title="Work Experience" />
      <div className="relative border-l border-purple-500/30 ml-2 space-y-10">
        {profile.experience.map((job) => (
          <div key={job.company} className="pl-8 relative">
            <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            <div className="glass p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold">
                  {job.role}{" "}
                  <span className="text-purple-300">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-white/40">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-white/60">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-cyan-300 shrink-0">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-14">
      <SectionTitle tag="projects" title="Featured Work" />
      <div className="grid md:grid-cols-3 gap-6">
        {profile.projects.map((p) => {
          const images = "images" in p ? p.images : undefined;
          return (
            <div
              key={p.name}
              className="glass p-6 flex flex-col group relative overflow-hidden"
            >
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-white/60 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((t) => (
                  <span key={t} className="font-mono text-xs text-cyan-300/80">
                    {t}
                  </span>
                ))}
              </div>
              {images && (
                <>
                  <div className="absolute inset-0 rounded-2xl bg-[#0a0a18]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-3 flex flex-col">
                    <p className="font-mono text-[11px] text-cyan-300/80 mb-2 shrink-0">
                      {"// sample outputs"}
                    </p>
                    <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
                      {images.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={src}
                          src={src}
                          alt={`${p.name} sample ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top rounded-lg border border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 60}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 font-mono text-[10px] text-white/30 group-hover:opacity-0 transition-opacity">
                    hover ↗
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-14 text-center">
      <SectionTitle tag="contact" title="Get In Touch" />
      <p className="max-w-md mx-auto text-white/60 mb-8 -mt-4">
        Open to interesting projects and opportunities — especially at the
        intersection of e-commerce and AI.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="glow-btn inline-block max-w-full break-all px-8 py-3 rounded-full text-sm font-semibold text-white"
        >
          {profile.email}
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full text-sm font-semibold border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-colors"
        >
          ↓ Resume
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full text-sm font-semibold border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-16 font-mono text-xs text-white/30">
        © {new Date().getFullYear()} Damon — built with Next.js + Gemini
      </p>
    </section>
  );
}
