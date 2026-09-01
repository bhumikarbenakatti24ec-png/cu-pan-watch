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
    <Section id="product" className="border-b border-border bg-surface">
      <SectionHeader
        eyebrow="04 — Product"
        title="BAASC Wearable H₂S Detection Band"
        intro="The band carries a passive sensing badge on the outer side, positioned so the wearer or a supervisor can read it directly or photograph it with a phone."
      />

      <figure className="mt-10 border border-border bg-card p-4">
        <img
          src={wristband.url}
          alt="Top view of the BAASC wristband showing the H₂S sensor pad, reference colour scale, expiry indicator and blank control region"
          loading="lazy"
          className="w-full"
        />
        <figcaption className="mt-4 border-t border-border pt-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
          Band concept — top view (outer side)
        </figcaption>
      </figure>

      <dl className="mt-8 divide-y divide-border border border-border bg-card">
        {specs.map(([k, v]) => (
          <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
            <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
              {k}
            </dt>
            <dd className="text-sm leading-relaxed">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <Note>
          The band is a student research prototype. It is not certified or approved as industrial
          safety equipment and is not a substitute for approved H₂S detectors or site safety
          procedures.
        </Note>
      </div>
    </Section>
  );
}
