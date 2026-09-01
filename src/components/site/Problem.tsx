import { Section, SectionHeader } from "./primitives";
import problemScene from "@/assets/problem-scene.jpg";

const points = [
  {
    n: "01",
    t: "A toxic gas in refining environments",
    d: "Hydrogen sulphide can be present in petroleum refining, wastewater handling, confined spaces and other industrial operations. Even short exposure at elevated concentrations is hazardous.",
  },
  {
    n: "02",
    t: "Exposure is not always noticed",
    d: "Odour perception is unreliable: at higher concentrations the sense of smell is rapidly deadened, so a worker may be exposed without immediately realising it.",
  },
  {
    n: "03",
    t: "Existing detection has practical gaps",
    d: "Fixed-point detectors monitor locations rather than people, and personal electronic detectors can be expensive to deploy and maintain across a large workforce.",
  },
  {
    n: "04",
    t: "Individual exposure history is rarely tracked",
    d: "Instantaneous alarms tell a worker what is happening now, but cumulative personal exposure across a shift is seldom recorded in an accessible way.",
  },
];

const scale = [
  { range: "0.01–1.5 ppm", label: "Odour threshold", tone: "bg-safe" },
  { range: "10 ppm", label: "Common occupational limit reference", tone: "bg-warn" },
  { range: "100 ppm +", label: "Loss of smell / immediately dangerous range", tone: "bg-danger" },
];

export function Problem() {
  return (
    <Section id="problem" className="border-b border-border">
      <SectionHeader
        eyebrow="01 — The Problem"
        title="Personal H₂S exposure awareness remains a gap"
        intro="The objective of this project is not to replace certified detection equipment, but to provide an additional, low-cost personal exposure-awareness layer for industrial workers."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <figure className="border border-border bg-card">
            <img
              src={problemScene}
              alt="Industrial plant area where hydrogen sulphide exposure can occur"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="border-t border-border px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Typical process area where H₂S may be released
            </figcaption>
          </figure>

          <div className="mt-6 border border-border bg-surface">
            <p className="border-b border-border px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              Indicative exposure reference
            </p>
            <ul className="divide-y divide-border">
              {scale.map((s) => (
                <li key={s.range} className="flex items-center gap-3 px-4 py-3">
                  <span className={`h-2.5 w-2.5 shrink-0 ${s.tone}`} />
                  <span className="font-mono text-xs font-semibold">{s.range}</span>
                  <span className="ml-auto text-right text-xs text-muted-foreground">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="divide-y divide-border border border-border bg-card">
          {points.map((p) => (
            <li key={p.t} className="flex gap-5 px-6 py-6">
              <span className="font-mono text-sm font-semibold text-primary">{p.n}</span>
              <div>
                <h3 className="text-base font-semibold leading-snug">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
