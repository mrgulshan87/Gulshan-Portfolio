import { Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row lg:px-10">
        <div>
          © {new Date().getFullYear()} Gulshan Kumar Kushwaha<span className="text-primary">.</span>{" "}
          All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/gulshan-kumar-kushwaha-b62282214"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:gulshankumarkushwaha28@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-primary"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
