import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Menu, X } from "lucide-react";
import { resumeUrl, socials } from "@/lib/site-data";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SessionStamp } from "@/components/session-stamp";
import { useRevealMotion } from "@/hooks/use-reveal-motion";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <a href="/#work" className="site-nav-link" onClick={onNavigate}>
        Work
      </a>
      <a href="/#projects" className="site-nav-link" onClick={onNavigate}>
        Projects
      </a>
      <a href="/#bookshelf" className="site-nav-link" onClick={onNavigate}>
        Bookshelf
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

  const handleHomeClick = () => {
    setIsMenuOpen(false);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
    <header
      id="top"
      className="site-header mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8"
    >
      <Link to="/" className="site-wordmark" onClick={handleHomeClick}>
        Sahasra Tummala
      </Link>

      <nav className="hidden items-center gap-8 min-[760px]:flex">
        <NavLinks />
      </nav>

      <button
        type="button"
        className="site-menu-toggle min-[760px]:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="mobile-nav"
        className={`site-mobile-nav min-[760px]:hidden ${isMenuOpen ? "site-mobile-nav--open" : ""}`}
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
    <footer
      className="site-footer mx-auto mt-4 w-full max-w-6xl border-t border-border px-6 py-12 min-[760px]:mt-16"
      data-reveal
    >
      <div className="site-footer__content">
        <div className="site-footer__stamp">
          <SessionStamp />
        </div>

        <div className="site-footer__lists">
          <div className="site-footer__contact">
            <p className="site-footer__eyebrow">Reach out!</p>
            <nav
              className="site-footer__social-list"
              aria-label="Contact links"
            >
              {socials.map(({ label, href, Icon: IconComponent }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="site-nav-link inline-flex items-center gap-2"
                >
                  <IconComponent
                    aria-hidden="true"
                    className="h-4 w-4"
                    strokeWidth={1.6}
                  />
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>

          <nav className="site-footer__links" aria-label="Footer navigation">
            <p className="site-footer__eyebrow">Navigation</p>
            <div className="site-footer__nav">
              <NavLinks />
            </div>
          </nav>
        </div>
      </div>

      <div className="site-footer__signoff">
        <span>Sahasra Tummala</span>
        <a href="#top" className="site-footer__back-to-top">
          Back to top
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  useRevealMotion(frameRef);

  return (
    <div
      ref={frameRef}
      className="site-frame min-h-screen bg-background text-foreground"
    >
      {children}
    </div>
  );
}
