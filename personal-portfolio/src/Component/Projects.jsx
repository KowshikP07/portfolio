import React, { useState } from 'react'
import project from '../Style/Projects.module.css'
import qr from '../assets/qr.png'
import dark from '../assets/dark.png'
import skill from '../assets/skillcave.png'
const Projects = () => {
    const [projectdone,setprojectdone]=useState([{"id":1,"title":"Notes Application","image":dark},{"id":2,"title":"Notes Application","image":skill},{"id":3,"title":"Notes Application","image":dark},{"id":4,"title":"Notes Application","image":skill}]);
    const projectcompleted=projectdone.map((projects,index)=>(
      <div className={project.projectdisplay} key={index}><div className={project.projectimage}><img src={projects.image} alt={projects.title}></img></div><div className={project.projectdesc}>{projects.title} <img src={qr} alt="qr"></img></div></div>
    ))
  return (
    <div className={project.main}>
        <h1 className={project.title}>PROJECTS</h1>
        <div className={project.toshow}>
            {projectcompleted}
        </div>
    </div>
  )
}

export default Projects
