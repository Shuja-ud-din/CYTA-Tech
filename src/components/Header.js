import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const Header = () => {

    const hideNav = () => {
        document.getElementById('burger').click();
    }

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
                                <li onClick={hideNav}><NavLink to='/'>Home</NavLink></li>
                                <li onClick={hideNav}><NavLink to='/Work'>Work</NavLink></li>
                                <li onClick={hideNav}><NavLink to='/Services'>Services</NavLink></li>
                                <li onClick={hideNav}><NavLink to='/About'>About</NavLink></li>
                                <li onClick={hideNav}><NavLink to='/Contact'>CONTACT</NavLink></li>
                            </ul>
                            <div className="mob-hamburger"><button id='burger' type="submit"
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