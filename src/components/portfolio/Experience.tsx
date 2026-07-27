import { SectionTitle } from "./SectionTitle";

const ROLE = {
  role: "Rider Shift In-Charge",
  company: "Zepto",
  bullets: [
    "Monitored real-time operational data to optimize delivery routes and rider allocation, improving on-time performance.",
    "Tracked performance metrics and resolved service issues to maintain high operational standards.",
  ],
};

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionTitle>Experience</SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          How operations built my data-first mindset.
        </p>

        <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
          <h3 className="text-2xl font-bold sm:text-3xl">{ROLE.role}</h3>
          <div className="mt-2 text-sm font-medium uppercase tracking-widest text-primary">
            {ROLE.company}
          </div>
          <ul className="mx-auto mt-6 max-w-xl space-y-3 text-sm leading-relaxed text-muted-foreground">
            {ROLE.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
