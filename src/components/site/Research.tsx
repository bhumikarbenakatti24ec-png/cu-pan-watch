import { Section, SectionHeader, Note } from "./primitives";

const blocks = [
  {
    t: "Objective",
    tone: "border-brand-blue text-brand-blue",
    d: "Develop and evaluate a passive, wearable colorimetric indicator for H₂S exposure that can be read quantitatively with a standard smartphone camera.",
  },
  {
    t: "Proposed methodology",
    tone: "border-brand-cyan text-brand-cyan",
    d: "Prepare candidate sensing formulations, expose them to controlled H₂S concentrations, photograph the response under defined conditions, and correlate colour change with concentration and exposure duration.",
  },
  {
    t: "Chemical sensing",
    tone: "border-brand-orange text-brand-orange",
    d: "A reagent-loaded detecting layer undergoes a visible colour change on reaction with H₂S. Selectivity, response time and stability are the primary parameters under study.",
  },
  {
    t: "Reference-based image analysis",
    tone: "border-brand-teal text-brand-teal",
    d: "The printed reference colours in the patch allow white-balance and exposure correction, so readings taken under different lighting can be compared on a common basis.",
  },
  {
    t: "Environmental compensation",
    tone: "border-brand-blue text-brand-blue",
    d: "Temperature and humidity influence both the chemical response and the captured image. Their effect is to be characterised and corrected during interpretation.",
  },
  {
    t: "Future ML-based analysis",
    tone: "border-brand-navy text-brand-navy",
    d: "A machine-learning model can later be trained on images of the sensing patch captured under controlled H₂S concentrations and varying lighting, temperature and humidity, to improve estimation beyond a fixed colour lookup.",
  },
];

export function Research() {
  return (
    <Section id="research" className="border-b border-border bg-background">
      <SectionHeader
        num="07"
        label="Research"
        accent="cyan"
        title="Scope and methodology"
        intro="Work is at the prototype and characterisation stage. The items below describe the intended research path rather than completed, validated results."
      />

      <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {blocks.map((b, i) => (
          <div key={b.t} className={`border-t-2 pt-4 ${b.tone.split(" ")[0]}`}>
            <p className={`font-mono text-[0.7rem] font-bold ${b.tone.split(" ")[1]}`}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-brand-navy">{b.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Note>
          No machine-learning model has been industrially validated at this stage. Any ML component
          described here is proposed future work.
        </Note>
      </div>
    </Section>
  );
}
