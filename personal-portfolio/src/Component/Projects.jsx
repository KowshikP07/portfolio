import React, { useState } from 'react'
import project from '../Style/Projects.module.css'
import dark from '../assets/dark.png'
import skill from '../assets/skillcave.png'
import skillqr from '../assets/skillchallengeapp_qr.png'
const Projects = () => {
    const [projectdone,setprojectdone]=useState([{"id":1,"title":"Notes Application","image":dark,"qrcode":skillqr,"link":"https://student-skill-dashboard.vercel.app/"},
      {"id":2,"title":"Notes Application","image":skill,"qrcode":skillqr,"link":"https://student-skill-dashboard.vercel.app/"},
      {"id":3,"title":"Notes Application","image":dark,"qrcode":skillqr,"link":"https://student-skill-dashboard.vercel.app/"},
      {"id":4,"title":"Notes Application","image":skill,"qrcode":skillqr,"link":"https://student-skill-dashboard.vercel.app/"}]);

    const projectcompleted=projectdone.map((projects,index)=>(
      <div className={project.projectdisplay} key={index}>
        <div className={project.projectimage}><img src={projects.image} alt={projects.title}></img></div><div className={project.projectdesc}><h3>{projects.title}</h3><div className={project.qrouter}><img src={projects.qrcode} alt="qr"/></div><a href={projects.link} className="projectslinks" target="_blank" rel="noopener noreferrer"><button className={project.probtn}>click me!</button></a></div>
      </div>
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
