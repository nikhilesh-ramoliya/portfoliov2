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
        <Link to="/home"><li className={active === "home" ? "listitem active_link" : "listitem"} >Home <div className="underline"></div></li></Link>
        <Link to="/about"><li className={active === "about" ? "listitem active_link" : "listitem"}>About<div className="underline"></div></li></Link>
        <Link to="/experience"><li className={active === "experience" ? "listitem active_link" : "listitem"}>Experience<div className="underline"></div></li></Link>
        <Link to="/contact"><li className={active === "contact" ? "listitem active_link" : "listitem"}>Contact<div className="underline"></div></li></Link>
      </ul>
      <ul className="header_icons">
        <a href="mailto:nikhileshramoliya@gmail.com?subject=Hello&body=fahogogo"><li className='iconitem firstchild'><img src={gmail} alt="gmail" /></li></a>
        <a href="https://www.linkedin.com/in/nikhileshramoliya"><li className='iconitem'><img src={linkedin} alt="linked in" /></li></a>
        <a href="tel:+918469175299"><li className='iconitem'><img src={phone} alt="phone" /></li></a>
        <a href="https://www.instagram.com/niks.patel25/"><li className='iconitem'><img src={instagram} alt="instagram" /></li></a>
      </ul>
    </div>

  )
}

export default Header