import heroPortrait from "@/assets/hero-portrait.jpg";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt=""
          width={1200}
          height={1600}
          className="h-full w-full object-cover object-[center_20%] opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center lg:px-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio — Data Analyst
        </p>
        <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-[clamp(4rem,14vw,10rem)]">
          Gulshan<span className="text-primary">.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
          I'm Gulshan Kumar Kushwaha, a Data Analyst turning raw data into actionable
          insights and business decisions — based in Hyderabad, India.
        </p>
        <p className="mt-4 text-sm font-medium tracking-widest text-muted-foreground">
          EXCEL · SQL · PYTHON · STATISTICS · POWER BI · ML · DL · GENAI
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_-8px_var(--accent-red)]"
          >
            View Projects
          </button>
          <a
            href="/Gulshan_Kumar_Kushwaha_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:border-foreground hover:bg-foreground/5"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
