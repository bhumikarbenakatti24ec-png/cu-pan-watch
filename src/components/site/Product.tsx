import wristband from "@/assets/wristband.jpg.asset.json";
import { Note, Section, SectionHeader } from "./primitives";

const specs = [
  ["Form factor", "Wrist-worn band with a replaceable sensing badge"],
  ["Sensing principle", "Passive chemical reaction — colour change on H₂S exposure"],
  ["Power", "No continuous electrical power required for the sensing patch"],
  ["Indication", "Direct visual colour indication readable without any device"],
  ["Quantification", "Camera-based estimation through the mobile application"],
  ["Reference region", "Printed reference colours for improved image interpretation"],
  ["Status", "Research prototype under development"],
];

export function Product() {
  return (
    <Section id="product" className="border-b border-border bg-tint-blue">
      <SectionHeader
        num="04"
        label="Product"
        accent="blue"
        title="BAASC Wearable H₂S Detection Band"
        intro="The band carries a passive sensing badge on the outer side, positioned so the wearer or a supervisor can read it directly or photograph it with a phone."
      />

      <figure className="mt-14">
        <img
          src={wristband.url}
          alt="Top view of the BAASC wristband showing the H₂S sensor pad, reference colour scale, expiry indicator and blank control region"
          loading="lazy"
          className="w-full border border-border bg-card shadow-[0_30px_60px_-40px_rgba(15,30,60,0.6)]"
        />
        <figcaption className="mt-3 border-l-2 border-brand-blue pl-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
          Band concept — top view (outer side)
        </figcaption>
      </figure>

      <dl className="mt-12 divide-y divide-border border-t border-border">
        {specs.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-4 sm:grid-cols-[240px_1fr] sm:gap-8">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-brand-blue">
              {k}
            </dt>
            <dd className="text-sm leading-relaxed">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <Note>
          The band is a student research prototype. It is not certified or approved as industrial
          safety equipment and is not a substitute for approved H₂S detectors or site safety
          procedures.
        </Note>
      </div>
    </Section>
  );
}
