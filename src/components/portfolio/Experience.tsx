import { SectionTitle } from "./SectionTitle";

const ROLE = {
  role: "Rider Shift In-Charge",
  subtitle: "(Assistant Manager)",
  company: "Zepto",
  location: "Hyderabad",
  bullets: [
    "Managed 160+ riders and supported daily operations for 1,100+ orders.",
    "Reduced RTO from 17% to 8%, achieving an approximately 53% relative reduction.",
    "Improved on-time delivery from 82% to 96%, a 14 percentage-point improvement.",
    "Increased rider productivity by 15% through performance monitoring and shift optimization.",
    "Improved rider engagement and reactivated inactive riders to strengthen workforce stability.",
    "Monitored operational KPIs to identify performance gaps and improve service quality.",
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
