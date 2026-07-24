import { SectionTitle } from "./SectionTitle";

const ROLES = [
  {
    role: "Rider Shift In-Charge",
    company: "Zepto",
    bullets: [
      "Monitored real-time operational data to optimize delivery routes and rider allocation, improving on-time performance.",
      "Tracked performance metrics and resolved service issues to maintain high operational standards.",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "Country Delight",
    bullets: [
      "Analyzed recurring customer complaints and delivery data to identify process gaps and improve satisfaction.",
      "Coordinated with delivery personnel using tracking data to follow up on outstanding cases.",
    ],
  },
  {
    role: "Lead Generation Team Lead",
    company: "Leads Ark — Affiliate Marketing",
    bullets: [
      "Led a team focused on lead generation, using performance data to optimize conversion strategies.",
      "Monitored campaign metrics to guide execution and contribute to platform growth.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionTitle>Experience</SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          How operations built my data-first mindset.
        </p>

        <div className="relative mt-16">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <ul className="space-y-14">
            {ROLES.map((r, i) => (
              <li key={r.company} className="relative md:grid md:grid-cols-2 md:gap-12">
                <span className="absolute left-0 top-2 z-10 flex h-6 w-6 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_var(--background)]" />
                </span>
                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                  <h3 className="text-xl font-bold sm:text-2xl">{r.role}</h3>
                  <div className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
                    {r.company}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
