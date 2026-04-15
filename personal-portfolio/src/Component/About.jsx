import React, { useState } from "react";
import home from "../Style/home.module.css";
import FAQ from "./FAQ";
import { Link, Element } from "react-scroll";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

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
          <div
            className={home.aboutpagehero}
            id="aboutScrollContainer"
          >
            <div className={home.aboutmebav}>
              <span className={home.navbarlogo}>ABOUT me</span>

              <button
                className={home.hamburger}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span
                  className={`${home.line} ${menuOpen ? home.lineTop : ""
                    }`}
                ></span>
                <span
                  className={`${home.line} ${menuOpen ? home.lineMiddle : ""
                    }`}
                ></span>
                <span
                  className={`${home.line} ${menuOpen ? home.lineBottom : ""
                    }`}
                ></span>
              </button>

              <div
                className={`${home.navlink} ${menuOpen ? home.navlinkOpen : ""
                  }`}
              >
                <ul className={home.aboutmenavlink}>
                  <li className={home.aboutnavli}>
                    <Link
                      to="whoiam"
                      smooth={true}
                      duration={500}
                      containerId="aboutScrollContainer"
                      onClick={closeMenu}
                    >
                      who i am
                    </Link>
                  </li>

                  <li className={home.aboutnavli}>
                    <Link
                      to="whoiwas"
                      smooth={true}
                      duration={500}
                      containerId="aboutScrollContainer"
                      onClick={closeMenu}
                    >
                      who i was
                    </Link>
                  </li>

                  <li className={home.aboutnavli}>
                    <Link
                      to="faq"
                      smooth={true}
                      duration={500}
                      containerId="aboutScrollContainer"
                      onClick={closeMenu}
                    >
                      faq
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <section className={home.sectionhome}>
              <div className={home.aboutmename}>
                <h1 className={home.aboutmenameyear}>
                  KOWSHIK'05
                </h1>
              </div>

              <div className={home.sectionhomeabout}>
                <div className={home.aboutmephoto}></div>
                <div className={home.aboutmecontent}></div>
              </div>
            </section>

            <Element name="whoiam">
              <section className={home.aboutwhoiam}>
                <div className={home.aboutwhoiaminfinitescroll}>
                  <div className={home.scrolling}>
                    <div className={home.aboutmetriangle}></div>
                    <h1 className={home.aboutmenameyearbottom}>
                      KOWSHIK'05
                    </h1>
                    <div className={home.aboutmetriangle}></div>
                  </div>
                </div>

                <div className={home.aboutwhoiamcontent}>
                  <div className={home.aboutwhoiamwords}></div>
                </div>
              </section>
            </Element>

            <Element name="whoiwas">
              <section className={home.whoiwassec}>
                <div className={home.whoiamtitle}>
                  <h1 className={home.whoiamtitleh1}>
                    who i was
                  </h1>
                </div>
                <div className={home.whoiamabout}>
                  <p className={home.whoiwaspara}>There was nothing extraordinary about me I was just another engineering student with big dreams, still searching for direction. I didn’t have everything planned. I was figuring things out as I went, much like Harry Potter navigating the Triwizard Maze uncertain, but determined to move forward.

                    Like most students, I followed the routine: classes, assignments, and exams. Days turned into months, and before I knew it, I was in my second year of engineering.

                    Then came a moment that changed everything.

                    During an interaction with a final-year senior, he casually asked if we knew frontend development. Without hesitation, we said yes. Then came the follow-up: “Can you center a container?”

                    We couldn’t.

                    It was a simple question, but it exposed a gap I hadn’t noticed before. In that moment, I realized how much I didn’t know and how much I had assumed I did. But instead of discouraging me, it lit a spark.

                    That spark pulled me into the vast world of frontend development. The journey wasn’t easy there were moments of doubt, confusion, and comparison but I kept going.

                    Because that one question didn’t just test me it redirected me.</p>
                </div>
              </section>
            </Element>

            <Element name="faq">
              <section className={home.faq}>
                <FAQ />
              </section>
            </Element>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;