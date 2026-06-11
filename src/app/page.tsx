import ParticleBackground from "@/components/ParticleBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Skills, Experience, Projects, Contact } from "@/components/Sections";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main>
      <ParticleBackground />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ChatWidget />
    </main>
  );
}
