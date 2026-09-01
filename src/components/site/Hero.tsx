import heroWorker from "@/assets/hero-worker.jpg.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative bg-steel text-steel-foreground">
      <div className="absolute inset-0">
        <img
          src={heroWorker.url}
          alt="Industrial worker wearing a safety helmet with headlamp in a low-light工业 environment"
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklab, var(--steel) 92%, transparent) 0%, color-mix(in oklab, var(--steel) 70%, transparent) 55%, color-mix(in oklab, var(--steel) 35%, transparent) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
          Industrial Safety Research Prototype
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.12] sm:text-4xl md:text-5xl">
          Smart H₂S Exposure Detection for Industrial Safety
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-foreground/80 sm:text-lg">
          A wearable, passive and low-cost H₂S exposure monitoring solution designed for industrial
          workers.
        </p>
        <p className="mt-4 max-w-2xl border-l-[3px] border-primary pl-4 text-sm text-steel-foreground/70">
          Developed as a research prototype for industrial safety applications at MRPL (Mangalore
          Refinery and Petrochemicals Limited).
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#solution"
            className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore the Solution
          </a>
          <a
            href="#technology"
            className="border border-steel-foreground/35 px-6 py-3 text-sm font-semibold text-steel-foreground transition-colors hover:bg-steel-foreground/10"
          >
            View the Technology
          </a>
        </div>
      </div>
    </section>
  );
}
