import React from 'react'
import "./Header.css"
import gmail from "./resorces/gmail (1).png"
import linkedin from "./resorces/linkedin (1).png"
import instagram from "./resorces/instagram (1).png"
import phone from "./resorces/phone-call.png"
import { Link } from 'react-router-dom'
import Logo from '../../Pages/Logo'


function Header({ home, active }) {

  return (
    <div className={home ? "Header1" : "Header2"}>
      <h1>Nikhilesh Ramoliya</h1>
      <h3>I'm Living for <span>learn and explore</span> as much I can.</h3>
      {active !== "home" && <Logo active={active} />}
      <ul className='header_links'>
        <Link to="/home"><div className={active === "home" ? "listitem active_link" : "listitem"} >Home <div className="underline"></div></div></Link>
        <Link to="/about"><div className={active === "about" ? "listitem active_link" : "listitem"}>About<div className="underline"></div></div></Link>
        <Link to="/experience"><div className={active === "experience" ? "listitem active_link" : "listitem"}>Experience<div className="underline"></div></div></Link>
        <Link to="/work"><div className={active === "work" ? "listitem active_link" : "listitem"}>Work<div className="underline"></div></div></Link>
      </ul>
      <ul className="header_icons">
        <a href="mailto:nikhileshramoliya@gmail.com?subject=Hello&body=fahogogo"><div className='iconitem firstchild'><img src={gmail} alt="gmail" /></div></a>
        <a href="https://www.linkedin.com/in/nikhileshramoliya"><div className='iconitem'><img src={linkedin} alt="linked in" /></div></a>
        <a href="tel:+918469175299"><div className='iconitem'><img src={phone} alt="phone" /></div></a>
        <a href="https://www.instagram.com/niks.patel25/"><div className='iconitem'><img src={instagram} alt="instagram" /></div></a>
      </ul>
    </div>

  )
}

export default Header