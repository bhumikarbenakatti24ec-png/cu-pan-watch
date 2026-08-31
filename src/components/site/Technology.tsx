import exploded from "@/assets/exploded.jpg";
import patchCompare from "@/assets/patch-compare.jpg";
import { FlowChain, GlassCard, Reveal, Section, SectionHeader, Tag } from "./primitives";

const components = [
  { name: "Cu-PAN chemical sensing layer", desc: "The reactive layer that produces a visible color response on H₂S exposure." },
  { name: "Reference / control patch", desc: "A non-reactive control used as a baseline for lighting and environmental drift." },
  { name: "Protective diffusive membrane", desc: "Protects the chemistry while allowing gas to diffuse to the sensing layer." },
  { name: "Wearable substrate", desc: "Flexible carrier that holds the patches securely against the band." },
  { name: "Image / color acquisition", desc: "A compact camera or color sensor that captures the patch state." },
  { name: "Microcontroller & electronics", desc: "Low-power control, sampling scheduling and on-device processing." },
  { name: "Wireless communication", desc: "Links the band to the companion mobile application." },
  { name: "Mobile application", desc: "Displays status, exposure trend and alert notifications." },
  { name: "ML-based interpretation", desc: "Maps color features plus environmental data to a risk indication." },
];

const cupanFlow = [
  "H₂S exposure",
  "Sensing material",
  "Color change",
  "Image capture",
  "Processing",
  "ML",
  "Risk alert",
];

const mlPipeline = [
  { step: "Camera / image", note: "Patch image captured on a schedule" },
  { step: "Preprocessing", note: "Cropping, white balance, noise reduction" },
  { step: "Color feature extraction", note: "RGB / HSV / Lab descriptors" },
  { step: "Reference comparison", note: "Sensing patch measured against control" },
  { step: "Temp + humidity", note: "Environmental features joined to the vector" },
  { step: "ML model", note: "Trained on controlled experimental data" },
  { step: "Risk classification", note: "Safe / caution / danger indication" },
  { step: "Alert", note: "Wearable and mobile notification" },
];

