import { Section, SectionHeader } from "./primitives";

const layers = [
  {
    n: "01",
    name: "Permeable Layer",
    color: "oklch(0.86 0.02 250)",
    points: [
      "Allows H₂S gas to reach the sensing region.",
      "Provides basic physical protection for the patch.",
    ],
  },
  {
    n: "02",
    name: "H₂S Detecting Layer",
    color: "oklch(0.82 0.11 75)",
    points: [
      "Contains the chemical sensing material.",
      "Produces a visible colour change when exposed to H₂S.",
    ],
  },
  {
    n: "03",
    name: "Reference Layer",
    color: "oklch(0.72 0.05 240)",
    points: [
      "Provides reference colours for visual comparison.",
      "Helps the image-analysis system compensate for lighting and environmental variation.",
    ],
  },
];

export function Technology() {
  return (
    <Section id="technology" className="border-b border-border">
      <SectionHeader
        eyebrow="03 — Technology"
        title="A three-layer sensing patch"
        intro="The sensing patch is intentionally simple. Three functional layers handle gas access, chemical response and reference-based interpretation."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <figure className="border border-border bg-card p-6">
          <div className="space-y-2">
            {layers.map((l) => (
              <div key={l.n} className="flex items-center gap-4">
                <span className="w-6 font-mono text-[0.7rem] text-muted-foreground">{l.n}</span>
                <div
                  className="h-12 flex-1 border border-border"
                  style={{ backgroundColor: l.color }}
                />
                <span className="w-36 text-xs font-medium sm:w-40">{l.name}</span>
              </div>
            ))}
          </div>
          <figcaption className="mt-5 border-t border-border pt-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            Cross-section — schematic, not to scale
          </figcaption>
        </figure>

        <dl className="divide-y divide-border border border-border bg-card">
          {layers.map((l) => (
            <div key={l.n} className="p-5">
              <dt className="flex items-center gap-3">
                <span
                  className="h-3.5 w-3.5 border border-border"
                  style={{ backgroundColor: l.color }}
                />
                <span className="text-base font-semibold">{l.name}</span>
              </dt>
              <dd className="mt-2 space-y-1.5 pl-7">
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
