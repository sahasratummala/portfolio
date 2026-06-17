import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { resumeUrl, socials } from "@/lib/site-data";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <Link to="/" className="site-wordmark">
        Sahasra Tummala
      </Link>

      <nav className="flex items-center gap-5 sm:gap-8">
        <Link
          to="/"
          className="site-nav-link"
          activeProps={{ className: "site-nav-link site-nav-link--active" }}
          activeOptions={{ exact: true }}
        >
          Work
        </Link>
        <Link
          to="/projects"
          className="site-nav-link"
          activeProps={{ className: "site-nav-link site-nav-link--active" }}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="site-nav-link"
          activeProps={{ className: "site-nav-link site-nav-link--active" }}
        >
          About
        </Link>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="site-nav-link inline-flex items-center gap-1"
        >
          Resume
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl border-t border-border px-6 py-16">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="section-kicker">Currently</p>
          <p className="text-base text-muted-foreground">
            reading <span className="text-foreground">The Housekeeper and the Professor</span>
          </p>
        </div>

        <nav className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="icon-link"
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}
