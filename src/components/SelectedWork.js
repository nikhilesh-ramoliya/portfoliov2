import React, { useRef } from "react";
import { archive, featured } from "../content";
import mansion from "../Assets/mansionvoyeur.com.png";
import Reveal from "./Reveal";

const images = {
  mansion,
};

function CaseArt({ art }) {
  if (art === "nodes") {
    return (
      <div className="art art-nodes" aria-hidden>
        <span className="node" />
        <span className="art-line a" />
        <span className="art-line b" />
      </div>
    );
  }

  if (art === "ledger") {
    return (
      <div className="art art-ledger" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className="art art-grid" aria-hidden>
      <b />
      <b />
      <b />
    </div>
  );
}

function CaseVisual({ project }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      className="case-visual"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {project.image ? (
        <img src={images[project.image]} alt={`${project.name} preview`} />
      ) : (
        <CaseArt art={project.art} />
      )}
    </div>
  );
}

function SelectedWork() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Products that think, bill, and stay up.</h2>
          </div>
        </Reveal>

        {featured.map((project, index) => (
          <Reveal as="article" className="case" delay={index * 40} key={project.id}>
            <CaseVisual project={project} />
            <div>
              <p className="case-index">
                {project.index} / {project.year}
              </p>
              <h3 className="case-name">{project.name}</h3>
              <p className="case-kind">{project.kind}</p>
              <p className="case-summary">{project.summary}</p>
              <ul className="case-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="chips">
                {project.stack.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              {project.href && (
                <a className="case-link" href={project.href} target="_blank" rel="noreferrer">
                  Visit site →
                </a>
              )}
            </div>
          </Reveal>
        ))}

        <div className="archive">
          {archive.map((item, index) => {
            const Card = item.href ? "a" : "article";
            return (
              <Reveal
                as={Card}
                className="archive-card"
                delay={index * 60}
                key={item.name}
                href={item.href || undefined}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noreferrer" : undefined}
              >
                <h3>{item.name}</h3>
                <p className="kind">{item.kind}</p>
                <p>{item.blurb}</p>
                <div className="chips">
                  {item.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
