import React, { useState } from 'react'
import project from '../Style/Projects.module.css'
const Projects = () => {
    const [projectdone,setprojectdone]=useState([{"id":1,"title":"Notes Application"},{"id":2,"title":"Notes Application"},{"id":3,"title":"Notes Application"},{"id":4,"title":"Notes Application"}]);
  return (
    <div className={project.main}>
        <h1 className={project.title}>PROJECTS</h1>
        <div className={project.toshow}>
            <div className={project.projectdisplay}><div className={project.projectimage}></div><div className={project.projectdesc}></div></div>
            <div className={project.projectdisplay}><div className={project.projectimage}></div><div className={project.projectdesc}></div></div>
            <div className={project.projectdisplay}><div className={project.projectimage}></div><div className={project.projectdesc}></div></div>
            <div className={project.projectdisplay}><div className={project.projectimage}></div><div className={project.projectdesc}></div></div>
        </div>
    </div>
  )
}

export default Projects
