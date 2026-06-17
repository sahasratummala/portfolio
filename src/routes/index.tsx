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
      { property: "og:title", content: "Sahasra Tummala" },
      {
        property: "og:description",
        content:
          "R&D Intern at Sandia National Labs, studying CS & Design at UT Austin.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteFrame>
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl px-6 pb-6 pt-12 md:pt-20">
        <section className="space-y-5 border-b border-border pb-14">
          <h1 className="home-name">Sahasra Tummala</h1>
          <p className="home-subtitle">
            R&amp;D Intern at <span className="text-foreground">Sandia National Labs</span>, studying{" "}
            <span className="text-foreground">CS &amp; Design</span> at UT Austin.
          </p>
        </section>

        <section className="pt-12">
          <p className="section-kicker mb-6">Experience</p>
          <div className="space-y-3 border-l-2 border-accent pl-5">
            <h2 className="text-2xl font-display leading-tight text-foreground sm:text-3xl">
              Sandia National Labs
            </h2>
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
              R&amp;D Intern · Albuquerque, NM · May 2026 — Present
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Developed <span className="text-foreground">EnvEx</span>, an internal tool for nuclear deterrence engineers to visualize component test environments.
            </p>
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
              React · FastAPI · Python · MongoDB · Docker · OpenShift · Azure
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}
