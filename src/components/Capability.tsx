const capabilities = [
  { num: "01", title: "Precision Fabrication", body: "CNC-assisted joinery and hand-finishing. Tolerances held across volume production. Consistent quality from first unit to final batch.", delay: "" },
  { num: "02", title: "Material Intelligence", body: "Sourced from verified Nigerian hardwood suppliers. Species selected for structural performance, grain character, and long-term stability.", delay: "reveal-delay-1" },
  { num: "03", title: "Quality Control", body: "Each production run is inspected at fabrication, finishing, and pre-dispatch stages. Defect rate tracked and reported per order.", delay: "reveal-delay-2" },
  { num: "04", title: "Custom Engineering", body: "Design briefs processed into manufacturing drawings. Architectural specifications accommodated. Full custom commission workflow from concept to delivery.", delay: "" },
  { num: "05", title: "B2B Volume Capacity", body: "Structured for commercial and institutional bulk orders. Phased delivery schedules available. Contract pricing on qualifying volumes.", delay: "reveal-delay-1" },
  { num: "06", title: "Export Readiness", body: "Packaging and documentation structured for regional and international shipping. ECOWAS and beyond. Product cataloging export-compliant.", delay: "reveal-delay-2" },
];

export default function Capability() {
  return (
    <section className="capability" id="capability">
      <div className="capability-inner">
        <div className="reveal">
          <div className="section-tag">Manufacturing</div>
          <h2 className="collections-title">
            PRODUCTION<br /><span>CAPABILITY</span>
          </h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((cap) => (
            <div key={cap.num} className={`cap-item reveal ${cap.delay}`}>
              <div className="cap-number">{cap.num}</div>
              <div className="cap-title">{cap.title}</div>
              <p className="cap-body">{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
