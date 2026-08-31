import lab from "@/assets/lab.jpg";
import { FlowChain, GlassCard, Reveal, Section, SectionHeader, Tag } from "./primitives";

const stages = [
  { n: 1, t: "Material & chemical sensing research", s: "done" },
  { n: 2, t: "Cu-PAN sensing layer development", s: "active" },
  { n: 3, t: "Reference patch development", s: "active" },
  { n: 4, t: "Environmental testing", s: "planned" },
  { n: 5, t: "Image / color dataset collection", s: "planned" },
  { n: 6, t: "ML model development", s: "planned" },
  { n: 7, t: "Wearable prototype", s: "planned" },
  { n: 8, t: "Mobile application integration", s: "planned" },
  { n: 9, t: "Controlled validation", s: "planned" },
] as const;

const statusLabel = {
  done: { label: "Underway since inception", tone: "cyan" as const },
  active: { label: "In progress", tone: "cyan" as const },
  planned: { label: "Planned", tone: "muted" as const },
};

const tests = [
  "H₂S concentration response",
  "Temperature variation",
  "Humidity variation",
  "Lighting variation",
  "Selectivity / interference",
  "Repeatability",
  "Response time",
  "Recovery behaviour",
  "Calibration",
  "Wearability",
];

const buildSteps = [
  "Concept",
  "Lab prototype",
  "Wearable prototype",
  "Controlled testing",
  "ML integration",
  "Field validation",
  "Future product",
];

export function Research() {
  return (
    <>
      <Section id="research">
        <SectionHeader
          eyebrow="Research & Development"
          title="From Laboratory Prototype to Field-Ready Technology"
          intro="BAASC is an R&D journey, not a finished product. This roadmap describes the sequence we are working through, and we state plainly where each stage currently stands."
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 50}>
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-3xl font-bold text-primary/40">
                    {String(s.n).padStart(2, "0")}
                  </span>
                  <Tag tone={statusLabel[s.s].tone}>{statusLabel[s.s].label}</Tag>
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold leading-snug">{s.t}</h3>
              </GlassCard>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="testing" className="border-y border-border bg-surface/40">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Testing Programme"
              title="What we intend to measure"
              intro="A colorimetric wearable only earns trust through characterisation. These are the test axes defined for the project. Results will be published here as they are produced — none are being claimed in advance."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {tests.map((t) => (
                <li key={t}>
                  <Tag tone="muted">{t}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={80} className="overflow-hidden rounded-3xl border border-border">
            <img
              src={lab}
              alt="Researchers in a laboratory testing colorimetric chemical sensing membranes under a fume hood"
              loading="lazy"
              width={1280}
              height={864}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["Experimental response curves", "Environmental test matrix", "Laboratory documentation"].map(
            (p, i) => (
              <Reveal key={p} delay={i * 80}>
                <div className="glass flex h-44 flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 p-6 text-center">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                    Placeholder
                  </span>
                  <p className="mt-3 font-display text-sm font-semibold">{p}</p>
                  <p className="mt-2 text-xs text-muted-foreground">Reserved for future results</p>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </Section>

      <Section id="build">
        <SectionHeader
          eyebrow="Product Development"
          title="Built Step by Step"
          intro="Each phase only begins when the previous one produces evidence. That discipline is what separates a research prototype from a marketing claim."
          align="center"
        />
        <Reveal className="mt-10">
          <FlowChain steps={buildSteps} dense />
        </Reveal>
      </Section>
    </>
  );
}
