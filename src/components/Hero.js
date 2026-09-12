import React, { useEffect, useState } from "react";
import { profile } from "../content";
import Magnetic from "./Magnetic";

function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let next;
    const frame = requestAnimationFrame(() => {
      next = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(next);
    };
  }, []);

  return (
    <section className={`hero${ready ? " is-ready" : ""}`} id="top">
      <div className="wrap">
        <div className="hero-top">
          <p className="kicker hero-in" style={{ "--i": 0 }}>
            {profile.title}
          </p>
          <p className="hero-status hero-in" style={{ "--i": 1 }}>
            <i />
            {profile.availability}
          </p>
        </div>

        <h1>
          <span className="line">
            <span>{profile.firstName}</span>
          </span>
          <span className="line" style={{ "--i": 1 }}>
            <span>
              <em>{profile.lastName}</em>
            </span>
          </span>
        </h1>

        <div className="hero-grid">
          <div>
            <p className="intro hero-in" style={{ "--i": 4 }}>
              I build agentic AI products and the SaaS platforms underneath them —
              payments, live video, and systems that stay cheap at scale.
            </p>
            <div className="hero-actions hero-in" style={{ "--i": 5 }}>
              <Magnetic>
                <a className="btn btn-signal" href="#work">
                  See selected work
                </a>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                  Download resume
                </a>
              </Magnetic>
            </div>
          </div>

          <aside className="hero-aside hero-in" style={{ "--i": 6 }}>
            <dl className="hero-meta">
              <div>
                <dt>Now</dt>
                <dd>
                  {profile.title} at {profile.company}
                </dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;
