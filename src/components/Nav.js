import React, { useEffect, useState } from "react";
import { profile } from "../content";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#skills", id: "skills", label: "Stack" },
  { href: "#about", id: "about", label: "About" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const mobile = window.matchMedia("(max-width: 720px)").matches;
      setHidden(!open && !mobile && y > last && y > 88);
      last = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${open ? " is-open" : ""}${hidden ? " is-hidden" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={close}>
          <span className="mark">{profile.monogram}</span>
          <span>
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.title}</span>
          </span>
        </a>

        <div className="nav-panel">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={active === link.id ? "is-active" : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-cta" href={`mailto:${profile.email}`} onClick={close}>
            Write me
          </a>
        </div>

        <div className="nav-tools">
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
