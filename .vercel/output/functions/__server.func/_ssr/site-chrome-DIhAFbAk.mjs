import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, M as Menu, L as Linkedin, I as Instagram, a as Mail, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
const goodFightImg = "/assets/good-fight-DBPfD2IQ.jpg";
const hapticsImg = "/assets/haptics-poster-DTWjSZ6r.png";
const kafCoverImg = "/assets/kaf-cover-BPbUk0we.png";
const keeprCoverImg = "/assets/keepr-cover-BugasJrI.png";
const stampedeImg = "/assets/stampede-CEiDrcbt.png";
const resumeUrl = "https://docs.google.com/document/d/1vyc1v6AyTFRZ5yDSAw5gVzNN-4CNaDuD5SXinGSazFY/edit?usp=sharing";
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahasratummala/",
    Icon: Linkedin
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sahasratummalaa/",
    Icon: Instagram
  },
  {
    label: "Email",
    href: "mailto:sahasratummala@utexas.edu",
    Icon: Mail
  }
];
const projects = [
  {
    title: "The Good Fight",
    subtitle: "op-ed on tribalism and anti-Indian racism",
    href: "https://voiceoffrisco.com/the-good-fight/",
    img: goodFightImg,
    tag: "Journalism"
  },
  {
    title: "Freezing of Gait Assistive Device",
    subtitle: "wearable, closed-loop vibrotactile cueing system for Parkinson's patients",
    href: hapticsImg,
    img: hapticsImg,
    tag: "Research"
  },
  {
    title: "Stampede",
    subtitle: "platform that hosts UT music events and talent, matches concert buddies, and acts as a stylist",
    href: "https://stampedetx.vercel.app/",
    img: stampedeImg,
    tag: "Hackathon",
    award: "1st place Headliner, 2nd place Best Use of SerpAPI, and a $1000 cash prize at WiCS Hacks"
  },
  {
    title: "Keep Austin Fed Final Showcase",
    subtitle: "redesigned Keep Austin Fed's contributor newsletter",
    href: "https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU",
    img: kafCoverImg,
    tag: "Design Strategy"
  },
  {
    title: "KEEPR Brand Identity",
    subtitle: "brand identity for a student storage startup",
    href: "https://canva.link/aubjdb0qwqvt76l",
    img: keeprCoverImg,
    tag: "Branding"
  }
];
function NavLinks({ onNavigate }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#work", className: "site-nav-link", onClick: onNavigate, children: "Work" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#projects", className: "site-nav-link", onClick: onNavigate, children: "Projects" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: resumeUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "site-nav-link inline-flex items-center gap-1",
        onClick: onNavigate,
        children: [
          "Resume",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
        ]
      }
    )
  ] });
}
function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "site-header mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "site-wordmark", onClick: () => setIsMenuOpen(false), children: "Sahasra Tummala" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-5 sm:flex sm:gap-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "site-menu-toggle sm:hidden",
        "aria-expanded": isMenuOpen,
        "aria-controls": "mobile-nav",
        "aria-label": isMenuOpen ? "Close menu" : "Open menu",
        onClick: () => setIsMenuOpen((open) => !open),
        children: isMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: "mobile-nav",
        className: `site-mobile-nav sm:hidden ${isMenuOpen ? "site-mobile-nav--open" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col items-start gap-6 px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavLinks, { onNavigate: () => setIsMenuOpen(false) }) })
      }
    )
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-auto mt-16 w-full max-w-6xl border-t border-border px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold tracking-tight", children: "Reach out!" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-3", children: socials.map(({ label, href, Icon: IconComponent }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": label,
        className: "icon-link",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-5 w-5", strokeWidth: 1.75 })
      },
      label
    )) })
  ] }) });
}
function SiteFrame({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground", children });
}
export {
  SiteFrame as S,
  SiteHeader as a,
  SiteFooter as b,
  projects as p
};
