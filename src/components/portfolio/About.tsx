import heroPortrait from "@/assets/hero-portrait.jpg";
import { Download, MapPin, GraduationCap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionTitle>About Me</SectionTitle>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative">
          <div className="absolute -inset-4 border border-border" aria-hidden />
          <img
            src={heroPortrait}
            alt="Gulshan Kumar Kushwaha"
            width={1200}
            height={1600}
            loading="lazy"
            className="relative aspect-[3/4] w-full object-cover grayscale"
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold sm:text-4xl">
            We can turn data into <span className="text-primary">decisions</span>.
          </h3>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I'm an enthusiastic, growth-driven learner currently pursuing a Postgraduate
            Program in Data Science &amp; Analytics with GenAI, building hands-on skills in
            Excel, SQL, Python, Statistics, and Power BI.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I bring real-world operations experience — handling live problems, coordinating
            teams, and driving process efficiency — and now apply that same structured,
            results-oriented mindset to data-driven decision-making.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <GraduationCap size={16} className="text-primary" />
              <span>Imarticus Learning — PG in Data Science &amp; Analytics with GenAI (2026–Present)</span>
            </div>
          </div>

          <a
            href="/Gulshan_Kumar_Kushwaha_Resume.pdf"
            download
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Download size={16} /> Download My CV
          </a>
        </div>
      </div>
    </section>
  );
}
