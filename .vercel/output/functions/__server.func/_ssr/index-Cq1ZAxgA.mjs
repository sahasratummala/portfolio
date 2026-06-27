import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteFrame, a as SiteHeader, b as SiteFooter, p as projects } from "./site-chrome-C_98Q_E7.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const workItems = [{
  id: "sandia",
  navLabel: "Sandia",
  title: "Sandia National Labs",
  location: "Albuquerque, NM",
  role: "R&D Intern",
  date: "May 2026 - Present",
  details: ["Developed EnvEx, an internal tool for mechanical engineers to visualize component test environments.", "Developed with React, FastAPI, Python, MongoDB, Docker, OpenShift, and Azure."]
}, {
  id: "dfa",
  navLabel: "Design for America",
  title: "Design for America",
  location: "Austin, TX",
  role: "Communications Director",
  date: "Nov 2025 - Present",
  details: ["Led Design for America’s recruitment and public presence through branding, social media, and outreach events.", "Explored how Keep Austin Fed could identify, attract, and retain food contributors in a competitive landscape.", "Redesigned the food contributor newsletter to improve contributor engagement and communicate impact."]
}, {
  id: "fri",
  navLabel: "Freshman Research Initiative",
  title: "Freshman Research Initiative",
  location: "Austin, TX",
  role: "Medical Robotics & Haptics Researcher",
  date: "Jan 2026 - Present",
  details: ["Prototyped a wearable closed-loop vibrotactile cueing system to address freezing of gait episodes in Parkinson’s patients using ESP32, IMU, and haptic drivers.", "Implemented gait detection and cadence-matched cueing logic in C++, triggering alternating left-right vibration upon a 50% cadence drop or 2-second step absence."]
}, {
  id: "longhorn-devs",
  navLabel: "Longhorn Developers",
  title: "Longhorn Developers",
  location: "Austin, TX",
  role: "Product Lead",
  date: "Sep 2025 - Present",
  details: ["Led product strategy for Longhorn Studies and Spark Plus, while managing two fellows and collaborating with UT Enterprise Technology.", "Shipped a conversational AI agent on UT Spark to connect users to researchers, labs, and grants.", "Conducted 10+ user interviews and testing sessions to define MVP scope for Longhorn Studies."]
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteFrame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto w-full max-w-6xl px-6 pt-14 md:pt-18", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorkSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mb-12 max-w-3xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "home-name mb-5 text-foreground tracking-tighter", style: {
      fontSize: "clamp(40px, 8vw, 72px)"
    }, children: "Sahasra Tummala" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] font-small text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-accent", children: "[1]" }),
        "R&D Intern at Sandia"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-accent", children: "[2]" }),
        "CS & Design at UT Austin"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-accent", children: "[3]" }),
        "Founder of",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://voiceoffrisco.com", target: "_blank", rel: "noreferrer", className: "text-accent hover:underline", children: "VOF" })
      ] })
    ] })
  ] });
}
function WorkSection() {
  const [activeWork, setActiveWork] = reactExports.useState("sandia");
  const selected = reactExports.useMemo(() => workItems.find((item) => item.id === activeWork) ?? workItems[0], [activeWork]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "scroll-mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-rule-heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "work-panel", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "work-sidebar", "aria-label": "Work experience", children: workItems.map((item) => {
        const isActive = item.id === selected.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: `work-sidebar__item ${isActive ? "work-sidebar__item--active" : ""}`, "aria-pressed": isActive, onClick: () => setActiveWork(item.id), children: item.navLabel }, item.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "work-detail", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "work-detail__header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
            selected.role,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "@ ",
              selected.title
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: selected.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "work-detail__list", children: selected.details.map((detail) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: detail }, detail)) })
      ] })
    ] })
  ] });
}
function ProjectsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "mt-14 scroll-mt-24 md:mt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-rule-heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "project-masonry gap-y-6", children: projects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.href, target: "_blank", rel: "noreferrer", className: "group flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer mb-6 break-inside-avoid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.img, loading: "lazy", alt: project.title, className: "w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-accent font-medium", children: project.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80", children: project.subtitle }),
        "award" in project && project.award && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-relaxed opacity-60", children: project.award })
      ] }) }) })
    ] }, project.title)) })
  ] });
}
export {
  HomePage as component
};
