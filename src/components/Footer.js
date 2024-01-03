import React from 'react'
import fLogo from '../assets/images/f-Logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer-next">
                        <h2>So What's Next?</h2>
                        <p>CYTA Technologies is a leading provider of technology solutions for businesses. Our dynamic team
                            of experts is passionate about helping our clients succeed in the digital age.</p>
                        <NavLink to="/Contact">Book A Call</NavLink>
                    </div>
                    <div className="footer-main">
                        <div className="footer-logo">
                            <a href="/"><img src={fLogo} alt="lazy" /></a>
                            <div className="f-links">
                                <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                <a href="/"><i className="fa-brands fa-pinterest-p"></i></a>
                            </div>
                        </div>
                        <div className="pages-1">
                            <ul>
                                <li><NavLink to="/Work">Work</NavLink></li>
                                <li><NavLink to="/Services">SERVices</NavLink></li>
                                <li><NavLink to="/About">About</NavLink></li>
                            </ul>
                        </div>
                        <div className="pages-2">
                            <ul>
                                <li><NavLink to="/Contact">CONTACT</NavLink></li>
                                <li><a href="/">Privacy policy</a></li>
                                <li><a href="/">Terms & conditions</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="f-last-text">
                    <span>CYTA Technologies</span>
                </div>
            </footer>
        </>
    )
}

export default Footer