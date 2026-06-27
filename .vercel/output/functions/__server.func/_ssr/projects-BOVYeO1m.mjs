import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteFrame, a as SiteHeader, p as projects, b as SiteFooter } from "./site-chrome-C_98Q_E7.mjs";
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
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteFrame, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto w-full max-w-6xl px-6 pb-6 pt-12 md:pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "project-masonry gap-y-6", children: projects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.href, target: "_blank", rel: "noreferrer", className: "group flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer mb-6 break-inside-avoid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.img, loading: "lazy", alt: project.title, className: "w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-accent font-medium", children: project.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80", children: project.subtitle }),
        "award" in project && project.award && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-relaxed opacity-60", children: project.award })
      ] }) }) })
    ] }, project.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProjectsPage as component
};
