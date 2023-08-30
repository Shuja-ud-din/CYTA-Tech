import React, { useContext, useState } from 'react'
import ProcessTab from './ProcessTab';
import { DataContext } from '../../context/AppData';

const OurProcess = () => {

    const { workTabsData } = useContext(DataContext);

    const workLinks = [
        'Project Reasearch',
        'Design',
        'Development',
        'Testing'
    ]

    const [activeTab, setActiveTab] = useState(0);

    const switchTab = (index) => {
        setActiveTab(index)
    }

    const renderedLinks = workLinks.map((label, index) => {
        let linkClass = "tab-link";
        if (activeTab === index) {
            linkClass = 'tab-link current'
        }
        else {
            linkClass = 'tab-link'
        }

        return <li key={index} className={linkClass} onClick={() => switchTab(index)}>{label}</li>
    })

    const renderedTabs = workTabsData.map((tabObj, index) => {
        let activeClass = ''
        if (index === activeTab) {
            activeClass = 'current'
        }
        else {
            activeClass = ''
        }
        return <ProcessTab key={index} data={tabObj} sr={index + 1} activeClass={activeClass} />
    })

    return (
        <>
            <section className="our-process">
                <div className="container">
                    <div className="process-heading">
                        <h2>Our process</h2>
                    </div>
                    <div className="how-work">
                        <h2>How We Work</h2>
                    </div>
                    <div className="work-tabs-main">
                        {/* tabs */}
                        <ul className="tabs">
                            {renderedLinks}
                        </ul>

                        {renderedTabs}

                    </div>

                </div>
            </section>
        </>
    )
}

export default OurProcess