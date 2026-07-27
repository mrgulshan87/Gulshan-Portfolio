import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { CertificationsEducation } from "@/components/portfolio/CertificationsEducation";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";

const TITLE = "Gulshan Kumar Kushwaha — Data Analyst | BI & GenAI Analytics";
const DESC =
  "Portfolio of Gulshan Kumar Kushwaha — Data Analyst in Hyderabad. Excel, SQL, Python, Power BI and GenAI-powered analytics projects, experience and credentials.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute -top-1/4 left-1/4 h-[60vw] w-[60vw] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[50vw] w-[50vw] rounded-full bg-primary/5 blur-[100px]" />
      </div>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CertificationsEducation />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
