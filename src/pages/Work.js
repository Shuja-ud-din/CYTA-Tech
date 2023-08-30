import React, { useState } from 'react'
import Projects from '../components/Projects/Projects'
import subtractImage from '../assets/images/Subtract.png'
import { NavLink } from 'react-router-dom'

const Work = () => {

    const linksArray = [
        'All',
        'UI/UX design websites',
        'Custom website development',
        'E-commerce websites',
        'CMS websites',
        'Blogging websites'
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const switchTab = (index) => {
        setActiveIndex(index)
    }

    const renderdLinks = linksArray.map((label, index) => {

        let activeClass = '';
        if (index === activeIndex) {
            activeClass = 'active'
        }
        else {
            activeClass = ''
        }

        return <li key={index} className={activeClass} onClick={() => switchTab(index)}><NavLink>{label}</NavLink></li>
    })

    return (
        <>
            <div className="home-main-1">
                <section className="site-banner">
                    <div className="container">
                        <div className="site-banner-main">
                            <div className="site-banner-content">
                                <h2>Elevating Businesses through <br /> <span className="g-clr"> Exceptional Projects </span></h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="all-project-main">
                    <div className="container">
                        <div className="projects-tabs-main">
                            <header className="tabs-nav-to-to">
                                <ul>
                                    {renderdLinks}
                                </ul>
                            </header>
                        </div>

                        <section className="tabs-content-to">
                            <Projects />
                            <div className="load-imaage">
                                <img src={subtractImage} alt="lazy" />
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Work