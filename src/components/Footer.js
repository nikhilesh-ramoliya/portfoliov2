import React from "react";
import { profile } from "../content";
import Reveal from "./Reveal";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Contact</p>
          <h2>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </h2>
        </Reveal>
        <div className="footer-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="footer-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