export function Technology() {
  return (
    <>
      <Section id="solution">
        <SectionHeader
          eyebrow="Our Solution"
          title="Introducing BAASC"
          intro="A proposed wearable system in which a chemical sensing patch reacts to H₂S with a visible color change, an on-band imaging element captures that change, and a machine-learning layer interprets it alongside environmental data to produce an early-warning risk indication."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="glass overflow-hidden rounded-3xl p-4">
            <img
              src={exploded}
              alt="Exploded conceptual view of the BAASC wearable band showing membrane, sensing patch, reference patch, substrate, electronics and battery layers"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-2xl object-cover"
            />
            <p className="mt-4 text-center font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Conceptual layer stack — not a manufactured product
            </p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {components.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i * 45}>
                <GlassCard className="h-full">
                  <span className="font-mono text-[0.65rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-sm font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="technology" className="border-y border-border bg-surface/40">
        <SectionHeader
          eyebrow="Chemistry"
          title="Cu-PAN: The Chemical Sensing Layer"
          intro="Cu-PAN refers to a copper complex of 1-(2-pyridylazo)-2-naphthol immobilised on a porous carrier. The design intent is that contact with H₂S alters the copper complex and produces a visible optical change in the patch that can be measured by imaging rather than by an electrochemical cell."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="glass overflow-hidden rounded-3xl p-4">
            <img
              src={patchCompare}
              alt="Macro comparison of a sensing patch before and after exposure to hydrogen sulfide"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full rounded-2xl object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <div>
                <Tag tone="muted">Before exposure</Tag>
              </div>
              <div>
                <Tag tone="warn">After exposure</Tag>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <GlassCard className="h-full">
              <p className="eyebrow">Interactive concept</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A simplified animation of the intended response. Actual response magnitude, timing
                and reversibility are exactly what the project is characterising experimentally.
              </p>
              <div className="mt-7 flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-2xl border border-border" style={{ backgroundColor: "oklch(0.86 0.11 92)" }} />
                  <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Baseline
                  </p>
                </div>
                <span aria-hidden className="text-2xl text-primary/70">→</span>
                <div className="text-center">
                  <div
                    className="mx-auto h-24 w-24 rounded-2xl border border-border"
                    style={{ animation: "baasc-patch 4s ease-in-out infinite" }}
                  />
                  <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    On H₂S contact
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                No detection limits, response times or concentration thresholds are claimed here.
                Those values will be reported only once measured under controlled conditions.
              </p>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-10">
          <FlowChain steps={cupanFlow} />
        </Reveal>
      </Section>

      <Section id="reference">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Control Signal"
            title="Why a Reference Patch?"
            intro="A wearable colorimetric system does not live in a laboratory. Lighting, temperature, humidity, sweat and even the angle of the camera can shift how a color looks. A reference patch that does not react to H₂S provides a comparison signal, so the system can measure change relative to a control instead of trusting an absolute color."
          />

          <Reveal delay={80} className="glass rounded-3xl p-7">
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
                <div className="mx-auto h-16 w-16 rounded-xl" style={{ backgroundColor: "oklch(0.55 0.06 85)" }} />
                <p className="mt-3 font-display text-sm font-semibold">Sensing patch</p>
                <p className="mt-1 text-xs text-muted-foreground">Reacts to H₂S</p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/40 p-5 text-center">
                <div className="mx-auto h-16 w-16 rounded-xl" style={{ backgroundColor: "oklch(0.86 0.02 90)" }} />
                <p className="mt-3 font-display text-sm font-semibold">Reference patch</p>
                <p className="mt-1 text-xs text-muted-foreground">Non-reactive control</p>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              {["Observed color response", "Reference response", "Temperature", "Humidity"].map((x) => (
                <div
                  key={x}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface-2/50 px-4 py-2.5 text-sm"
                >
                  <span>{x}</span>
                  <span className="font-mono text-xs text-primary">input</span>
                </div>
              ))}
              <div className="pt-2 text-center text-primary/70">↓</div>
              <div className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-center font-display text-sm font-semibold text-primary">
                Compensated interpretation
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="environment" className="border-y border-border bg-surface/40">
        <SectionHeader
          eyebrow="Environmental Compensation"
          title="Designed for Real-World Conditions"
          intro="The same chemical response can appear different under different conditions. The system design therefore includes on-board temperature and humidity sensing, so that environmental context travels with every measurement."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { cond: "25 °C / 40 % RH", label: "Color response A", tone: "border-primary/30" },
            { cond: "35 °C / 80 % RH", label: "Color response B", tone: "border-warn/30" },
          ].map((c, i) => (
            <Reveal key={c.cond} delay={i * 100}>
              <div className={`glass h-full rounded-2xl border p-7 ${c.tone}`}>
                <p className="font-mono text-lg text-foreground">{c.cond}</p>
                <p className="mt-2 text-primary/70">↓</p>
                <p className="mt-2 font-display text-xl font-semibold">{c.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Identical exposure, different ambient conditions — an illustrative example of why
                  raw color alone is not sufficient.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-8">
          <div className="glass rounded-2xl border-l-2 border-l-warn p-6">
            <p className="eyebrow">Honest scope</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We do not claim environmental effects have been eliminated. Reference-patch comparison
              and environmental sensing are the design approach we are researching to reduce their
              influence; quantifying how well it works is ongoing work.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="ml">
        <SectionHeader
          eyebrow="Machine Learning"
          title="From Color Change to Intelligent Detection"
          intro="Rather than reading a single color value, the intended pipeline treats each measurement as a feature vector: patch color, reference color and environmental context together. A model trained on controlled experimental data can then learn patterns across concentrations and conditions."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mlPipeline.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 55}>
              <GlassCard className="h-full">
                <span className="font-mono text-[0.65rem] text-primary">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-sm font-semibold">{p.step}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.note}</p>
              </GlassCard>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120} className="mt-10">
          <div className="glass rounded-3xl p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">Conceptual dashboard — illustrative only</p>
              <Tag tone="muted">No measured values shown</Tag>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { k: "H₂S concentration", v: "—", u: "controlled input" },
                { k: "Color response", v: "—", u: "ΔE feature" },
                { k: "Temperature", v: "—", u: "°C" },
                { k: "Humidity", v: "—", u: "% RH" },
                { k: "Prediction", v: "—", u: "risk class" },
              ].map((m) => (
                <div key={m.k} className="rounded-xl border border-border bg-surface-2/40 p-4">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {m.k}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-primary">{m.v}</p>
                  <p className="mt-1 text-[0.7rem] text-muted-foreground">{m.u}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex h-32 items-end gap-1.5 rounded-xl border border-border bg-surface-2/30 p-4">
              {Array.from({ length: 28 }).map((_, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-primary/30"
                  style={{ height: `${18 + Math.abs(Math.sin(i / 3.2)) * 70}%` }}
                />
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Placeholder trend visualisation. Real experimental curves will replace this once
              dataset collection and validation are complete.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
