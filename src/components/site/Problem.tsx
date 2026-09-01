import { Card, Section, SectionHeader } from "./primitives";

const points = [
  {
    t: "A toxic gas in refining environments",
    d: "Hydrogen sulphide can be present in petroleum refining, wastewater handling, confined spaces and other industrial operations. Even short exposure at elevated concentrations is hazardous.",
  },
  {
    t: "Exposure is not always noticed",
    d: "Odour perception is unreliable: at higher concentrations the sense of smell is rapidly deadened, so a worker may be exposed without immediately realising it.",
  },
  {
    t: "Existing detection has practical gaps",
    d: "Fixed-point detectors monitor locations rather than people, and personal electronic detectors can be expensive to deploy and maintain across a large workforce.",
  },
  {
    t: "Individual exposure history is rarely tracked",
    d: "Instantaneous alarms tell a worker what is happening now, but cumulative personal exposure across a shift is seldom recorded in an accessible way.",
  },
];

export function Problem() {
  return (
    <Section id="problem" className="border-b border-border">
      <SectionHeader
        eyebrow="01 — The Problem"
        title="Personal H₂S exposure awareness remains a gap"
        intro="The objective of this project is not to replace certified detection equipment, but to provide an additional, low-cost personal exposure-awareness layer for industrial workers."
      />

      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
        {points.map((p) => (
          <Card key={p.t} className="border-0">
            <h3 className="text-base font-semibold">{p.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
