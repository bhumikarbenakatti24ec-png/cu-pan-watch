import { Section, SectionHeader } from "./primitives";

const roles: [string, string, string][] = [
  ["Chemical sensing", "Formulation of the detecting layer, exposure trials and stability testing.", "text-brand-blue"],
  ["Electronics & hardware", "Band construction, patch mounting and prototype assembly.", "text-brand-orange"],
  ["Image analysis & software", "Reference-based colour correction, ppm estimation and mobile application.", "text-brand-cyan"],
  ["Documentation & industry liaison", "Test records, safety framing and coordination with MRPL.", "text-brand-teal"],
];

export function Team() {
  return (
    <Section id="team" className="border-b border-border bg-tint-grey">
      <SectionHeader
        num="08"
        label="Team"
        accent="navy"
        title="Project team and responsibilities"
        intro="BAASC is developed by an undergraduate Electronics and Communication Engineering project team, working across chemistry, hardware and software with faculty guidance."
      />

      <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {roles.map(([k, v, tone], i) => (
          <div key={k} className="border-t border-border pt-5">
            <p className={`font-mono text-sm font-bold ${tone}`}>{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-1 text-lg font-semibold text-brand-navy">{k}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
