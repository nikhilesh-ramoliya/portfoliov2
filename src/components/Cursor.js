import React, { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduced) return undefined;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: point.x, y: point.y };
    let hover = false;
    let frame = 0;

    const onMove = (event) => {
      point.x = event.clientX;
      point.y = event.clientY;
      hover = Boolean(
        event.target.closest("a, button, .archive-card, .case-visual, .nav-toggle")
      );
    };

    const tick = () => {
      ring.x += (point.x - ring.x) * 0.18;
      ring.y += (point.y - ring.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
        dotRef.current.classList.toggle("is-hover", hover);
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
        ringRef.current.classList.toggle("is-hover", hover);
      }

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [reduced]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden />
      <div className="cursor-dot" ref={dotRef} aria-hidden />
    </>
  );
}

export default Cursor;
