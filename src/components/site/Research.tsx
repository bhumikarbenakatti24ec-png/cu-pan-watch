import { Section, SectionHeader, Note } from "./primitives";

const blocks = [
  {
    t: "Objective",
    d: "Develop and evaluate a passive, wearable colorimetric indicator for H₂S exposure that can be read quantitatively with a standard smartphone camera.",
  },
  {
    t: "Proposed methodology",
    d: "Prepare candidate sensing formulations, expose them to controlled H₂S concentrations, photograph the response under defined conditions, and correlate colour change with concentration and exposure duration.",
  },
  {
    t: "Chemical sensing",
    d: "A reagent-loaded detecting layer undergoes a visible colour change on reaction with H₂S. Selectivity, response time and stability are the primary parameters under study.",
  },
  {
    t: "Reference-based image analysis",
    d: "The printed reference colours in the patch allow white-balance and exposure correction, so readings taken under different lighting can be compared on a common basis.",
  },
  {
    t: "Environmental compensation",
    d: "Temperature and humidity influence both the chemical response and the captured image. Their effect is to be characterised and corrected during interpretation.",
  },
  {
    t: "Future ML-based analysis",
    d: "A machine-learning model can later be trained on images of the sensing patch captured under controlled H₂S concentrations and varying lighting, temperature and humidity, to improve estimation beyond a fixed colour lookup.",
  },
];

export function Research() {
  return (
    <Section id="research" className="border-b border-border bg-surface">
      <SectionHeader
        eyebrow="06 — Research"
        title="Scope and methodology"
        intro="Work is at the prototype and characterisation stage. The items below describe the intended research path rather than completed, validated results."
      />

      <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.t} className="bg-card p-6">
            <h3 className="text-base font-semibold">{b.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Note>
          No machine-learning model has been industrially validated at this stage. Any ML component
          described here is proposed future work.
        </Note>
      </div>
    </Section>
  );
}
