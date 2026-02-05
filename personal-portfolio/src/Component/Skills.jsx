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
import spiral from '../assets/vector2.svg'
import triangle from '../assets/blakTriangle.png'
import dragon from '../assets/dragon.png'
import panda from '../assets/panda.png'
import luffy from '../assets/luffy.png'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
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
  const [skillimage,setskillimage]=useState([{"img":html},
    {"img":css},
    {"img":js},
    {"img":react}])
  const skillarray=skillimage.map((skillsimg,index)=> {
    return (<div className={skill.skillcontainer} key={index}>
      <img src={skillsimg.img} alt="Skill Logo" />
      </div>)
  })
  return (
    <div className={skill.main}>
      <div className={skill.hero}>
        <div className={skill.background}>
          <div className={skill.triangle}><img src={triangle} alt="Triangle background" />
          <div className={skill.cartoon} id='dragon'><img src={dragon} alt="dragon made css"/></div>
          <div className={skill.cartoon} id='panda'><img src={panda} alt="panda made css"/></div>
          <div className={skill.cartoon} id='onepience'><img src={luffy} alt="luffy made css"/></div>
          </div>
          <img src={spiral} alt="spiral background" className={skill.spiral}/>
        </div>
        <div className={skill.title}><h1>Skills</h1></div>
        <div className={skill.container}>{skillarray}</div>
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
          <button className={skill.button} onClick={rightclick}><MdKeyboardDoubleArrowLeft size={40}/></button>
          <div className={skill.carouselcont}>
            <div className={skill.track} style={{
              transform: `translateX(-${index * 100}%)`
            }}>
              <div className={skill.slide}><img src={ach1} alt="Achievement 1" /></div>
              <div className={skill.slide}><img src={ach2} alt="Achievement 2" /></div>
              <div className={skill.slide}><img src={ach3} alt="Achievement 3" /></div>
            </div>
          </div>
          <button className={skill.button} onClick={leftclick}><MdOutlineKeyboardDoubleArrowRight size={40}/></button>
        </div>
      </div>
    </div>
  )
}

export default Skills
