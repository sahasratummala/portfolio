import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteFrame, SiteHeader } from "@/components/site-chrome";
import { communities } from "@/lib/site-data";
import aboutPortrait from "@/assets/about-portrait.jpeg.asset.json";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sahasra Tummala" },
      {
        name: "description",
        content: "About Sahasra Tummala — student, researcher, and designer at UT Austin.",
      },
      { property: "og:title", content: "About — Sahasra Tummala" },
      {
        property: "og:description",
        content: "About Sahasra Tummala — student, researcher, and designer at UT Austin.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [activeCommunity, setActiveCommunity] = useState<(typeof communities)[number]["id"]>(
    communities[0].id,
  );

  const selected = useMemo(
    () => communities.find((community) => community.id === activeCommunity) ?? communities[0],
    [activeCommunity],
  );

  return (
    <SiteFrame>
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-6 pb-6 pt-12 md:pt-20">
        <section className="grid gap-12 border-b border-border pb-18 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <div className="about-portrait-panel">
            <img
              src={aboutPortrait.url}
              alt="Sahasra Tummala standing beside a stone sculpture"
              className="about-portrait-panel__img"
              loading="lazy"
            />
          </div>

          <div className="space-y-7">
            <p className="font-mono-accent text-sm tracking-[0.04em] text-muted-foreground">
              92° and sunny in Austin, TX
            </p>

            <h1 className="hero-title">Hey, I’m Sahasra!</h1>

            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              <p>
                I’m currently pursuing my B.S. in{" "}
                <span className="text-foreground">Computer Science</span> and B.A. in{" "}
                <span className="text-foreground">Design</span> at{" "}
                <span className="text-foreground">UT Austin</span>, drawn to work that sits
                between systems, interaction, and communication.
              </p>
              <p>
                Right now I’m an{" "}
                <span className="text-foreground">R&amp;D Intern at Sandia National Labs</span>,
                building internal tools that make complicated engineering information easier to
                understand.
              </p>
              <p>
                Outside of that, I’m usually{" "}
                <span className="text-foreground">writing, designing brand systems, or
                researching wearable tech</span>{" "}
                — I care most about clarity, structure, and making thoughtful work feel simple on
                the surface.
              </p>
            </div>
          </div>
        </section>

        <section className="py-18">
          <div className="mb-8">
            <h2 className="section-title">A love letter to my communities,</h2>
            <p className="mt-3 text-[clamp(1.35rem,2.4vw,2rem)] text-muted-foreground">
              The humans who keep me growing <span className="text-accent">↗</span>
            </p>
          </div>

          <div className="community-layout">
            <div className="community-grid" role="list" aria-label="Communities">
              {communities.map((community, index) => (
                <button
                  key={community.id}
                  type="button"
                  role="listitem"
                  onMouseEnter={() => setActiveCommunity(community.id)}
                  onFocus={() => setActiveCommunity(community.id)}
                  onClick={() => setActiveCommunity(community.id)}
                  className={`community-tile ${activeCommunity === community.id ? "community-tile--active" : ""} community-tile--${index + 1}`}
                >
                  <div className="community-tile__scrim" />
                  <div className="community-tile__label">{community.label}</div>
                </button>
              ))}
            </div>

            <aside className="community-copy">
              <h3 className="community-copy__title">{selected.title}</h3>
              <p className="community-copy__body">{selected.description}</p>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}

