import { ArrowUpRight, Menu, X } from "lucide-react";
import { resumeUrl, socials } from "@/lib/site-data";
import { useEffect, useState, type ReactNode, type MouseEvent } from "react";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <a href="/#work" className="site-nav-link" onClick={onNavigate}>
        Work
      </a>
      <a href="/#projects" className="site-nav-link" onClick={onNavigate}>
        Projects
      </a>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="site-nav-link inline-flex items-center gap-1"
        onClick={onNavigate}
      >
        Resume
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWordmarkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (window.location.pathname !== "/") {
      window.location.assign("/");
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Lock body scroll while the mobile menu is open, and close on Escape.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <a href="/" className="site-wordmark" onClick={handleWordmarkClick}>
        Sahasra Tummala
      </a>

      <nav className="hidden items-center gap-5 sm:flex sm:gap-8">
        <NavLinks />
      </nav>

      <button
        type="button"
        className="site-menu-toggle sm:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="mobile-nav"
        className={`site-mobile-nav sm:hidden ${isMenuOpen ? "site-mobile-nav--open" : ""}`}
      >
        <nav className="flex flex-col items-start gap-6 px-6 py-10">
          <NavLinks onNavigate={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-6xl border-t border-border px-6 py-12">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-xl font-display font-bold tracking-tight">Reach out!</p>
        </div>

        <nav className="flex items-center gap-3">
          {socials.map(({ label, href, Icon: IconComponent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="icon-link"
            >
              <IconComponent className="h-5 w-5" strokeWidth={1.75} />
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
