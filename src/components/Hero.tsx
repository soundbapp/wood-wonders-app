import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-lines" />
      <div className="hero-number">WW</div>
      <div className="hero-content">
        <div className="hero-spacer" aria-hidden="true" />
        <div className="hero-eyebrow">Jos, Nigeria — Est. 2024</div>
        <h1 className="hero-title">
          BUILT<br />
          TO <em>LAST</em><br />
          DECADES
        </h1>
        <p className="hero-subtitle">
          Premium industrial design and precision manufacturing. Where architectural ambition meets structural permanence.
        </p>
        <div className="hero-actions">
          <Link href="#collections" className="btn-primary">View Collections</Link>
          <Link href="#contact" className="btn-ghost">B2B Inquiry</Link>
        </div>
      </div>
      <div className="hero-bar">
        <div className="hero-stat">
          <div className="hero-stat-num">100%</div>
          <div className="hero-stat-label">Nigerian Hardwoods</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">B2B</div>
          <div className="hero-stat-label">Institutional Contracts</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">EXP</div>
          <div className="hero-stat-label">Export Ready</div>
        </div>
      </div>
    </section>
  );
}
