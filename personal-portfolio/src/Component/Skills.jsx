import React, { useState } from 'react'
import skill from '../Style/Skill.module.css'
import achieve from '../assets/achievements.mp4'
import ach1 from '../assets/ach1.jpg'
import ach2 from '../assets/ach2.jpg'
import ach3 from '../assets/ach3.jpg'
import html from '../assets/htmllogo.png'
import css from '../assets/csslogo.png'
import js from '../assets/jslogo.png'
import react from '../assets/reactlogo.png'
const Skills = () => {
  const [index, setIndex] = useState(0);
  const rightclick = () => {
    setIndex(prev => (prev + 1)%3);
    console.log(`right : ${index}`);
  }
  const leftclick = () => {

    setIndex(prev => (prev + 1)%3);
    console.log(`left : ${index}`);
  }
  return (
    <div className={skill.main}>
      <div className={skill.hero}>
        <div className={skill.title}><h1>Skills</h1></div>
        <div className={skill.container}>
          <div className={skill.skillcontainer}><img src={html} alt="HTML Logo" /></div>
          <div className={skill.skillcontainer}><img src={css} alt="CSS Logo" /></div>
          <div className={skill.skillcontainer}><img src={js} alt="JavaScript Logo" /></div>
          <div className={skill.skillcontainer}><img src={react} alt="React Logo" /></div>
          <div className={skill.skillcontainer}></div>
          <div className={skill.skillcontainer}></div>
          <div className={skill.skillcontainer}></div>
          <div className={skill.skillcontainer}></div></div>
      </div>
      <div className={skill.certificate}>
        <video autoPlay muted loop playsInline className={skill.vid}><source src={achieve} type="video/mp4" /></video>
        <div className={skill.titlecert}>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
        </div>
        <div className={skill.carousel}>
          <button className={skill.button} onClick={rightclick}></button>
          <div className={skill.carouselcont}>
            <div className={skill.track} style={{
              transform: `translateX(-${index * 100}%)`
            }}>
              <div className={skill.slide}><img src={ach1} alt="Achievement 1" /></div>
              <div className={skill.slide}><img src={ach2} alt="Achievement 2" /></div>
              <div className={skill.slide}><img src={ach3} alt="Achievement 3" /></div>
            </div>
          </div>
          <button className={skill.button} onClick={leftclick}></button>
        </div>
      </div>
    </div>
  )
}

export default Skills
