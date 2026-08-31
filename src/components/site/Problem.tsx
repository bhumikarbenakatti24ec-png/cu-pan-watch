import problemScene from "@/assets/problem-scene.jpg";
import { GlassCard, Reveal, Section, SectionHeader, Tag } from "./primitives";

const environments = [
  "Wastewater treatment",
  "Sewage systems",
  "Industrial facilities",
  "Oil & gas operations",
  "Manure & agricultural sites",
  "Confined spaces",
];

const methods = [
  {
    name: "Lead acetate",
    trade: "Simple and low cost, but typically single-use and better suited to indicative checks than continuous personal monitoring.",
  },
  {
    name: "Iodometric titration",
    trade: "A well-established laboratory method that requires reagents, sample handling and trained operators.",
  },
  {
    name: "Methylene blue / colorimetric",
    trade: "Sensitive laboratory chemistry, but generally involves sample preparation rather than wearable continuous use.",
  },
  {
    name: "Electrochemical sensors",
    trade: "Widely used and effective in certified instruments; involves calibration, cell lifetime, power and unit cost considerations.",
  },
  {
    name: "Metal-oxide / semiconductor",
    trade: "Compact and continuous, but can be sensitive to cross-interference and typically needs heating power.",
  },
  {
    name: "Optical / spectroscopic",
    trade: "High selectivity potential, generally with higher instrument cost and size than a wearable form factor allows.",
  },
];

const tradeoffs = [
  "Cost",
  "Portability",
  "Selectivity",
  "Environmental interference",
  "Maintenance",
  "Power requirements",
  "Wearable integration",
];

export function Problem() {
  return (
    <>
      <Section id="problem">
        <SectionHeader
          eyebrow="The Problem"
          title="An Invisible Threat"
          intro="Hydrogen sulfide (H₂S) is a toxic gas that can be present in a wide range of working environments. It can accumulate quickly in enclosed or poorly ventilated areas, and workers may have little indication of rising exposure while they continue working."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="overflow-hidden rounded-3xl border border-border">
            <img
              src={problemScene}
              alt="Illustrative industrial scene of a worker who has become unresponsive in a hazardous-gas environment while a colleague rushes to help"
              loading="lazy"
              width={1280}
              height={864}
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={80}>
              <GlassCard>
                <p className="eyebrow">Safety note</p>
                <p className="mt-3 text-lg font-medium leading-snug">
                  “Odor is not a reliable safety mechanism at dangerous concentrations.”
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  H₂S has a characteristic smell at low concentrations, but the sense of smell can
                  be dulled at higher concentrations. Relying on odor alone is widely recognised as
                  unsafe practice.
                </p>
              </GlassCard>
            </Reveal>
            <Reveal delay={140}>
              <GlassCard>
                <p className="eyebrow">Where it occurs</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {environments.map((e) => (
                    <li key={e}>
                      <Tag tone="muted">{e}</Tag>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  In these settings, exposure risk can change from minute to minute — which is why
                  continuous, personal exposure awareness matters alongside area monitoring.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section id="approaches" className="border-y border-border bg-surface/40">
        <SectionHeader
          eyebrow="Landscape"
          title="Why existing approaches have trade-offs"
          intro="Established H₂S detection methods work well for the purposes they were designed for. The gap BAASC studies is not effectiveness — it is the combination of low cost, wearability and continuous personal use."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((m, i) => (
            <Reveal key={m.name} delay={i * 60}>
              <GlassCard className="h-full">
                <h3 className="font-display text-base font-semibold">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.trade}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <div className="glass rounded-2xl p-7">
            <p className="eyebrow">Every method balances</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tradeoffs.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              BAASC positions itself in one specific corner of that trade-off space: a wearable,
              low-cost, image-based colorimetric architecture with intelligent interpretation —
              intended to complement, not replace, certified industrial detection equipment.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
