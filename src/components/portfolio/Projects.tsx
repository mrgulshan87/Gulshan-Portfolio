import fakeProfileImg from "@/assets/project-fake-profile.jpg";
import evChargingImg from "@/assets/project-ev-charging.jpg";
import bankLoanImg from "@/assets/project-bank-loan.jpg";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const PROJECTS = [
  {
    title: "Bank Loan Report Dashboard",
    tagline: "Capstone Project 1 · End-to-end loan analytics",
    tags: ["Excel", "SQL", "Python", "Power BI"],
    summary:
      "Cleaned and validated a 38,576-record LendingClub-style dataset, cross-checked KPIs (funded amount, DTI, interest rate, Good vs. Bad Loan) and built a 3-page interactive Power BI report with state, grade, purpose and term filters.",
    takeaway:
      "86.2% Good Loan rate across $435.8M funded and $473.1M received, with MTD/MoM trend tracking — ready to extend into predictive default-risk modeling.",
    image: bankLoanImg,
    link: "https://github.com/mrgulshan87/Bank-Loan-Report-Dashboard",
  },
  {

    title: "Fake Profile Detection",
    tagline: "Detecting fake social media profiles with ML",
    tags: ["Machine Learning", "Random Forest", "NLP", "PCA"],
    summary:
      "Engineered features from profile attributes (followers, activity patterns) and built a classifier that achieved a 94% F1-score.",
    takeaway:
      "Behavioral and activity-based features add strong predictive signal for trust-and-safety use cases.",
    image: fakeProfileImg,
    link: "https://github.com/mrgulshan87/Fake-Profile-Detection",
  },
  {
    title: "EV Charging Station Finder",
    tagline: "Full-stack station locator & slot booking",
    tags: ["Python", "Flask", "MySQL", "HTML/CSS/JS"],
    summary:
      "Modeled relational data for real-time station search, authentication and booking history; delivered route-based station suggestions.",
    takeaway:
      "Real-time availability and route optimization are the key UX levers for location-based apps.",
    image: evChargingImg,
    link: "https://github.com/mrgulshan87/EV-Charging-Station-Finder",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionTitle>Portfolio</SectionTitle>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target={p.link.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group relative block overflow-hidden bg-surface"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/70 to-transparent p-6 opacity-100 transition-opacity lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold sm:text-3xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                </div>
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {p.summary}
              </p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-semibold uppercase tracking-widest text-primary text-[10px]">
                  Takeaway ·{" "}
                </span>
                {p.takeaway}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/70 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
        More coursework projects — MegaMart Sales Dashboard, Social Media Engagement Analysis,
        Accident Analysis Dashboard — coming soon.
      </p>
    </section>
  );
}
