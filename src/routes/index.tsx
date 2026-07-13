import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteFooter, SiteFrame, SiteHeader } from "@/components/site-chrome";
import { projects } from "@/lib/site-data";
import cherriesStamp from "@/assets/cherries-stamp.png";
import lipstickStamp from "@/assets/lipstick-stamp.png";
import horizontalStamp from "@/assets/click-to-reveal-horizontal.png";
import snoopyStamp from "@/assets/snoopy-stamp.png";
import verticalStamp from "@/assets/click-to-reveal-vertical.png";
import whaleStamp from "@/assets/whale-stamp.png";
import cupcakeStamp from "@/assets/cupcake-stamp.png";
import devilWearsPradaPoster from "@/assets/devil.png";
import squareStamp from "@/assets/square-stamp.png";
import teapotStamp from "@/assets/teapot-stamp.png";
import housekeeperProfessorCover from "@/assets/housekeeper-professor.png";

const stampVariants = {
  horizontal: {
    src: horizontalStamp,
    alt: "Click to reveal",
  },
  vertical: {
    src: verticalStamp,
    alt: "Click to reveal",
  },
  square: {
    src: squareStamp,
    alt: "Click to reveal",
  },
} as const;

type StampVariant = keyof typeof stampVariants;

const revealStamps = {
  cherries: {
    src: cherriesStamp,
    alt: "Cherries stamp",
  },
  cupcake: {
    src: cupcakeStamp,
    alt: "Cupcake stamp",
  },
  snoopy: {
    src: snoopyStamp,
    alt: "Snoopy and Woodstock stamp",
  },
  whale: {
    src: whaleStamp,
    alt: "Whale stamp",
  },
  lipstick: {
    src: lipstickStamp,
    alt: "Lipstick stamp",
  },
  teapot: {
    src: teapotStamp,
    alt: "Teapot stamp",
  },
} as const;

type RevealStamp = keyof typeof revealStamps;
type FlipPhase = "idle" | "out" | "in";

function getStarterStamp(): StampVariant {
  const variants: StampVariant[] = ["horizontal", "vertical", "square"];

  try {
    const randomValue = window.crypto.getRandomValues(new Uint8Array(1))[0];
    return variants[Math.floor((randomValue / 256) * variants.length)];
  } catch {
    return variants[Math.floor(Math.random() * variants.length)];
  }
}

