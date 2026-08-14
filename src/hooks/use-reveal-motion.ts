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
      !("IntersectionObserver" in window) ||
      !("animate" in HTMLElement.prototype)
    ) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 759px)").matches;
    const distance = isMobile ? 10 : 18;
    const duration = isMobile ? 480 : 660;
    const runningAnimations = new Set<Animation>();

    const clearRevealStyles = (element: HTMLElement) => {
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
      element.style.removeProperty("will-change");
    };

    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = `translate3d(0, ${distance}px, 0)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const requestedDelay = Number(element.dataset.revealDelay ?? 0);
          const delay =
            isMobile || !Number.isFinite(requestedDelay)
              ? 0
              : Math.max(0, requestedDelay);
          element.style.willChange = "opacity, transform";
          const animation = element.animate(
            [
              {
                opacity: 0,
                transform: `translate3d(0, ${distance}px, 0)`,
              },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            {
              duration,
              delay,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "both",
            },
          );

          runningAnimations.add(animation);
          observer.unobserve(element);

          animation.addEventListener(
            "finish",
            () => {
              clearRevealStyles(element);
              animation.cancel();
              runningAnimations.delete(animation);
            },
            { once: true },
          );
        });
      },
      {
        rootMargin: isMobile ? "0px 0px -2% 0px" : "0px 0px -7% 0px",
        threshold: isMobile ? 0.01 : 0.06,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      runningAnimations.forEach((animation) => animation.cancel());
      elements.forEach(clearRevealStyles);
    };
  }, [rootRef]);
}
