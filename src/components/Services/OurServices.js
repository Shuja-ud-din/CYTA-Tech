import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/AppData'
import ServiceTab from './ServiceTab';
import tabArrow from '../../assets/images/tab-arrow.png'
import { NavLink } from 'react-router-dom';

const OurServices = () => {

    const { serviceTabsData } = useContext(DataContext);

    const [activeTab, setActiveTab] = useState(0)

    // const renderedTabs = serviceTabsData.map((tabObj, index) => {
    //     return <ServiceTab key={index} obj={tabObj} sr={index + 1} />
    // })

    const serviceLinks = [
        'UI/UX design websites',
        'Custom website development',
        'E-commerce websites',
        'CMS websites',
        'Blogging websites',
        'Mobile app websites',
        'Web application development'
    ]

    const switchTab = (index) => {
        setActiveTab(index)
    }

    const renderServices = serviceLinks.map((label, index) => {
        let activeClass = '';
        if (index === activeTab) {
            activeClass = 'active'
        }
        else {
            activeClass = ''
        }

        return (
            <li key={index} className={activeClass} onClick={() => switchTab(index)}>
                <NavLink>
                    <span className="arow-t">
                        <img src={tabArrow} alt="lazy" />
                    </span>
                    {label}
                </NavLink>
            </li>
        )
    })

    return (
        <>
            <section className="we-offer">
                <div className="container">
                    <div className="process-heading">
                        <h2>Our Services</h2>
                    </div>
                    <div className="services-flex">
                        <div className="services-names">
                            <header className="tabs-nav">
                                <ul>
                                    {renderServices}
                                </ul>
                            </header>
                        </div>
                        <div className="services-content">
                            <section className="tabs-content">

                                <ServiceTab obj={serviceTabsData[activeTab]} />

                            </section>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurServices