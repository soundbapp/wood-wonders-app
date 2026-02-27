"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : undefined}>
      <Link href="#home" className="nav-logo">
        WOOD WONDERS <span>FACTORY</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#collections">Collections</Link></li>
        <li><Link href="#capability">Production</Link></li>
      </ul>
      <Link href="#contact" className="nav-cta">Commission Work</Link>
    </nav>
  );
}
