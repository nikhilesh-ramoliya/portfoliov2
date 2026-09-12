import React from "react";
import { profile } from "../content";
import photo from "../Assets/portrait.png";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <Reveal className="about-copy">
            <div className="section-head">
              <div>
                <p className="kicker">About</p>
                <h2>A senior engineer who still likes the unglamorous parts.</h2>
              </div>
            </div>
            <p>
              I&apos;m {profile.name}, a senior software engineer in {profile.location}.
              I spend my days at {profile.company} on products that have to think,
              take money, and stay online.
            </p>
            <p>
              Lately that means agentic workflows — LangChain, LangGraph, LangSmith —
              wired into real boards and APIs, not demos. Before and beside that, I
              have been the person who owns NestJS services, PostgreSQL, Stripe, and
              the AWS bill.
            </p>
            <p>
              I like work with a number attached: a 66% infra cut, a 90% faster page,
              a release that actually shipped on the date we said. If you want someone
              who can talk to a model and also keep Kafka, CI, and invoices honest,
              that&apos;s the job I already do.
            </p>
            <p>
              Electrical engineering by training, software by trade. Still living to
              learn the next layer of the stack.
            </p>
            <div className="hero-actions">
              <Magnetic>
                <a className="btn btn-signal" href={`mailto:${profile.email}`}>
                  Email me
                </a>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal as="figure" className="portrait" delay={140}>
            <div className="portrait-frame">
              <img src={photo} alt={`${profile.name}, senior software engineer`} />
            </div>
            <figcaption>{profile.location}</figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
