import { Instagram, Linkedin, Mail } from "lucide-react";
import goodFightImg from "@/assets/good-fight.png.asset.json";
import hapticsImg from "@/assets/haptics-poster.jpg.asset.json";
import kafCoverImg from "@/assets/kaf-cover.png.asset.json";
import keeprCoverImg from "@/assets/keepr-cover.png.asset.json";
import stampedeImg from "@/assets/stampede.png.asset.json";

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
    title: "The Good Fight",
    subtitle: "Article for Voice of Frisco on tribalism and anti-Indian hate.",
    href: "https://voiceoffrisco.com/the-good-fight/",
    img: goodFightImg.url,
    alt: "Residents at a Frisco city council meeting",
    tag: "Writing",
  },
  {
    title: "Freezing of Gait Assistive Device",
    subtitle:
      "Medical Robotics & Haptics researcher on a wearable closed-loop vibrotactile cueing system.",
    href: hapticsImg.url,
    img: hapticsImg.url,
    alt: "Research poster for the Freezing of Gait assistive device",
    tag: "Research",
  },
  {
    title: "Stampede",
    subtitle:
      "Built a platform for UT music events, concert-buddy matching, and personal styling. Won 1st place Headliner, 2nd Best Use of SerpAPI, and a $1,000 prize at WiCS Hacks.",
    href: "https://stampedetx.vercel.app/",
    img: stampedeImg.url,
    alt: "Stampede event website",
    tag: "Product",
  },
  {
    title: "Keep Austin Fed",
    subtitle:
      "Contributor Growth & Relationships — redesigned KAF's outreach system with a sharper, more engaging newsletter template in Mailchimp.",
    href: "https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU",
    img: kafCoverImg.url,
    alt: "Keep Austin Fed contributor growth presentation cover",
    tag: "Design Strategy",
  },
  {
    title: "KEEPR Brand Identity",
    subtitle:
      "Developed the brand system for KEEPR, an affordable student storage concept grounded in trust, warmth, and clarity.",
    href: "https://canva.link/aubjdb0qwqvt76l",
    img: keeprCoverImg.url,
    alt: "KEEPR brand identity board",
    tag: "Branding",
  },
] as const;

export const communities = [
  {
    id: "innovative-design",
    label: "semesterly themed photoshoot",
    title: "Innovative Design @ UT",
    description:
      "A student-run creative community where I found some of my closest design friends through themed shoots, critique, and late-night project work.",
  },
  {
    id: "sandia",
    label: "research systems",
    title: "Sandia National Labs",
    description:
      "A place where technical depth, systems thinking, and visual communication meet in real-world engineering work.",
  },
  {
    id: "ut-cs",
    label: "builders around me",
    title: "UT CS & Design",
    description:
      "My day-to-day learning community — people who push me toward stronger technical craft and better product thinking.",
  },
  {
    id: "friends",
    label: "people who keep me grounded",
    title: "Friends in Austin",
    description:
      "The people behind the work: collaborators, roommates, and friends who make the pace of building feel sustainable.",
  },
] as const;
