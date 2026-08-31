import wastewater from "@/assets/app-wastewater.jpg";
import oilgas from "@/assets/app-oilgas.jpg";
import confined from "@/assets/app-confined.jpg";
import agri from "@/assets/app-agri.jpg";
import { GlassCard, Reveal, Section, SectionHeader } from "./primitives";

const apps = [
  { t: "Wastewater treatment", d: "Clarifiers, digesters and pump stations where H₂S can accumulate.", img: wastewater },
  { t: "Sewage & sanitation work", d: "Municipal maintenance crews operating in and around sewer networks.", img: confined },
  { t: "Oil & gas environments", d: "Upstream and process areas where sour service is a known hazard.", img: oilgas },
  { t: "Agricultural / manure", d: "Slurry pits, lagoons and livestock housing during agitation and pump-out.", img: agri },
];

const secondary = [
  { t: "Industrial facilities", d: "Plant maintenance and shutdown work with variable exposure risk." },
  { t: "Confined-space work", d: "Tanks, vessels and pits where atmosphere can change during entry." },
  { t: "Chemical & process industries", d: "Areas where H₂S is a by-product of the process stream." },
];

const impact = [
  { t: "Affordability", d: "A colorimetric patch plus imaging is intended to be lower-cost than per-worker certified instrumentation." },
  { t: "Portability", d: "Wrist-worn, no sampling pump, no reagent handling in the field." },
  { t: "Continuous concept", d: "Designed around repeated automatic sampling across a shift." },
  { t: "Intelligent interpretation", d: "Environmental context and reference comparison built into the reading." },
  { t: "Wearable design", d: "Light enough to be worn by default rather than collected from a store." },
  { t: "Early warning", d: "The aim is awareness before symptoms, supporting existing site procedures." },
];

export function Applications() {
  return (
    <>
      <Section id="applications" className="border-y border-border bg-surface/40">
        <SectionHeader
          eyebrow="Applications"
          title="Where BAASC Could Make a Difference"
          intro="These are the environments the architecture is being designed for. They are target application areas under study — not deployments."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {apps.map((a, i) => (
            <Reveal key={a.t} delay={i * 70}>
              <article className="group relative h-72 overflow-hidden rounded-2xl border border-border">
                <img
                  src={a.img}
                  alt={a.t}
                  loading="lazy"
                  width={900}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-lg font-semibold">{a.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {secondary.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <GlassCard className="h-full">
                <h3 className="font-display text-sm font-semibold">{s.t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="impact">
        <SectionHeader
          eyebrow="Impact"
          title="Technology With a Safety Purpose"
          intro="BAASC aims to make personal H₂S exposure awareness more accessible through a low-cost wearable and an intelligent sensing architecture — so that continuous personal monitoring is not limited to the best-equipped sites."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((f, i) => (
            <Reveal key={f.t} delay={i * 55}>
              <GlassCard className="h-full">
                <span className="block h-px w-10 bg-primary/60" />
                <h3 className="mt-4 font-display text-base font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
