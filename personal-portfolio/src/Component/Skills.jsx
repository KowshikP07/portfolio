import React, { useState } from 'react'
import skill from '../Style/Skill.module.css'
import achieve from '../assets/achievements.mp4'
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
          <div className={skill.skillcontainer}></div>
          <div className={skill.skillcontainer}></div>
          <div className={skill.skillcontainer}></div>
          <div className={skill.skillcontainer}></div>
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
          <button onClick={rightclick}></button>
          <div className={skill.carouselcont}>
            <div className={skill.track} style={{
              transform: `translateX(-${index * 100}%)`
            }}>
              <div className={skill.slide}></div>
              <div className={skill.slide}></div>
              <div className={skill.slide}></div>
            </div>
          </div>
          <button onClick={leftclick}></button>
        </div>
      </div>
    </div>
  )
}

export default Skills
