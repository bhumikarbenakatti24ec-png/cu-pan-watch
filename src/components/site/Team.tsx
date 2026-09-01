import { Section, SectionHeader } from "./primitives";

const roles = [
  ["Chemical sensing", "Formulation of the detecting layer, exposure trials and stability testing."],
  ["Electronics & hardware", "Band construction, patch mounting and prototype assembly."],
  ["Image analysis & software", "Reference-based colour correction, ppm estimation and mobile application."],
  ["Documentation & industry liaison", "Test records, safety framing and coordination with MRPL."],
];

export function Team() {
  return (
    <Section id="team" className="border-b border-border">
      <SectionHeader
        eyebrow="07 — Team"
        title="Project team and responsibilities"
        intro="BAASC is developed by an undergraduate Electronics and Communication Engineering project team, working across chemistry, hardware and software with faculty guidance."
      />

      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
        {roles.map(([k, v]) => (
          <div key={k} className="bg-card p-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-primary">
              Work area
            </p>
            <h3 className="mt-2 text-base font-semibold">{k}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
