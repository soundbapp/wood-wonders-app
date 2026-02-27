import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">WOOD WONDERS <span>FACTORY</span></div>
          <p className="footer-brand-desc">
            Wood Wonders Factory is a Woodera Industries LTD company. Industrial design and precision manufacturing. Built for scale. Built for decades. Jos, Nigeria.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#capability">Production</Link></li>
            <li><Link href="#contact">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Products</div>
          <ul className="footer-links">
            <li><Link href="#collections">Furniture</Link></li>
            <li><Link href="#collections">Architectural</Link></li>
            <li><Link href="#contact">Custom Orders</Link></li>
            <li><Link href="#contact">B2B Contracts</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><Link href="#">Jos, Plateau State, Nigeria</Link></li>
            <li><a href="mailto:business@woodwondersfactory.com">business@woodwondersfactory.com</a></li>
            <li><a href="tel:+2347060700986">+234 706 070 0986</a></li>
            <li><Link href="#contact">Commission Work</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Woodera Industries LTD. All rights reserved.</div>
        <div className="footer-tagline">
          Industrial infrastructure. Built to last. &nbsp;|&nbsp; Design by{" "}
          <a href="https://waxmapr.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber)", textDecoration: "none" }}>
            WAX MAPR
          </a>
        </div>
      </div>
    </footer>
  );
}
