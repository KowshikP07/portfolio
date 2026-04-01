import React, { useState } from 'react'
import nav from '../Style/Nav.module.css'
import logo from '../assets/logo.png'
import { Link } from "react-scroll";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className={nav.navbar}>
                <div className={nav.bar}>
                    <div className={nav.logo}><img src={logo} alt="logo" /></div>

                    {/* Hamburger Button */}
                    <button
                        className={nav.hamburger}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`${nav.line} ${menuOpen ? nav.lineTop : ''}`}></span>
                        <span className={`${nav.line} ${menuOpen ? nav.lineMiddle : ''}`}></span>
                        <span className={`${nav.line} ${menuOpen ? nav.lineBottom : ''}`}></span>
                    </button>

                    {/* Nav Links */}
                    <div className={`${nav.navlink} ${menuOpen ? nav.navlinkOpen : ''}`}>
                        <ul>
                            <li className={nav.links}>
                                <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
                            </li>
                            <li className={nav.links}>
                                <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
                            </li>
                            <li className={nav.links}>
                                <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
                            </li>
                            <li className={nav.links}>
                                <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
                            </li>
                            <li className={nav.links}>
                                <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
