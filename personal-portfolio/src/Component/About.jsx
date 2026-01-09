import React from 'react'
import home from '../Style/home.module.css'
import FAQ from './FAQ'
const About = () => {
  return (
   <>
   <div className={home.mainabout}>
             <div className={home.aboutpagetitle}>
               <div className={home.track}>
                 <div className={home.aboutme}>
                   <p>about me</p>
                   <p id={home.uniqueaboutme}>about me</p>
                   <p>about me</p>
                   <p id={home.uniqueaboutme}>about me</p>
                 </div>
                 <div className={home.aboutme}>
                   <p>about me</p>
                   <p id={home.uniqueaboutme}>about me</p>
                   <p>about me</p>
                   <p id={home.uniqueaboutme}>about me</p>
                 </div>
               </div>
             </div>
             <div className={home.aboutline}></div>
             <div className={home.aboutpage}>
               <div className={home.aboutpagehero}>
                 <div className={home.aboutmebav}>
                   <span className={home.navbarlogo}>ABOUT me</span>
                   <ul className={home.aboutmenavlink}>
                     <li className={home.aboutnavli}>who i am</li>
                     <li className={home.aboutnavli}>who i was</li>
                     <li className={home.aboutnavli}>faq</li></ul>
                 </div>
                 <section className={home.sectionhome}>
                   <div className={home.aboutmename}><h1 className={home.aboutmenameyear}>KOWSHIK'05</h1></div>
                   <div className={home.sectionhomeabout}>
                     <div className={home.aboutmephoto}></div>
                     <div className={home.aboutmecontent}></div>
                   </div>
                 </section>
                 <section className={home.aboutwhoiam}>
                   <div className={home.aboutwhoiaminfinitescroll}><div className={home.scrolling}><div className={home.aboutmetriangle}></div><h1 className={home.aboutmenameyearbottom}>KOWSHIK'05</h1><div className={home.aboutmetriangle}></div><h1 className={home.aboutmenameyearbottom}>KOWSHIK'05</h1><div className={home.aboutmetriangle}></div></div>
                     <div className={home.scrolling} aria-hidden="true"><div className={home.aboutmetriangle}></div><h1 className={home.aboutmenameyearbottom}>KOWSHIK'05</h1><div className={home.aboutmetriangle}></div><h1 className={home.aboutmenameyearbottom}>KOWSHIK'05</h1><div className={home.aboutmetriangle}></div></div></div>
                   <div className={home.aboutwhoiamcontent}>
                     <div className={home.aboutwhoiamwords}></div>
                   </div>
                 </section>
                 <section className={home.whoiwassec}>
                   <div className={home.whoiamtitle}><h1 className={home.whoiamtitleh1}>who i was</h1></div>
                   <div className={home.whoiamabout}></div>
                 </section>
                 <section className={home.faq}>
                   <FAQ/>
                 </section>
               </div>
             </div>
           </div>
   </>
  )
}

export default About
