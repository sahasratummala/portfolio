import { Instagram, Linkedin, Mail } from "lucide-react";
import goodFightImg from "@/assets/good-fight.jpg";
import hapticsImg from "@/assets/haptics-poster.png";
import kafCoverImg from "@/assets/kaf-cover.png";
import keeprCoverImg from "@/assets/keepr-cover.png";
import stampedeImg from "@/assets/stampede.png";

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
    title: "Stampede",
    subtitle:
      "platform that hosts UT music events and talent, matches concert buddies, and acts as a stylist",
    href: "https://stampedetx.vercel.app/",
    img: stampedeImg,
    tag: "Hackathon",
    award: "1st place Headliner, 2nd place Best Use of SerpAPI, and a $1000 cash prize at WiCS Hacks",
  },
  {
    title: "Freezing of Gait Assistive Device",
    subtitle:
      "wearable, closed-loop vibrotactile cueing system for Parkinson's patients",
    href: hapticsImg,
    img: hapticsImg,
    tag: "Research",
  },
  {
    title: "Keepr Brand Identity",
    subtitle: "brand identity for a student storage startup",
    href: "https://canva.link/aubjdb0qwqvt76l",
    img: keeprCoverImg,
    tag: "Branding",
  },
  {
    title: "Keep Austin Fed Final Showcase",
    subtitle: "redesigned Keep Austin Fed's contributor newsletter",
    href: "https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU",
    img: kafCoverImg,
    tag: "Design Strategy",
  },
  {
    title: "The Good Fight",
    subtitle: "op-ed on tribalism and anti-Indian racism",
    href: "https://voiceoffrisco.com/the-good-fight/",
    img: goodFightImg,
    tag: "Journalism",
  },
] as const;
