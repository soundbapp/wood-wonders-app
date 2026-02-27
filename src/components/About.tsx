export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left reveal">
        <div className="section-tag">Our Foundation</div>
        <h2 className="about-heading">
          INDUSTRIAL<br /><em>INTENT</em>
        </h2>
        <p className="about-body">
          Wood Wonders is a precision-driven manufacturing house. We operate at the intersection of design sophistication and fabrication discipline — producing furniture and architectural installations built for institutional longevity.
        </p>
        <p className="about-body">
          This is not a workshop. It is a manufacturing infrastructure company being engineered for national scale.
        </p>
        <ul className="about-list">
          <li>Design-forward, material-focused production</li>
          <li>Structurally engineered for durability and export</li>
          <li>Commercial and institutional contract capability</li>
          <li>Integrated workforce development pipeline</li>
        </ul>
      </div>
      <div className="about-right reveal reveal-delay-2">
        <div className="about-corner" />
        <div className="about-corner-b" />
        <div className="about-img-frame">
          <div className="about-img-inner">
            <img
              src="/images/industrial intent section.png?v=2"
              alt="Industrial Intent — Wood Wonders manufacturing"
              className="about-img-photo"
            />
            <div className="about-img-mark">WWF</div>
          </div>
        </div>
      </div>
    </section>
  );
}
