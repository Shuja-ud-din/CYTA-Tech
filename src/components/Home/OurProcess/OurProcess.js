import React, { useContext } from 'react'
import { DataContext } from '../../../context/AppData'
import ProcessTab from './ProcessTab';

const OurProcess = () => {

    const { workTabsData } = useContext(DataContext);

    const renderedTabs = workTabsData.map((tabObj, index) => {
        let activeClass = ''
        if (index === 0) {
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
                            <li className="tab-link current" data-tab="tab-1">Project Reasearch</li>
                            <li className="tab-link" data-tab="tab-2">Design</li>
                            <li className="tab-link" data-tab="tab-3">Development</li>
                            <li className="tab-link" data-tab="tab-4">Testing</li>
                        </ul>

                        {renderedTabs}

                    </div>

                </div>
            </section>
        </>
    )
}

export default OurProcess