import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame, SiteFooter, SiteHeader } from "@/components/site-chrome";

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

      <main className="mx-auto w-full max-w-3xl px-6 pt-20 md:pt-24">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1
            className="home-name mb-6 text-foreground tracking-tighter"
            style={{ fontSize: "clamp(40px, 8vw, 72px)" }}
          >
            Sahasra Tummala
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
            <span><span className="text-accent mr-2">[1]</span>R&amp;D Intern at Sandia National Labs</span>
            <span><span className="text-accent mr-2">[2]</span>CS &amp; Design at UT Austin</span>
          </div>
        </section>

        {/* Experience */}
        <section>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-2xl font-display leading-tight text-foreground tracking-tight">
                  Sandia National Labs
                </h2>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-bold">
                  Albuquerque, NM · May 2026 — Present
                </p>
              </div>

              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                R&amp;D Intern
              </p>

              <p className="text-[1.05rem] leading-relaxed text-muted-foreground">
                Building <span className="text-foreground font-medium">EnvEx</span>,
                an internal tool for mechanical engineers to visualize
                component test environments through complex data streams.
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {['Azure', 'Docker', 'FastAPI', 'MongoDB', 'OpenShift', 'Python', 'React'].map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] font-medium bg-secondary text-secondary-foreground border border-border transition-colors hover:bg-accent/10 hover:border-accent/40 hover:text-accent cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}