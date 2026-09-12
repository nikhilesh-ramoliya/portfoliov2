import React from "react";
import { education, experience } from "../content";
import Reveal from "./Reveal";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="kicker">Experience</p>
            <h2>One seat. A lot of surface area.</h2>
          </div>
        </Reveal>

        <div className="exp">
          <Reveal>
            <p className="exp-role">{experience.role}</p>
            <p className="exp-meta">
              <b>{experience.company}</b>
              <br />
              {experience.location}
              <br />
              {experience.dates}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="exp-intro">{experience.intro}</p>
            <ul className="exp-points">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="edu">
          {education.map((item, index) => (
            <Reveal as="article" delay={index * 80} key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.place}</p>
              <span>{item.dates}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
