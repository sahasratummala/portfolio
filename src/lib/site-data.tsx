import { Instagram, Linkedin, Mail } from "lucide-react";
import goodFightImg from "@/assets/good-fight.jpg";
import hapticsImg from "@/assets/haptics-poster.png";
import kafCoverImg from "@/assets/kaf-cover.png";
import keeprCoverImg from "@/assets/keepr-cover.png";
import stampedeImg from "@/assets/stampede.png";
import sandiaImg from "@/assets/sandia.png";
import spyfallImg from "@/assets/spyfall-cover.png";

export const resumeUrl =
  "https://docs.google.com/document/d/1vyc1v6AyTFRZ5yDSAw5gVzNN-4CNaDuD5SXinGSazFY/edit?usp=sharing";

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahasratummala/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sahasratummalaa/",
    Icon: Instagram,
  },
  {
    label: "Email",
    href: "mailto:sahasratummala@utexas.edu",
    Icon: Mail,
  },
] as const;

export const projects = [
  {
    title: "Environments Explorer",
    subtitle:
      "internal tool to visualize component test environments",
    href: sandiaImg,
    img: sandiaImg,
    tag: "Sandia Internship",
  },
  {
    title: "Stampede",
    subtitle:
      "website that hosts UT concerts and talent, matches concert buddies, and acts as a stylist",
    href: "https://stampedetx.vercel.app/",
    img: stampedeImg,
    tag: "WiCS Hacks",
    award: "1st place Headliner, 2nd place Best Use of SerpAPI, and $1000 at WiCS Hacks",
  },
  {
    title: "Freezing of Gait Assistive Device",
    subtitle:
      "wearable, closed-loop vibrotactile cueing system to address freezing of gait episodes",
    href: hapticsImg,
    img: hapticsImg,
    tag: "FRI Research",
  },
  {
    title: "Keepr",
    subtitle: "brand identity and posters for a student storage startup",
    href: "https://canva.link/aubjdb0qwqvt76l",
    img: keeprCoverImg,
    tag: "Freelance",
  },
  {
    title: "Spyfall - Double Cross",
    subtitle:
      "agent that uses Gemini API and semantic embeddings to play Spyfall",
    href: "https://stampedetx.vercel.app/",
    img: spyfallImg,
    tag: "MLDS Long Competition",
    award: "1st place and $500 at the MLDS Long Competition",
  },
  {
    title: "Keep Austin Fed Final Showcase",
    subtitle: "explored how Keep Austin Fed could identify, attract, and retain food contributors",
    href: "https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU",
    img: kafCoverImg,
    tag: "DFA Showcase",
  },
  {
    title: "The Good Fight",
    subtitle: "op-ed on tribalism and anti-Indian racism",
    href: "https://voiceoffrisco.com/the-good-fight/",
    img: goodFightImg,
    tag: "Journalism",
  },
] as const;
