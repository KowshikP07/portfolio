import React from 'react'
import Navbar from '../Component/Navbar'
import home from '../Style/home.module.css'
import heroVector from '../assets/herovector.svg';
const HOME = () => {
  return (
    <>
    <Navbar/>
    <section className={home.homesec}>
      <div className={home.heromain}>
        <div className={home.light1}></div>
      <div className={home.light1}></div>
      <div className={home.hero}>
        <p className={home.para}>HELLO</p>
        <p className={home.para}>I'M</p>
        <p className={home.para}>KOWSHIK P</p>
      </div>
       <div className={home.light1}></div>
      <div className={home.light4}></div>
      </div>
      <div className={home.herodev}><p className={home.front}>frontend developer</p><div className={home.image}><img alt="image1" src={heroVector}/></div></div>
    </section>
    <section className={home.aboutsec}>
      <div className={home.mainabout}>
        <div className={home.aboutpagetitle}><div className={home.aboutme}><p>about me</p><p id={home.uniqueaboutme}>about me</p><p>about me</p></div><div className={home.aboutme} aria-hidden="true"><p>about me</p><p id={home.uniqueaboutme}>about me</p><p>about me</p></div></div><div className={home.aboutline}></div>
        <div className={home.aboutpage}></div>
      </div>
    </section>
    </>
  )
}

export default HOME
