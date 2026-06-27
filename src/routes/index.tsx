import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteFooter, SiteFrame, SiteHeader } from "@/components/site-chrome";
import { projects } from "@/lib/site-data";

const workItems = [
  {
    id: "sandia",
    navLabel: "Sandia",
    title: "Sandia National Labs",
    location: "Albuquerque, NM",
    role: "R&D Intern",
    date: "May 2026 - Present",
    details: [
      "Developed EnvEx, an internal tool for mechanical engineers to visualize component test environments.",
      "Developed with React, FastAPI, Python, MongoDB, Docker, OpenShift, and Azure.",
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
    role: "Product Lead",
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
          "Sahasra Tummala — R&D Intern at Sandia National Labs, studying CS & Design at UT Austin.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteFrame>
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-6 pt-14 md:pt-18">
        <HeroSection />
        <WorkSection />
        <ProjectsSection />
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}

function HeroSection() {
  return (
    <section className="mx-auto mb-12 max-w-3xl text-center">
      <h1
        className="home-name mb-5 text-foreground tracking-tighter"
        style={{ fontSize: "clamp(40px, 8vw, 72px)" }}
      >
        Sahasra Tummala
      </h1>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] font-small text-muted-foreground">
        <span>
          <span className="mr-2 text-accent">[1]</span>R&amp;D Intern at Sandia
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
    </section>
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
    <section id="work" className="scroll-mt-24">
      <div className="section-rule-heading">
        <h2>Work</h2>
        <span aria-hidden="true" />
      </div>

      <div className="work-panel">
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
  return (
    <section id="projects" className="mt-14 scroll-mt-24 md:mt-16">
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
            className="group flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer mb-6 break-inside-avoid"
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
            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
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
