import React, { useContext } from 'react'
import { DataContext } from '../../context/AppData'
import arrowC2 from '../../assets/images/arrow-c2.png'
import btnArrow from '../../assets/images/btn-arrow.png'

const OurProjects = ({ n }) => {

    const { projectsData } = useContext(DataContext);

    const renderedProjects = projectsData.map((project, index) => {
        if (index >= n) {
            return null
        }
        return (
            <div key={index} className="recent-project-sub">
                <div className="recent-project-image">
                    <img src={project.image} alt="lazy" />
                </div>
                <div className="recent-project-content">
                    <span className="s-name">E-commerce websites</span>
                    <h3>E-commerce redesign for <span className="p-name">“{project.for}”</span></h3>
                </div>
            </div>
        )
    })

    return (
        <>
            <section className="recent-project">
                <div className="recent-project-heading">
                    <h2>RECENT PROJECTS</h2>
                </div>
                <div className="container">
                    <div className="recent-project-flex">
                        {renderedProjects}
                    </div>
                    <div className="tab-btn rec banner-btn">
                        <a href="/">
                            SEE Projects
                            <img className="hov1" src={btnArrow} alt="lazy" />
                            <img className="hov2" src={arrowC2} alt="lazy" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProjects