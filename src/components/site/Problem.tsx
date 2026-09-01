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
  { range: "10 ppm", label: "Common occupational limit reference", tone: "bg-brand-orange" },
  { range: "100 ppm +", label: "Loss of smell / immediately dangerous range", tone: "bg-danger" },
];

export function Problem() {
  return (
    <Section id="problem" className="border-b border-border bg-background">
      <SectionHeader
        num="01"
        label="The Problem"
        accent="blue"
        title="Personal H₂S exposure awareness remains a gap"
        intro="The objective of this project is not to replace certified detection equipment, but to provide an additional, low-cost personal exposure-awareness layer for industrial workers."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <figure>
            <img
              src={problemScene}
              alt="Industrial plant area where hydrogen sulphide exposure can occur"
              loading="lazy"
              className="aspect-[4/3] w-full border border-border object-cover shadow-[0_24px_50px_-34px_rgba(15,30,60,0.55)]"
            />
            <figcaption className="mt-3 border-l-2 border-brand-blue pl-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
              Typical process area where H₂S may be released
            </figcaption>
          </figure>

          <div className="mt-10">
            <p className="eyebrow">Indicative exposure reference</p>
            <ul className="mt-4 divide-y divide-border border-t border-border">
              {scale.map((s) => (
                <li key={s.range} className="flex items-center gap-4 py-4">
                  <span className={`h-8 w-1.5 shrink-0 ${s.tone}`} />
                  <span className="font-mono text-sm font-semibold text-brand-navy">{s.range}</span>
                  <span className="ml-auto text-right text-xs text-muted-foreground">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="space-y-10">
          {points.map((p, i) => (
            <li key={p.t} className="grid grid-cols-[auto_1fr] gap-6">
              <span
                className={
                  "font-mono text-lg font-bold leading-none " +
                  (i % 2 === 0 ? "text-brand-blue" : "text-brand-orange")
                }
              >
                {p.n}
              </span>
              <div className="border-t border-border pt-1">
                <h3 className="text-lg font-semibold leading-snug text-brand-navy">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
