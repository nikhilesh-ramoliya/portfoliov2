import React, { useEffect, useRef, useState } from "react";
import { impact } from "../content";
import useReducedMotion from "../hooks/useReducedMotion";

function useCountUp(target, active, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return undefined;
    }

    let start;
    let frame = 0;

    const step = (time) => {
      if (start === undefined) start = time;
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}

function ImpactStat({ item, active, delay }) {
  const counted = useCountUp(item.value, active);

  return (
    <article className="impact-item" style={{ "--reveal-delay": `${delay}ms` }}>
      <strong>
        {counted}
        {item.suffix}
      </strong>
      <span>{item.label}</span>
      <small>{item.detail}</small>
    </article>
  );
}

function Impact() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setActive(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section
      className={`impact${active ? " is-in" : ""}`}
      aria-label="Impact"
      ref={ref}
    >
      <div className="wrap">
        <div className="impact-grid">
          {impact.map((item, index) => (
            <ImpactStat
              item={item}
              active={active}
              delay={index * 90}
              key={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
