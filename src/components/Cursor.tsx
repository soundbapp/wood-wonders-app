"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cursor.style.left = `${mx.current}px`;
      cursor.style.top = `${my.current}px`;
    };

    const hoverSelectors = "a, button, .collection-item, .cap-item";
    const onEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.borderColor = "rgba(200,134,42,0.8)";
    };
    const onLeave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(200,134,42,0.4)";
    };

    document.addEventListener("mousemove", onMove);

    let rafId: number;
    const anim = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      ring.style.left = `${rx.current}px`;
      ring.style.top = `${ry.current}px`;
      rafId = requestAnimationFrame(anim);
    };
    rafId = requestAnimationFrame(anim);

    const hoverEls = document.querySelectorAll(hoverSelectors);
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" ref={cursorRef} aria-hidden="true" />
      <div className="cursor-ring" id="cursorRing" ref={ringRef} aria-hidden="true" />
    </>
  );
}
