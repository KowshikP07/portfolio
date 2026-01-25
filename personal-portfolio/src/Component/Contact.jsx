import React from 'react'
import con from '../Style/contact.module.css'
import logo from '../assets/logo.png'
const Contact = () => {
  return (
    <>
    <div className={con.main}>
        <div className={con.image}>
            <div className={con.personalimage}>
              <div className={con.photo}></div>
            </div>
            <div className={con.personalimage}>
              <div className={con.photo}></div>
            </div>
            <div className={con.personalimage}>
              <div className={con.photo}></div>
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
