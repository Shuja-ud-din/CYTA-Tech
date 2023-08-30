import React, { useContext } from 'react'
import { DataContext } from '../../context/AppData';

const Projects = ({ n }) => {

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
            <div className="recent-project-flex">
                {renderedProjects}
            </div>
        </>
    )
}

export default Projects