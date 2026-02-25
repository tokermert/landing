import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type FeatureKey = "procedural" | "seeded" | "exportable" | "instant";

const featureItems = [
  {
    key: "procedural" as FeatureKey,
    title: "Procedural",
    text: "Not presets. Infinite variations."
  },
  {
    key: "seeded" as FeatureKey,
    title: "Seeded",
    text: "Every shape is reproducible."
  },
  {
    key: "exportable" as FeatureKey,
    title: "Exportable",
    text: "Video, PNG or ready-to-use code."
  },
  {
    key: "instant" as FeatureKey,
    title: "Instant",
    text: "Generate in milliseconds."
  }
];

const audienceItems = [
  {
    title: "Designers",
    text: "Hero visuals, posters, branding systems."
  },
  {
    title: "Developers",
    text: "Backgrounds, shaders, WebGL experiments."
  },
  {
    title: "Creators",
    text: "Album art, loops, generative visuals."
  }
];

const showcaseVideos = ["/videos/showcase-1.webm", "/videos/showcase-2.webm", "/videos/showcase-3.webm"];
const tryNowUrl = "https://liquidorb.vercel.app/";

function FeatureIcon({ name }: { name: FeatureKey }) {
  if (name === "procedural") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 12c0-3.8 2.9-6.5 7.1-6.5 3.1 0 5.9 1.9 5.9 4.8 0 2.3-1.9 3.7-4.4 3.7-1.9 0-3.2 1-3.2 2.5 0 1.4 1.2 2.5 3 2.5 3.8 0 6.6-2.8 6.6-6.8" />
      </svg>
    );
  }

  if (name === "seeded") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="17.2" cy="7.4" r="1.3" />
      </svg>
    );
  }

  if (name === "exportable") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 7H6.5A2.5 2.5 0 0 0 4 9.5v8A2.5 2.5 0 0 0 6.5 20h11A2.5 2.5 0 0 0 20 17.5V15" />
        <path d="M12 4h8v8" />
        <path d="m20 4-9.2 9.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.7 2.8 5.3 13h5.2l-1.3 8.2L18.7 11h-5.2z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell relative overflow-x-hidden bg-base text-zinc-100">
      <div aria-hidden="true" className="ambient ambient-one" />
      <div aria-hidden="true" className="ambient ambient-two" />
      <div aria-hidden="true" className="grain-layer" />

      <header className="fixed left-6 top-6 z-50 sm:left-8">
        <p className="inline-flex items-center gap-3 text-lg font-semibold tracking-[0.14em] text-zinc-100 sm:text-xl">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#ff9c32] shadow-[0_0_18px_rgba(255,122,0,0.75)]" />
          bloblob
        </p>
      </header>

      <section className="mx-auto flex min-h-svh w-full max-w-[1200px] items-center px-5 pb-10 pt-24 sm:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <Reveal className="hero-media-shell h-[48vh] min-h-[360px] w-full overflow-hidden sm:h-[56vh] lg:h-[70vh]">
            <video className="hero-header-video" autoPlay loop muted playsInline preload="metadata" aria-label="Header liquid blob preview">
              <source src="/videos/header.webm" type="video/webm" />
            </video>
          </Reveal>

          <Reveal className="max-w-[520px]" delay={120}>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-zinc-500">A liquid asset generator.</p>
            <h1 className="text-6xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">
              bloblob
            </h1>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-zinc-300 sm:text-xl">
              Generate liquid visuals.
              <br />
              Export video, image or code.
              <br />
              100% free. No login required.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={tryNowUrl} className="button-accent" target="_blank" rel="noreferrer">
                Try it now <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-4 text-sm text-zinc-500">Free forever · Runs in your browser · No account</p>
          </Reveal>
        </div>
      </section>

      <section className="section-wrap px-5 py-20 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800/80 bg-surface/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.015)] sm:p-8 lg:p-10">
          <h2 className="mb-8 text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureItems.map((item, index) => (
              <Reveal
                key={item.title}
                className={`feature-card feature-${item.key} rounded-2xl border border-zinc-800/90 bg-[#0a0a0a] p-6`}
                delay={index * 80}
              >
                <div className="mb-6 flex items-center">
                  <span className="feature-icon">
                    <FeatureIcon name={item.key} />
                  </span>
                </div>
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-100">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="examples" className="px-5 py-0 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1400px]">
          <div className="showcase-grid">
            {showcaseVideos.map((src, index) => (
              <figure key={src} className="showcase-item">
                <video className="showcase-video" autoPlay loop muted playsInline preload="metadata" aria-label={`Showcase ${index + 1}`}>
                  <source src={src} type="video/webm" />
                </video>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800/80 bg-surface/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.015)] sm:p-8 lg:p-10">
          <h2 className="mb-8 text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">Who is this for</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {audienceItems.map((item, index) => (
              <Reveal key={item.title} className="audience-card rounded-2xl border border-zinc-800/90 bg-[#0a0a0a] p-6" delay={index * 80}>
                <span aria-hidden="true" className="mb-4 block h-px w-10 bg-gradient-to-r from-[#ff7a00] to-[#ffd84d]" />
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-100">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-zinc-500">Made for curious people.</p>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800/80 bg-surface/90 p-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.015)] sm:p-8 lg:p-10">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">Try it</h2>
          <p className="mt-4 text-sm text-zinc-500">Free forever · Runs in your browser · No account</p>
          <div className="mt-8 flex justify-center">
            <Link href={tryNowUrl} className="button-accent" target="_blank" rel="noreferrer">
              Try it now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800/80 bg-surface/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.015)] sm:p-8 lg:p-10">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">About the maker</h2>
          <div className="mt-8 max-w-[680px] space-y-5 text-lg leading-relaxed text-zinc-300">
            <p>Hi, I&apos;m Mert.</p>
            <p>
              I built bloblob as a small experiment to generate
              <br />
              liquid visuals instantly — without complex tools.
            </p>
            <p>
              Just something fun for designers and developers
              <br />
              who like making weird beautiful things.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://buymeacoffee.com/merttoker" className="button-accent" target="_blank" rel="noreferrer">
              Buy me a coffee ☕
            </Link>
            <Link href="mailto:mert@merttoker.com" className="button-muted">
              Contact <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="mt-4 text-sm text-zinc-500">Built for fun. Free forever.</p>
        </Reveal>
      </section>

      <footer className="border-t border-zinc-900 px-5 pb-10 pt-12 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <div>
            <p className="text-xl font-medium tracking-[-0.03em] text-zinc-100">bloblob</p>
            <p className="mt-2 text-zinc-500">A liquid asset generator.</p>
          </div>
        </div>
        <p className="mx-auto mt-12 w-full max-w-[1200px] text-xs uppercase tracking-[0.14em] text-zinc-600">
          © 2026 · made by mert toker
        </p>
      </footer>
    </main>
  );
}
