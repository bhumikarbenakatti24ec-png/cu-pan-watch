import { Section, SectionHeader } from "./primitives";

const workflow = [
  "Worker wears the BAASC band at the start of the shift.",
  "The sensing patch is passively exposed to the surrounding environment.",
  "H₂S exposure produces a colour change on the patch.",
  "The worker or supervisor opens the mobile application.",
  "The phone camera captures a photograph of the patch.",
  "Image analysis compares the patch against the reference colours and estimates the ppm range.",
  "The result is displayed with the estimated level, status and timestamp.",
];

const tones = [
  "text-brand-blue",
  "text-brand-cyan",
  "text-brand-orange",
  "text-brand-teal",
  "text-brand-blue",
  "text-brand-cyan",
  "text-brand-navy",
];

const contexts = [
  ["Refinery process units", "Areas where H₂S may be released during sour crude processing or maintenance."],
  ["Confined space entry", "Tanks, vessels and pits where gas can accumulate before entry work."],
  ["Effluent & sulphur handling", "Wastewater treatment and sulphur recovery areas with known H₂S potential."],
  ["Shift-level exposure review", "Supervisors reviewing patch readings across a team at shift handover."],
];

export function Application() {
  return (
    <Section id="application" className="border-b border-border bg-background">
      <SectionHeader
        num="05"
        label="Application"
        accent="teal"
        title="How it would be used on an MRPL-type site"
        intro="The band is intended to sit alongside existing site procedures as a personal, low-cost exposure-awareness aid."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="eyebrow">Field workflow</p>
          <ol className="mt-6 border-l border-border pl-6">
            {workflow.map((s, i) => (
              <li key={s} className="relative pb-7 last:pb-0">
                <span
                  className={
                    "absolute -left-[1.68rem] top-0.5 flex h-5 w-5 items-center justify-center border border-border bg-background font-mono text-[0.55rem] font-bold " +
                    tones[i]
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="eyebrow">Relevant areas</p>
          <dl className="mt-6 divide-y divide-border border-t border-border">
            {contexts.map(([k, v]) => (
              <div key={k} className="py-5">
                <dt className="text-sm font-semibold text-brand-navy">{k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
