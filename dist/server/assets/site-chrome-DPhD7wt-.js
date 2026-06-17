import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
const goodFightImg = "/assets/good-fight-DBPfD2IQ.jpg";
const hapticsImg = "/assets/haptics-poster-DTWjSZ6r.png";
const kafCoverImg = "/assets/kaf-cover-BPbUk0we.png";
const keeprCoverImg = "/assets/keepr-cover-CdO_RDc_.png";
const stampedeImg = "/assets/stampede-CEiDrcbt.png";
const dfaImg = "/assets/Tshirt--bE5C39x.png";
const friImg = "/assets/TexasFRI-ImzHqXRg.jpg";
const longhornDevsImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAMCElEQVR4nOzdC3BU9fUH8JNsNptsSHbzIoEkomhISCL4QuTPw/nbB1bb2k6tjoI67bQdaKeiMp1pO53xMVPr0IczrVZbqVXq2CpYp62loqCCokgKGggkgSTknWw2r02y78ftLEsF0sjdxz33d+/d72d2HFzuvefk8s19P7Levp0AFJcpugEwJgQLWCBYwALBAhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhZZohs4K8NsyausJ8qIf5RIwOPpb+FsShhLyQJzfklCo/iGO0PucbaOEqOJYBVd9cWKz3+3eOlaykh4CXpgU7XP0c7Tl0jLtjRlWW2JjjV58sPBd/4wtPd5KRTg6StegoNlKa6q3fjHwobPJD2FJOa+LiT3cxVULy+oXl518+aWJ++a6mhk6CteIrexckovueqR91NJFczKOr/migf32utvENiDsGCZcguW/OhfluJKUQ0Ymyk7t/6BHdbKOlENCAvWwjsfs86vEVU9HZjzCms3PCuquphgme3l82/4tpDSaaXgsuWFS9cKKS0mWGWr1mWYNLFDanjla+4RUldMsOy1a4TUTUP2xWJmtZhgWYoqhNRNQ6JmNU7pAAsEC1ggWMACwQIWCBaw0H2wpHBIdAssIuGg6BZSopujlFOdh5yNrwYnned+GfF73D1N4ppi1Lzly5aSi879xmTJK7riC0VLPieuqQToI1hdr/6066WfiO5CVWNNr//vl307Hy9Z9tWGzX8V0VFidLAqDLiGu7c/JLoLrRhpfHXs6G7RXcjTQbD8o71SxJgbUsnxOTpFtyBPB8ECPUKwgAWCBSwQLGCBYAELfRzH0i+zlSxy93H5XRT0qNSPahAsXnW3UuElMsOMd1LTn1TqRzVYFfLKssQxTI4anagMwQIWCBawQLCABYIFLBAsYIFgAQsEC1ggWMACwQIWCBawMOC5wsJLaaHcQxInB+jkP1XqJz0ZMFiliyl/vsww+fMRLF5YFQILBAtYIFjAAsECFggWsECwgAWCBSwQLGCBYAELBAtYGPCUTqIsNjJbZYbxjFDkv49unDNPZuBIMDp8mkOwaNkG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";
const vofImg = "/assets/vofImg-BhQy-xwB.jpg";
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
    subtitle: "an Op-Ed on tribalism & anti-Indian racism.",
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
    subtitle: "platform for UT music events, concert-buddy matching, and personal styling",
    href: "https://stampedetx.vercel.app/",
    img: stampedeImg,
    tag: "Hackathon",
    award: "1st Place Headliner & 2nd Place Best Use of SerpAPI at WiCS Hacks"
  },
  {
    title: "Keep Austin Fed Final Showcase",
    subtitle: "explored how Keep Austin Fed can retain food contributors",
    href: "https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU",
    img: kafCoverImg,
    tag: "Design Strategy"
  },
  {
    title: "KEEPR Brand Identity",
    subtitle: "brand identity for an affordable student storage startup.",
    href: keeprCoverImg,
    img: keeprCoverImg,
    tag: "Branding"
  }
];
const communities = [
  {
    id: "design-for-america",
    label: "Communications Director",
    title: "Design for America",
    image: dfaImg,
    description: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("p", { children: "Design for America (DFA) is a national student organization utilizing human-centered design to address social issues at the local level." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Partnering with",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU",
            target: "_blank",
            rel: "noreferrer",
            className: "text-accent font-medium hover:underline transition-all",
            children: "Keep Austin Fed"
          }
        ),
        ", I redesigned their contributor newsletter to increase engagement and retention."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "As Communications Director, I direct DFA's recruitment and public presence through branding, social media, and outreach events." })
    ] })
  },
  {
    id: "fri",
    label: "Medical Robotics & Haptics Researcher",
    title: "Freshman Research Initiative",
    image: friImg,
    description: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("p", { children: "The Freshman Research Initiative (FRI) is the nation's largest undergraduate research program." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Through the Medical Robotics & Haptics stream, I built a",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: hapticsImg,
            target: "_blank",
            rel: "noreferrer",
            className: "text-accent font-medium hover:underline transition-all",
            children: "Freezing of Gait Assistive Device."
          }
        )
      ] })
    ] })
  },
  {
    id: "longhorn-devs",
    label: "2x Product Lead",
    title: "Longhorn Developers",
    image: longhornDevsImg,
    description: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("p", { children: "Longhorn Developers builds technology and design solutions to address challenges within the UT Austin community." }),
      /* @__PURE__ */ jsx("p", { children: "As Product Lead, I lead product strategy for Longhorn Studies and Spark Plus while managing two fellows and collaborating with UT Enterprise Technology." })
    ] })
  },
  {
    id: "vof",
    label: "Editor Emeritus",
    title: "Voice of Frisco",
    image: vofImg,
    description: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("p", { children: "In 2020, I founded the online newspaper Voice of Frisco to provide students a publishing space." }),
      /* @__PURE__ */ jsx("p", { children: "As Chief Editor, I grew the newspaper to 65+ reporters, 530+ articles, and 23,000+ readers before transitioning to Editor Emeritus in April 2025." })
    ] })
  }
];
function SiteHeader() {
  return /* @__PURE__ */ jsxs("header", { className: "mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "site-wordmark", children: "Sahasra Tummala" }),
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-5 sm:gap-8", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "site-nav-link",
          activeProps: { className: "site-nav-link site-nav-link--active" },
          activeOptions: { exact: true },
          children: "Work"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/projects",
          className: "site-nav-link",
          activeProps: { className: "site-nav-link site-nav-link--active" },
          children: "Projects"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/communities",
          className: "site-nav-link",
          activeProps: { className: "site-nav-link site-nav-link--active" },
          children: "Communities"
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: resumeUrl,
          target: "_blank",
          rel: "noreferrer",
          className: "site-nav-link inline-flex items-center gap-1",
          children: [
            "Resume",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "mx-auto mt-24 w-full max-w-6xl border-t border-border px-6 py-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsx("p", { className: "text-xl font-display font-bold tracking-tight", children: "Reach out!" }) }),
    /* @__PURE__ */ jsx("nav", { className: "flex items-center gap-3", children: socials.map(({ label, href, Icon: IconComponent }) => /* @__PURE__ */ jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": label,
        className: "icon-link",
        children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5", strokeWidth: 1.75 })
      },
      label
    )) })
  ] }) });
}
function SiteFrame({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background text-foreground", children });
}
export {
  SiteFrame as S,
  SiteHeader as a,
  SiteFooter as b,
  communities as c,
  projects as p
};
