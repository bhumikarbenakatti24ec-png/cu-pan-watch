import heroWristband from "@/assets/hero-wristband.jpg";
import { Tag } from "./primitives";

const readouts = [
  { label: "H₂S Detected", value: "Monitoring", tone: "text-primary" },
  { label: "Risk Level", value: "Low", tone: "text-safe" },
  { label: "Temperature", value: "26.4 °C", tone: "text-foreground" },
  { label: "Humidity", value: "58 % RH", tone: "text-foreground" },
  { label: "Alert Status", value: "Standby", tone: "text-warn" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Tag>Research prototype in development</Tag>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            <span className="text-gradient">Smart H₂S Detection.</span>
            <br />
            Built for the Real World.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            BAASC is developing a wearable H₂S exposure detection system that combines Cu-PAN
            chemical sensing, environmental compensation and intelligent image-based analysis to
            provide an accessible early-warning solution.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technology"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              Explore Our Technology
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              See How It Works
            </a>
          </div>
          <p className="mt-8 max-w-md font-mono text-xs leading-relaxed text-muted-foreground/80">
            Student-led deep-tech R&amp;D. Not a certified gas detector and not a replacement for
            approved industrial H₂S monitoring equipment.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={heroWristband}
              alt="Concept render of the BAASC industrial safety wristband with a chemical sensing patch, worn on a worker's wrist"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/25 to-transparent"
              style={{ animation: "baasc-scan 6s linear infinite" }}
            />
          </div>

          {readouts.slice(0, 2).map((r, i) => (
            <div
              key={r.label}
              className={`glass absolute hidden w-40 rounded-xl p-3 sm:block ${
                i === 0 ? "-left-3 top-8" : "-right-3 top-1/3"
              }`}
              style={{ animation: `baasc-float ${7 + i * 2}s ease-in-out infinite` }}
            >
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                {r.label}
              </p>
              <p className={`mt-1 font-display text-sm font-semibold ${r.tone}`}>{r.value}</p>
            </div>
          ))}


          <div className="glass -mt-10 relative grid grid-cols-3 gap-3 rounded-2xl p-4">
            {readouts.slice(2).map((r) => (
              <div key={r.label}>
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {r.label}
                </p>
                <p className={`mt-1 font-display text-sm font-semibold ${r.tone}`}>{r.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
