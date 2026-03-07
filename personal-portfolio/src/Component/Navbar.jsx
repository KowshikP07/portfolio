import React from 'react'
import nav from '../Style/Nav.module.css'
import logo from '../assets/logo.png'
import { Link } from "react-scroll";
const Navbar = () => {
    return (
        <>
            <nav className={nav}>
                <div className={nav.bar}>
                    <div className={nav.logo}><img src={logo} alt="logo" /></div>
                    <div className={nav.navlink}>
                        <ul>
                            <li className={nav.links}>
                                <Link to="home" smooth={true} duration={500}>Home</Link>
                            </li>

                            <li className={nav.links}>
                                <Link to="about" smooth={true} duration={500}>About</Link>
                            </li>

                            <li className={nav.links}>
                                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                            </li>

                            <li className={nav.links}>
                                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                            </li>

                            <li className={nav.links}>
                                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
