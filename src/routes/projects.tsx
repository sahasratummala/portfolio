import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteFrame, SiteHeader } from "@/components/site-chrome";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [{ title: "Projects — Sahasra Tummala" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteFrame>
      <SiteHeader />

      <main className="site-main mx-auto w-full max-w-6xl px-6 pb-6 pt-12 min-[760px]:pt-20">
        <section className="pt-2">
          <div className="project-masonry gap-y-6">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-item group flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer mb-6 break-inside-avoid"
                data-reveal
                data-reveal-delay={(index % 3) * 65}
              >
                {/* Image Wrapper */}
                <div className="overflow-hidden rounded-md">
                  <img
                    src={project.img}
                    loading="lazy"
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Always visible details */}
                <div className="project-item__copy flex flex-col pt-3">
                  <p className="project-item__tag text-xs uppercase tracking-wider text-accent font-medium">
                    {project.tag}
                  </p>
                  <div className="project-item__title-row mt-1 flex items-center gap-1">
                    <h2 className="project-item__title text-base font-semibold">
                      {project.title}
                    </h2>
                    <ArrowUpRight className="project-item__icon h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Hover-only description & awards */}
                <div className="project-item__details grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    {/* pt-1 keeps it tightly nested under the title, matching the original layout rhythm */}
                    <div className="flex flex-col pt-1">
                      <p className="project-item__subtitle text-sm opacity-80">
                        {project.subtitle}
                      </p>
                      {"award" in project && project.award && (
                        <p className="project-item__award mt-1 text-xs leading-relaxed opacity-60">
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
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}
