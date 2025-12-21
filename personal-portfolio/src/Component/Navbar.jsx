import React from 'react'
import nav from '../Style/Nav.module.css'
const Navbar = () => {
    return (
        <>
            <nav className={nav}>
                <div className={nav.bar}>
                    <div className={nav.logo}></div>
                    <div className={nav.navlink}>
                        <ul>
                            <li className={nav.links}>Home</li>
                            <li className={nav.links}>About</li>
                            <li className={nav.links}>Projects</li>
                            <li className={nav.links}>Skills</li>
                            <li className={nav.links}>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
