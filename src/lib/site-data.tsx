import { Instagram, Linkedin, Mail } from "lucide-react";
import goodFightImg from "@/assets/good-fight.jpg";
import hapticsImg from "@/assets/haptics-poster.png";
import kafCoverImg from "@/assets/kaf-cover.png";
import keeprCoverImg from "@/assets/keepr-cover.png";
import stampedeImg from "@/assets/stampede.png";
import dfaImg from "@/assets/Tshirt.png";
import friImg from "@/assets/TexasFRI.jpg";
import longhornDevsImg from "@/assets/longhorn-devs.png";
import vofImg from "@/assets/vofImg.jpg";

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
    subtitle: "op-ed on tribalism and anti-Indian racism",
    href: "https://voiceoffrisco.com/the-good-fight/",
    img: goodFightImg,
    tag: "Journalism",
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
    title: "Stampede",
    subtitle:
      "platform that hosts UT music events and talent, matches concert buddies, and acts as a stylist",
    href: "https://stampedetx.vercel.app/",
    img: stampedeImg,
    tag: "Hackathon",
    award: "1st place Headliner, 2nd place Best Use of SerpAPI, and a $1000 cash prize at WiCS Hacks",
  },
  {
    title: "Keep Austin Fed Final Showcase",
    subtitle:
      "redesigned Keep Austin Fed's contributor newsletter",
    href: "https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU",
    img: kafCoverImg,
    tag: "Design Strategy",
  },
  {
    title: "KEEPR Brand Identity",
    subtitle: "brand identity for a student storage startup",
    href: "https://canva.link/aubjdb0qwqvt76l",
    img: keeprCoverImg,
    tag: "Branding",
  },
] as const;

export const communities = [
  {
    id: "design-for-america",
    label: "Communications Director",
    title: "Design for America",
    image: dfaImg,
    description: (
      <div className="space-y-3">
        <p>
          Design for America (DFA) is a national student organization utilizing
          human-centered design to address social issues at the local level.
        </p>
        <p>
          Partnering with{" "}
          <a
            href="https://www.figma.com/deck/mFw57DPCHvTr0zT4mSQiDU"
            target="_blank"
            rel="noreferrer"
            className="text-accent font-medium hover:underline transition-all"
          >
            Keep Austin Fed
          </a>
          , I redesigned their contributor newsletter to increase engagement and retention.
        </p>
        <p>
          As Communications Director, I direct DFA's recruitment and public
          presence through branding, social media, and outreach events.
        </p>
      </div>
    ),
  },
  {
    id: "fri",
    label: "Medical Robotics & Haptics Researcher",
    title: "Freshman Research Initiative",
    image: friImg,
    description: (
      <div className="space-y-3">
        <p>
          The Freshman Research Initiative (FRI) is the nation's largest
          undergraduate research program.
        </p>
        <p>
          Through the Medical Robotics &amp; Haptics stream, I built a{" "}
          <a
            href={hapticsImg}
            target="_blank"
            rel="noreferrer"
            className="text-accent font-medium hover:underline transition-all"
          >
            Freezing of Gait Assistive Device.
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "longhorn-devs",
    label: "2x Product Lead",
    title: "Longhorn Developers",
    image: longhornDevsImg,
    description: (
      <div className="space-y-3">
        <p>
          Longhorn Developers builds technology and design solutions to address
          challenges within the UT Austin community.
        </p>
        <p>
          As Product Lead, I lead product strategy for Longhorn Studies and Spark
          Plus while managing two fellows and collaborating with UT Enterprise Technology.
        </p>
      </div>
    ),
  },
  {
    id: "vof",
    label: "Editor Emeritus",
    title: "Voice of Frisco",
    image: vofImg,
    description: (
      <div className="space-y-3">
        <p>
          In 2020, I founded the online newspaper Voice of Frisco to provide students a publishing space.
        </p>
        <p>
          As Chief Editor, I grew the newspaper to 65+ reporters, 530+ articles, and 23,000+
          readers before transitioning to Editor Emeritus in April 2025.
        </p>
      </div>
    ),
  },
] as const;