function getRandomRevealStamp(variant: StampVariant): RevealStamp {
  if (variant === "horizontal") return "whale";
  if (variant === "square") {
    const choices: RevealStamp[] = ["cupcake", "teapot"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const choices: RevealStamp[] = ["cherries", "snoopy", "lipstick"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playStampFlipSound() {
  const AudioContextConstructor =
    window.AudioContext ??
    (
      window as typeof window & {
        webkitAudioContext?: typeof AudioContext;
      }
    ).webkitAudioContext;

  if (!AudioContextConstructor) return;

  try {
    const audioContext = new AudioContextConstructor();
    const duration = 0.16;
    const bufferLength = Math.floor(audioContext.sampleRate * duration);
    const buffer = audioContext.createBuffer(
      1,
      bufferLength,
      audioContext.sampleRate,
    );
    const samples = buffer.getChannelData(0);
    let softenedNoise = 0;

    for (let index = 0; index < bufferLength; index += 1) {
      const noise = Math.random() * 2 - 1;
      const envelope = 1 - index / bufferLength;
      softenedNoise = softenedNoise * 0.55 + noise * 0.45;
      samples[index] = softenedNoise * envelope;
    }

    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    const startTime = audioContext.currentTime;

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1050, startTime);
    filter.Q.setValueAtTime(0.7, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.16, startTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    source.buffer = buffer;
    source.connect(filter).connect(gain).connect(audioContext.destination);
    source.addEventListener("ended", () => void audioContext.close());
    source.start(startTime);
    source.stop(startTime + duration);
  } catch {
    // Audio is a small enhancement; the reveal still works if playback is blocked.
  }
}

const workItems = [
  {
    id: "sandia",
    navLabel: "Sandia",
    title: "Sandia National Labs",
    location: "Albuquerque, NM",
    role: "R&D Intern",
    date: "May 2026 - Present",
    details: [
      "Developed Environments Explorer, an internal tool to visualize component test environments.",
      "Completed 22+ feature requests and resolved database issues using FastAPI, MongoDB, Python, and React.",
    ],
  },
  {
    id: "dfa",
    navLabel: "Design for America",
    title: "Design for America",
    location: "Austin, TX",
    role: "Communications Director",
    date: "Nov 2025 - Present",
    details: [
      "Led Design for America’s recruitment and public presence through branding, social media, and outreach events.",
      "Explored how Keep Austin Fed could identify, attract, and retain food contributors in a competitive landscape.",
      "Redesigned the food contributor newsletter to improve contributor engagement and communicate impact.",
    ],
  },
  {
    id: "fri",
    navLabel: "Freshman Research Initiative",
    title: "Freshman Research Initiative",
    location: "Austin, TX",
    role: "Medical Robotics & Haptics Researcher",
    date: "Jan 2026 - Present",
    details: [
      "Prototyped a wearable closed-loop vibrotactile cueing system to address freezing of gait episodes in Parkinson’s patients using ESP32, IMU, and haptic drivers.",
      "Implemented gait detection and cadence-matched cueing logic in C++, triggering alternating left-right vibration upon a 50% cadence drop or 2-second step absence.",
    ],
  },
  {
    id: "longhorn-devs",
    navLabel: "Longhorn Developers",
    title: "Longhorn Developers",
    location: "Austin, TX",
    role: "2x Product Lead",
    date: "Sep 2025 - Present",
    details: [
      "Led product strategy for Longhorn Studies and Spark Plus, while managing two fellows and collaborating with UT Enterprise Technology.",
      "Shipped a conversational AI agent on UT Spark to connect users to researchers, labs, and grants.",
      "Conducted 10+ user interviews and testing sessions to define MVP scope for Longhorn Studies.",
    ],
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahasra Tummala" },
      {
        name: "description",
        content:
          "Sahasra Tummala — R&D Intern at Sandia National Labs. CS & Design Student at UT Austin.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteFrame>
      <SiteHeader />

      <main className="site-main mx-auto w-full max-w-6xl px-6 pt-14 md:pt-18">
        <HeroSection />
        <WorkSection />
        <ProjectsSection />
        <BookshelfSection />
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}

function HeroSection() {
  return (
    <section className="home-hero mb-12 md:mb-16">
      <div className="home-hero__copy">
        <h1 className="home-name text-foreground tracking-tighter">
          Sahasra Tummala
        </h1>
        <div className="home-hero__details uppercase tracking-[0.18em] font-small text-muted-foreground">
          <span>
            <span className="mr-2 text-accent">[1]</span>R&amp;D Intern at
            Sandia
          </span>
          <span>
            <span className="mr-2 text-accent">[2]</span>CS &amp; Design at UT
            Austin
          </span>
          <span>
            <span className="mr-2 text-accent">[3]</span>Founder of{" "}
            <a
              href="https://voiceoffrisco.com"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              VOF
            </a>
          </span>
        </div>
      </div>

      <SessionStamp />
    </section>
  );
}

function SessionStamp() {
  const [variant, setVariant] = useState<StampVariant | null>(null);
  const [reveal, setReveal] = useState<RevealStamp | null>(null);
  const [flipPhase, setFlipPhase] = useState<FlipPhase>("idle");
  const didSelectStarter = useRef(false);

  useEffect(() => {
    if (didSelectStarter.current) return;
    didSelectStarter.current = true;
    setVariant(getStarterStamp());

    Object.values(revealStamps).forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  const commitReveal = () => {
    if (!variant) return;
    setReveal(getRandomRevealStamp(variant));
  };

  const handleReveal = () => {
    if (!variant || reveal || flipPhase !== "idle") return;

    window.setTimeout(playStampFlipSound, 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      commitReveal();
      return;
    }

    window.requestAnimationFrame(() => {
      setFlipPhase("out");
    });
  };

  const handleFlipEnd = () => {
    if (flipPhase === "out") {
      commitReveal();
      setFlipPhase("in");
    } else if (flipPhase === "in") {
      setFlipPhase("idle");
    }
  };

  const displayedStamp = reveal
    ? revealStamps[reveal]
    : variant
      ? stampVariants[variant]
      : null;

  return (
    <button
      type="button"
      className={`session-stamp session-stamp--flip-${flipPhase} ${reveal ? "session-stamp--revealed" : ""}`}
      data-variant={reveal ?? variant ?? undefined}
      disabled={!variant || Boolean(reveal) || flipPhase !== "idle"}
      aria-label={
        reveal
          ? `${revealStamps[reveal].alt} revealed`
          : "Click to reveal a stamp"
      }
      onClick={handleReveal}
      onAnimationEnd={handleFlipEnd}
    >
      {displayedStamp ? (
        <img
          src={displayedStamp.src}
          alt={displayedStamp.alt}
          className="session-stamp__image"
          draggable={false}
        />
      ) : null}
      <span className="sr-only" aria-live="polite">
        {reveal ? `${revealStamps[reveal].alt} revealed` : ""}
      </span>
    </button>
  );
}

function WorkSection() {
  const [activeWork, setActiveWork] =
    useState<(typeof workItems)[number]["id"]>("sandia");

  const selected = useMemo(
    () => workItems.find((item) => item.id === activeWork) ?? workItems[0],
    [activeWork],
  );

  return (
    <section id="work" className="work-section section-scroll-target">
      <div className="section-rule-heading">
        <h2>Work</h2>
        <span aria-hidden="true" />
      </div>

      <div className="work-panel">
        <div className="work-select">
          <label htmlFor="work-select" className="sr-only">
            Select Work Experience
          </label>
          <select
            id="work-select"
            value={selected.id}
            onChange={(event) =>
              setActiveWork(
                event.target.value as (typeof workItems)[number]["id"],
              )
            }
          >
            {workItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.navLabel}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" className="work-select__icon" />
        </div>

        <aside className="work-sidebar" aria-label="Work experience">
          {workItems.map((item) => {
            const isActive = item.id === selected.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`work-sidebar__item ${isActive ? "work-sidebar__item--active" : ""}`}
                aria-pressed={isActive}
                onClick={() => setActiveWork(item.id)}
              >
                {item.navLabel}
              </button>
            );
          })}
        </aside>

        <article className="work-detail">
          <div className="work-detail__header">
            <h3>
              {selected.role} <span>@ {selected.title}</span>
            </h3>
            <p>{selected.date}</p>
          </div>

          <ul className="work-detail__list">
            {selected.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lockedHeight, setLockedHeight] = useState<number>();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const lockHeight = () => {
      setLockedHeight(undefined);
      window.requestAnimationFrame(() => {
        if (sectionRef.current) {
          setLockedHeight(sectionRef.current.offsetHeight);
        }
      });
    };

    const images = Array.from(section.querySelectorAll("img"));
    const pendingImages = images.filter((image) => !image.complete);
    pendingImages.forEach((image) =>
      image.addEventListener("load", lockHeight, { once: true }),
    );

    if (pendingImages.length === 0) lockHeight();
    window.addEventListener("resize", lockHeight);

    return () => {
      window.removeEventListener("resize", lockHeight);
      pendingImages.forEach((image) =>
        image.removeEventListener("load", lockHeight),
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section section-scroll-target mt-12 md:mt-16"
      style={
        lockedHeight ? { height: lockedHeight, overflow: "clip" } : undefined
      }
    >
      <div className="section-rule-heading">
        <h2>Projects</h2>
        <span aria-hidden="true" />
      </div>

      <div className="project-masonry gap-y-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-item group flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer mb-6 break-inside-avoid"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden rounded-md">
              <img
                src={project.img}
                loading="lazy"
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            {/* Always visible details */}
            <div className="flex flex-col pt-3">
              <p className="text-xs uppercase tracking-wider text-accent font-medium">
                {project.tag}
              </p>
              <div className="mt-1 flex items-center gap-1">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Hover-only description & awards */}
            <div className="project-item__details grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
              <div className="overflow-hidden">
                {/* pt-1 keeps it tightly nested under the title, matching the original layout rhythm */}
                <div className="flex flex-col pt-1">
                  <p className="text-sm opacity-80">{project.subtitle}</p>
                  {"award" in project && project.award && (
                    <p className="mt-1 text-xs leading-relaxed opacity-60">
                      {project.award}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function BookshelfSection() {
  return (
    <section
      id="bookshelf"
      className="bookshelf-section section-scroll-target mt-12 md:mt-16"
    >
      <div className="section-rule-heading">
        <h2>Bookshelf</h2>
        <span aria-hidden="true" />
      </div>

      <div className="bookshelf-grid">
        <article className="bookshelf-card">
          <div className="bookshelf-card__cover bookshelf-card__cover--book">
            <img
              src={housekeeperProfessorCover}
              alt="Cover of The Housekeeper and the Professor"
              loading="lazy"
            />
          </div>
          <h3>The Housekeeper and the Professor</h3>
          <p className="bookshelf-card__byline">Yōko Ogawa</p>
        </article>

        <article className="bookshelf-card">
          <div className="bookshelf-card__cover bookshelf-card__cover--book">
            <img
              src={devilWearsPradaPoster}
              alt="The Devil Wears Prada poster"
              loading="lazy"
            />
          </div>
          <h3>The Devil Wears Prada</h3>
        </article>

        <article className="bookshelf-listening">
          <div className="bookshelf-card__cover bookshelf-card__cover--spotify">
            <iframe
              title="Amsham on Spotify"
              className="bookshelf-listening__embed"
              src="https://open.spotify.com/embed/track/0Dt5EqEckM8jcfMYEdlx2Z?utm_source=generator&si=4eb53fe451ed49e7"
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="bookshelf-listening__copy">
            <h3>Amsham</h3>
            <p>Aksomaniac, Bhumi, Circle Tone, and M.H.R</p>
          </div>
        </article>
      </div>
    </section>
  );
}
