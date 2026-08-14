import { useEffect, useLayoutEffect, type RefObject } from "react";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function useRevealMotion(rootRef: RefObject<HTMLElement | null>) {
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.dataset.motionReady = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [rootRef]);
}
