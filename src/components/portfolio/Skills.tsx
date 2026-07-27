import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./SectionTitle";

const COUNTERS = [
  { label: "Excel", value: 90 },
  { label: "SQL", value: 85 },
  { label: "Python", value: 80 },
  { label: "Power BI", value: 80 },
];

const TAGS = [
  {
    heading: "Programming & ML",
    items: ["Machine Learning", "Deep Learning", "Statistics", "Hypothesis Testing", "scikit-learn", "Random Forest", "NLP", "PCA"],
  },
  {
    heading: "GenAI & Productivity",
    items: ["ChatGPT", "Copilot", "Prompt Engineering", "AI-Assisted Reporting"],
  },
  {
    heading: "Other",
    items: ["MySQL", "MS Office", "Project Management", "Communication", "Design Thinking"],
  },
];

function Counter({ target }: { target: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1400;
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{n}</span>;
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle>My Skills</SectionTitle>

        <div className="mt-16 grid grid-cols-2 gap-y-14 lg:grid-cols-4">
          {COUNTERS.map((c) => (
            <div key={c.label} className="text-center">
              <div className="font-display text-6xl font-bold text-primary sm:text-7xl">
                <Counter target={c.value} />
                <sup className="ml-1 text-2xl font-semibold sm:text-3xl">%</sup>
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {c.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {TAGS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {group.heading}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
