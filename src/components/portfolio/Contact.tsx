import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — I'll get back to you soon.");
    }, 700);
  };

  return (
    <section id="contact" className="border-t border-border bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Write your message…
              </span>
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full resize-y border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>

          <div className="space-y-10">
            <Detail icon={<Mail size={18} />} label="Email">
              <a
                href="mailto:gulshankumarkushwaha28@gmail.com"
                className="hover:text-primary transition-colors"
              >
                gulshankumarkushwaha28@gmail.com
              </a>
            </Detail>
            <Detail icon={<Phone size={18} />} label="Phone">
              <a href="tel:+917330652064" className="hover:text-primary transition-colors">
                +91 73306 52064
              </a>
            </Detail>
            <Detail icon={<MapPin size={18} />} label="Location">
              Hyderabad, India
            </Detail>
            <Detail icon={<Linkedin size={18} />} label="LinkedIn">
              <a
                href="https://www.linkedin.com/in/gulshan-kumar-kushwaha-b62282214"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                /in/gulshan-kumar-kushwaha-b62282214
              </a>
            </Detail>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </div>
      <div className="mt-3 text-xl font-medium text-foreground">{children}</div>
    </div>
  );
}
