import { Section, SectionHeader, Steps } from "./primitives";

const workflow = [
  "Worker wears the BAASC band at the start of the shift.",
  "The sensing patch is passively exposed to the surrounding environment.",
  "H₂S exposure produces a colour change on the patch.",
  "The worker or supervisor opens the mobile application.",
  "The phone camera captures a photograph of the patch.",
  "Image analysis compares the patch against the reference colours and estimates the ppm range.",
  "The result is displayed with the estimated level, status and timestamp.",
];

const contexts = [
  ["Refinery process units", "Areas where H₂S may be released during sour crude processing or maintenance."],
  ["Confined space entry", "Tanks, vessels and pits where gas can accumulate before entry work."],
  ["Effluent & sulphur handling", "Wastewater treatment and sulphur recovery areas with known H₂S potential."],
  ["Shift-level exposure review", "Supervisors reviewing patch readings across a team at shift handover."],
];

export function Application() {
  return (
    <Section id="application" className="border-b border-border">
      <SectionHeader
        eyebrow="05 — Application"
        title="How it would be used on an MRPL-type site"
        intro="The band is intended to sit alongside existing site procedures as a personal, low-cost exposure-awareness aid."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            Field workflow
          </h3>
          <div className="mt-4">
            <Steps steps={workflow} />
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            Relevant areas
          </h3>
          <dl className="mt-4 divide-y divide-border border border-border bg-card">
            {contexts.map(([k, v]) => (
              <div key={k} className="px-5 py-4">
                <dt className="text-sm font-semibold">{k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
