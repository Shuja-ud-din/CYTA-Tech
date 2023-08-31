import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header-main">
                        <div className="header-logo">
                            <NavLink><img src={logo} alt="logo" /></NavLink>
                        </div>
                        <div className="header-pages">
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/Work'>Work</NavLink></li>
                                <li><NavLink to='/Services'>Services</NavLink></li>
                                <li><NavLink>About</NavLink></li>
                                <li><NavLink>CONTACT</NavLink></li>
                            </ul>
                            <div className="mob-hamburger"><button type="submit"
                                className="hamburger-btn"><span></span><span></span><span></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header