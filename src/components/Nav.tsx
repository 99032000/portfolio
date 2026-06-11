"use client";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-[#050510]/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm tracking-widest">
          <span className="gradient-text font-bold">DAMON</span>
          <span className="text-white/40">.dev</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
