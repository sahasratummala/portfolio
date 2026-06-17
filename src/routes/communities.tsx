import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteFrame, SiteHeader } from "@/components/site-chrome";
import { communities } from "@/lib/site-data";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/communities")({
  head: () => ({
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

      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="py-18">
          <div className="community-layout">
            <div className="community-grid" role="list" aria-label="Communities">
              {communities.map((community, index) => {
                const isActive = activeCommunity === community.id;
                return (
                  <button
                    key={community.id}
                    type="button"
                    role="listitem"
                    aria-pressed={isActive}
                    aria-label={community.label}
                    onMouseEnter={() => setActiveCommunity(community.id)}
                    onFocus={() => setActiveCommunity(community.id)}
                    onClick={() => setActiveCommunity(community.id)}
                    className={`community-tile community-tile--${index + 1} ${isActive ? "community-tile--active" : ""
                      }`}
                  >
                    {community.image && (
                      <img src={community.image} alt="" className="community-tile__image" loading="lazy" />
                    )}
                    <div className="community-tile__scrim" />
                    <div className="community-tile__label">{community.label}</div>
                  </button>
                );
              })}
            </div>

            <aside className="community-copy">
              <h3 className="community-copy__title">{selected.title}</h3>
              <div className="community-copy__body">{selected.description}</div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </SiteFrame>
  );
}