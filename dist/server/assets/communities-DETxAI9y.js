import { jsxs, jsx } from "react/jsx-runtime";
import { c as communities, S as SiteFrame, a as SiteHeader, b as SiteFooter } from "./site-chrome-DPhD7wt-.js";
import { useState, useMemo } from "react";
import "@tanstack/react-router";
import "lucide-react";
function AboutPage() {
  const [activeCommunity, setActiveCommunity] = useState(communities[0].id);
  const selected = useMemo(() => communities.find((community) => community.id === activeCommunity) ?? communities[0], [activeCommunity]);
  return /* @__PURE__ */ jsxs(SiteFrame, { children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "mx-auto w-full max-w-6xl px-6", children: /* @__PURE__ */ jsx("section", { className: "py-18", children: /* @__PURE__ */ jsxs("div", { className: "community-layout", children: [
      /* @__PURE__ */ jsx("div", { className: "community-grid", role: "list", "aria-label": "Communities", children: communities.map((community, index) => {
        const isActive = activeCommunity === community.id;
        return /* @__PURE__ */ jsxs("button", { type: "button", role: "listitem", "aria-pressed": isActive, "aria-label": community.label, onMouseEnter: () => setActiveCommunity(community.id), onFocus: () => setActiveCommunity(community.id), onClick: () => setActiveCommunity(community.id), className: `community-tile community-tile--${index + 1} ${isActive ? "community-tile--active" : ""}`, children: [
          community.image && /* @__PURE__ */ jsx("img", { src: community.image, alt: "", className: "community-tile__image", loading: "lazy" }),
          /* @__PURE__ */ jsx("div", { className: "community-tile__scrim" }),
          /* @__PURE__ */ jsx("div", { className: "community-tile__label", children: community.label })
        ] }, community.id);
      }) }),
      /* @__PURE__ */ jsxs("aside", { className: "community-copy", children: [
        /* @__PURE__ */ jsx("h3", { className: "community-copy__title", children: selected.title }),
        /* @__PURE__ */ jsx("div", { className: "community-copy__body", children: selected.description })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  AboutPage as component
};
