import { Award, GraduationCap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const CERTS = [
  "Introduction to Data Analysis — Alison",
  "Deloitte Australia - Data Analytics Job Simulation — Forage",
  "HackerRank SQL (Intermediate) — HackerRank",
  "HackerRank Python (Basic) — HackerRank",
  "Smart Coder (DSA) — Smart Interviews",
  "Programming Essentials in Python & C — Cisco",
  "Python 3.4.3 Training — IIT Bombay Spoken Tutorial",
  "Introduction to Artificial Intelligence — SimpliLearn",
  "Microsoft Azure AI Fundamentals — Microsoft",
  "Basics of Python & Cloud Computing — Infosys Springboard",
  "Merit Code Fusion Hackathon — Talentio",
];

const EDUCATION = [
  {
    school: "Imarticus Learning",
    degree: "PG Program in Data Science & Analytics with GenAI",
    period: "2026 — Present",
    location: "Hyderabad",
  },
  {
    school: "Vidya Jyothi Institute of Technology",
    degree: "B.Tech, Electronics & Communication Engineering — CGPA 7.2",
    period: "2021 — 2025",
    location: "Hyderabad",
  },
  {
    school: "Narayana Junior College",
    degree: "Telangana State Board (MPC) — CGPA 7.2",
    period: "2019 — 2021",
    location: "Hyderabad",
  },
];

export function CertificationsEducation() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionTitle>Credentials</SectionTitle>

      <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Award className="text-primary" size={20} />
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Certifications
            </h3>
          </div>
          <ul className="space-y-3">
            {CERTS.map((c) => (
              <li
                key={c}
                className="group flex items-start gap-3 border-l-2 border-border pl-4 py-2 transition-colors hover:border-primary"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span className="text-sm text-foreground/90">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" size={20} />
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Education
            </h3>
          </div>
          <ul className="space-y-6">
            {EDUCATION.map((e) => (
              <li key={e.school} className="border border-border bg-surface/60 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-bold">{e.school}</h4>
                  <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-primary">
                    {e.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{e.degree}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground/70">
                  {e.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
