import { Section, SectionHeader } from "./primitives";

const layers = [
  {
    n: "01",
    name: "Permeable Layer",
    color: "oklch(0.88 0.03 245)",
    accent: "text-brand-blue",
    points: [
      "Allows H₂S gas to reach the sensing region.",
      "Provides basic physical protection for the patch.",
    ],
  },
  {
    n: "02",
    name: "H₂S Detecting Layer",
    color: "oklch(0.82 0.13 65)",
    accent: "text-brand-orange",
    points: [
      "Contains the chemical sensing material.",
      "Produces a visible colour change when exposed to H₂S.",
    ],
  },
  {
    n: "03",
    name: "Reference Layer",
    color: "oklch(0.78 0.08 205)",
    accent: "text-brand-teal",
    points: [
      "Provides reference colours for visual comparison.",
      "Helps the image-analysis system compensate for lighting and environmental variation.",
    ],
  },
];

export function Technology() {
  return (
    <Section id="technology" className="border-b border-border bg-background">
      <SectionHeader
        num="03"
        label="Technology"
        accent="orange"
        title="A three-layer sensing patch"
        intro="The sensing patch is intentionally simple. Three functional layers handle gas access, chemical response and reference-based interpretation."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <figure>
          <div className="space-y-3">
            {layers.map((l) => (
              <div key={l.n} className="flex items-center gap-4">
                <span className={`w-7 font-mono text-sm font-bold ${l.accent}`}>{l.n}</span>
                <div
                  className="h-14 flex-1 border border-border"
                  style={{ backgroundColor: l.color }}
                />
              </div>
            ))}
          </div>
          <figcaption className="mt-5 border-t border-border pt-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
            Cross-section — schematic, not to scale
          </figcaption>
        </figure>

        <dl className="space-y-8">
          {layers.map((l) => (
            <div key={l.n} className="border-t border-border pt-5">
              <dt className="flex items-baseline gap-4">
                <span className={`font-mono text-sm font-bold ${l.accent}`}>{l.n}</span>
                <span className="text-lg font-semibold text-brand-navy">{l.name}</span>
              </dt>
              <dd className="mt-2 space-y-1.5 pl-10">
                {l.points.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
