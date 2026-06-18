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
          <div className="flex flex-nowrap justify-center gap-4 text-[11px] uppercase tracking-[0.2em] font-small text-muted-foreground">
            <span><span className="text-accent mr-2">[1]</span>R&amp;D Intern at Sandia</span>
            <span><span className="text-accent mr-2">[2]</span>CS &amp; Design at UT Austin</span>
            <span><span className="text-accent mr-2">[3]</span>Previously: Founder of <a href="https://voiceoffrisco.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">VOF</a></span>
          </div>
        </section>

        {/* Experience */}
        <section>
          <div className="bg-card border border-border shadow-lg shadow-accent/10 rounded-lg p-6 md:p-8 transition-colors hover:border-accent">
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

          {/* Supplementary experience */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="bg-card border border-border shadow-md shadow-accent/5 rounded-lg p-4 sm:col-span-2 transition-colors hover:border-accent">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <h3 className="text-sm font-display font-bold text-foreground tracking-tight">
                    Freshman Research Initiative
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground font-bold">
                    Austin, TX · Jan 2026 — Present
                  </p>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                  Medical Robotics &amp; Haptics Researcher
                </p>
                <p className="text-sm leading-snug text-muted-foreground">
                  Prototyped a wearable closed-loop vibrotactile cueing system to address freezing of gait episodes in Parkinson&rsquo;s patients.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border shadow-md shadow-accent/5 rounded-lg p-4 transition-colors hover:border-accent">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-display font-bold text-foreground tracking-tight">
                    Longhorn Developers
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground font-bold">
                    Austin, TX · Sep 2025 — Present
                  </p>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                  Product Lead
                </p>
                <p className="text-[0.85rem] leading-snug text-muted-foreground">
                  Leading product strategy for Longhorn Studies and Spark Plus.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border shadow-md shadow-accent/5 rounded-lg p-4 transition-colors hover:border-accent">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-display font-bold text-foreground tracking-tight">
                    Design for America
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground font-bold">
                    Austin, TX · Nov 2025 — Apr 2026
                  </p>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                  Member &rarr; Communications Director
                </p>
                <p className="text-[0.85rem] leading-snug text-muted-foreground">
                  Leading DFA&rsquo;s recruitment and public presence through branding, social media, and outreach events.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}