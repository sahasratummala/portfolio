import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteFrame, SiteHeader } from "@/components/site-chrome";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sahasra Tummala" },
      {
        name: "description",
        content: "Selected projects by Sahasra Tummala across product, writing, research, and brand identity.",
      },
      { property: "og:title", content: "Projects — Sahasra Tummala" },
      {
        property: "og:description",
        content: "Selected projects by Sahasra Tummala across product, writing, research, and brand identity.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteFrame>
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-6 pb-6 pt-12 md:pt-20">
        <section className="pt-2">
          <div className="project-masonry">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  loading="lazy"
                  className="project-card__image"
                />
                <div className="project-card__overlay">
                  <p className="project-card__tag">{project.tag}</p>
                  <div className="flex items-center gap-2">
                    <h2 className="project-card__title">{project.title}</h2>
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </div>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}
