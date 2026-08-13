import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Initiatives } from "@/components/sections/Initiatives";
import { Awards } from "@/components/sections/Awards";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-slate-100 relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Initiatives />
      <Awards />
      <VideoShowcase />
      <ContactFooter />
    </main>
  );
}
