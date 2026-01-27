import React from 'react'
import con from '../Style/contact.module.css'
import logo from '../assets/logo.png'
import selfpor from '../assets/selfportrait1.jpg'
import selfpor3 from '../assets/selfportrait3.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Contact = () => {
  return (
    <>
    <div className={con.main}>
        <div className={con.image}>
            <div className={con.personalimage}>
              <div className={con.photo}><img src={selfpor} alt="Self Portrait" /></div>
            </div>
            <div className={con.personalimage}>
              <div className={con.photo}></div>
            </div>
            <div className={con.personalimage}>
              <div className={con.photo}><img src={selfpor3} alt="Self Portrait" /></div>
            </div>
            <div className={con.personalimage}>
              <div className={con.photo}></div>
            </div>
        </div>
        <div className={con.contact}>
          <div className={con.details}>
            <div className={con.personldetails}>
              <span className={con.ul}>
                <span className={con.li}>KOWSHIK P</span>
                <span className={con.li}>KONGU ENGINEERING COLLEGE</span>
                <span className={con.li}>CSE DEPT</span>
              </span>
              <span className={con.span}>
                <span>kowshikprakasam@gmail.com</span>
                <span>+91 8610785540</span>
              </span>
            </div>
          <div className={con.links}>
            <div className={con.mainlink}>
            <span className={con.profilelink}>
                <span><a
        href="https://github.com/KowshikP07"
        target="_blank"
      rel="noopener noreferrer"
    ><FaGithub className={con.icons}/>
    </a></span>
              <span><a
        href="https://www.linkedin.com/in/kowshikprakasam"
        target="_blank"
      rel="noopener noreferrer"
    ><FaLinkedin className={con.icons}/></a></span>
              <span><a
        href="https://leetcode.com/u/KOWSHIK_P/"
        target="_blank"
      rel="noopener noreferrer"
    ><SiLeetcode className={con.icons}/></a></span>
            </span>
            <span className={con.madeby}>Made with Love by Kowshik</span>
            </div>
          </div>
          </div>
          <div className={con.logoimage}>
            <img src={logo} alt="logo"/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contact
