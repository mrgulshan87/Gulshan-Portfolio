import fakeProfileImg from "@/assets/project-fake-profile.jpg";
import evChargingImg from "@/assets/project-ev-charging.jpg";
import bankLoanImg from "@/assets/project-bank-loan.jpg";
import wellbeingIQImg from "@/assets/project-wellbeingiq.jpg";
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
    title: "WellbeingIQ",
    tagline: "Capstone Project 2 · Student wellness analytics",
    tags: ["Python", "Machine Learning", "SHAP", "Streamlit", "GenAI"],
    summary:
      "Built an interactive educational prototype exploring how digital habits, sleep, activity, academic pressure, and social support relate to student-wellness categories, with explainable predictions and optional AI-powered guidance.",
    takeaway:
      "A responsible, end-to-end analytics workflow using synthetic data; predictions are educational estimates, not clinical assessments.",
    image: wellbeingIQImg,
    link: "https://github.com/mrgulshan87/WellbeingIQ-AI-Powered-Student-Wellness-Prediction-and-Guidance-System",
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
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <SectionTitle>Portfolio</SectionTitle>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.link}
            aria-label={`View ${p.title} project on GitHub`}
            target={p.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden border border-border bg-background/70 transition-colors hover:border-primary/60 lg:flex-row"
          >
            <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-background lg:aspect-auto lg:w-[34%]">
              <img
                src={p.image}
                alt={p.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover brightness-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/10" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <p className="min-w-0 text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.tagline.split(" · ")[0]}
                </p>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/50 bg-background/70 text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
            <div className="min-w-0 space-y-2.5 p-4 sm:p-5">
              <h3 className="break-words text-lg font-bold leading-tight text-foreground sm:text-xl">
                {p.title}
              </h3>
              <p className="text-xs font-medium text-foreground/80">{p.tagline.split(" · ")[1]}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{p.summary}</p>
              <p className="border-l-2 border-primary pl-2.5 text-xs leading-relaxed text-muted-foreground">
                <span className="mr-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Takeaway
                </span>
                {p.takeaway}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2 py-0.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
        More coursework projects — MegaMart Sales Dashboard, Social Media Engagement Analysis,
        Accident Analysis Dashboard — coming soon.
      </p>
    </section>
  );
}
