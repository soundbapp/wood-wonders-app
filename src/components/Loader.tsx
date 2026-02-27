"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const dismiss = () => setDone(true);
    const t = setTimeout(dismiss, 1200);
    const onLoad = () => setTimeout(dismiss, 600);
    window.addEventListener("load", onLoad);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className={`loader ${done ? "done" : ""}`} id="loader" aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-logo">WOOD WONDERS <span>FACTORY</span></div>
        <div className="loader-bar" />
      </div>
    </div>
  );
}
