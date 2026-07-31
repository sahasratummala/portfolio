import { useEffect, useRef, useState } from "react";
import cherriesStamp from "@/assets/cherries-stamp.png";
import cupcakeStamp from "@/assets/cupcake-stamp.png";
import horizontalStamp from "@/assets/click-to-reveal-horizontal.png";
import juiceStamp from "@/assets/juice-stamp.png";
import lipstickStamp from "@/assets/lipstick-stamp.png";
import snoopyStamp from "@/assets/snoopy-stamp.png";
import squareStamp from "@/assets/square-stamp.png";
import teapotStamp from "@/assets/teapot-stamp.png";
import verticalStamp from "@/assets/click-to-reveal-vertical.png";
import whaleStamp from "@/assets/whale-stamp.png";

const stampVariants = {
  horizontal: { src: horizontalStamp, alt: "Click to reveal" },
  vertical: { src: verticalStamp, alt: "Click to reveal" },
  square: { src: squareStamp, alt: "Click to reveal" },
} as const;

const revealStamps = {
  cherries: { src: cherriesStamp, alt: "Cherries stamp" },
  cupcake: { src: cupcakeStamp, alt: "Cupcake stamp" },
  snoopy: { src: snoopyStamp, alt: "Snoopy and Woodstock stamp" },
  whale: { src: whaleStamp, alt: "Whale stamp" },
  lipstick: { src: lipstickStamp, alt: "Lipstick stamp" },
  juice: { src: juiceStamp, alt: "Juice stamp" },
  teapot: { src: teapotStamp, alt: "Teapot stamp" },
} as const;

type StampVariant = keyof typeof stampVariants;
type RevealStamp = keyof typeof revealStamps;
type FlipPhase = "idle" | "out" | "in";

function getStarterStamp(): StampVariant {
  const variants: StampVariant[] = ["horizontal", "vertical", "square"];
  const randomValue = window.crypto.getRandomValues(new Uint8Array(1))[0];

  return variants[Math.floor((randomValue / 256) * variants.length)];
}

function getRandomRevealStamp(variant: StampVariant): RevealStamp {
  if (variant === "horizontal") return "whale";
  if (variant === "square") {
    const choices: RevealStamp[] = ["cupcake", "teapot"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const choices: RevealStamp[] = ["cherries", "snoopy", "lipstick", "juice"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playStampFlipSound() {
  const AudioContextConstructor =
    window.AudioContext ??
    (
      window as typeof window & {
        webkitAudioContext?: typeof AudioContext;
      }
    ).webkitAudioContext;

  if (!AudioContextConstructor) return;

  try {
    const audioContext = new AudioContextConstructor();
    const duration = 0.16;
    const bufferLength = Math.floor(audioContext.sampleRate * duration);
    const buffer = audioContext.createBuffer(1, bufferLength, audioContext.sampleRate);
    const samples = buffer.getChannelData(0);
    let softenedNoise = 0;

    for (let index = 0; index < bufferLength; index += 1) {
      const noise = Math.random() * 2 - 1;
      const envelope = 1 - index / bufferLength;
      softenedNoise = softenedNoise * 0.55 + noise * 0.45;
      samples[index] = softenedNoise * envelope;
    }

    const source = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();
    const startTime = audioContext.currentTime;

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1050, startTime);
    filter.Q.setValueAtTime(0.7, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.16, startTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    source.buffer = buffer;
    source.connect(filter).connect(gain).connect(audioContext.destination);
    source.addEventListener("ended", () => void audioContext.close());
    source.start(startTime);
    source.stop(startTime + duration);
  } catch {
    // Audio is a small enhancement; the reveal still works if playback is blocked.
  }
}

export function SessionStamp() {
  const [variant, setVariant] = useState<StampVariant | null>(null);
  const [reveal, setReveal] = useState<RevealStamp | null>(null);
  const [flipPhase, setFlipPhase] = useState<FlipPhase>("idle");
  const didSelectStarter = useRef(false);

  useEffect(() => {
    if (didSelectStarter.current) return;
    didSelectStarter.current = true;
    setVariant(getStarterStamp());

    Object.values(revealStamps).forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  const handleReveal = () => {
    if (!variant || reveal || flipPhase !== "idle") return;

    window.setTimeout(playStampFlipSound, 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReveal(getRandomRevealStamp(variant));
      return;
    }

    window.requestAnimationFrame(() => setFlipPhase("out"));
  };

  const handleFlipEnd = () => {
    if (flipPhase === "out" && variant) {
      setReveal(getRandomRevealStamp(variant));
      setFlipPhase("in");
    } else if (flipPhase === "in") {
      setFlipPhase("idle");
    }
  };

  const displayedStamp = reveal
    ? revealStamps[reveal]
    : variant
      ? stampVariants[variant]
      : null;

  return (
    <button
      type="button"
      className={`session-stamp session-stamp--flip-${flipPhase} ${reveal ? "session-stamp--revealed" : ""}`}
      data-variant={reveal ?? variant ?? undefined}
      disabled={!variant || Boolean(reveal) || flipPhase !== "idle"}
      aria-label={reveal ? `${revealStamps[reveal].alt} revealed` : "Click to reveal a stamp"}
      onClick={handleReveal}
      onAnimationEnd={handleFlipEnd}
    >
      {displayedStamp && (
        <img
          src={displayedStamp.src}
          alt={displayedStamp.alt}
          className="session-stamp__image"
          draggable={false}
        />
      )}
    </button>
  );
}
