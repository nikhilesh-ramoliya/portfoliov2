import React from "react";
import { skillGroups } from "../content";
import Reveal from "./Reveal";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <p className="kicker">Stack</p>
            <h2>Languages, agents, and the boring glue.</h2>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal as="article" className="skill-group" delay={index * 55} key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
