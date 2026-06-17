import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteFrame, a as SiteHeader, b as SiteFooter } from "./site-chrome-DPhD7wt-.js";
import "@tanstack/react-router";
import "lucide-react";
function HomePage() {
  return /* @__PURE__ */ jsxs(SiteFrame, { children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto w-full max-w-3xl px-6 pt-20 md:pt-24", children: [
      /* @__PURE__ */ jsxs("section", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "home-name mb-6 text-foreground tracking-tighter", style: {
          fontSize: "clamp(40px, 8vw, 72px)"
        }, children: "Sahasra Tummala" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent mr-2", children: "[1]" }),
            "R&D Intern at Sandia National Labs"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent mr-2", children: "[2]" }),
            "CS & Design at UT Austin"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-lg p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display leading-tight text-foreground tracking-tight", children: "Sandia National Labs" }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-bold", children: "Albuquerque, NM · May 2026 — Present" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-accent", children: "R&D Intern" }),
        /* @__PURE__ */ jsxs("p", { className: "text-[1.05rem] leading-relaxed text-muted-foreground", children: [
          "Building ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "EnvEx" }),
          ", an internal tool for mechanical engineers to visualize component test environments through complex data streams."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: ["Azure", "Docker", "FastAPI", "MongoDB", "OpenShift", "Python", "React"].map((tech) => /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] font-medium bg-secondary text-secondary-foreground border border-border transition-colors hover:bg-accent/10 hover:border-accent/40 hover:text-accent cursor-default", children: tech }, tech)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
