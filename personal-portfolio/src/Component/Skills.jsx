import React from 'react'
import skill from '../Style/Skill.module.css'
const Skills = () => {
  return (
    <>
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
        <div className={skill.title}>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          <div className={skill.certiTitle}><p>ACHIEVEMENTS</p><p>ACHIEVEMENTS</p></div>
          </div>
        <div className={skill.carousel}></div>
      </div>
    </>
  )
}

export default Skills
