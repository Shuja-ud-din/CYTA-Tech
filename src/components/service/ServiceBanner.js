import React from 'react'
import btnArrow from '../../assets/images/btn-arrow.svg'
import arrowC2 from '../../assets/images/arrow-c2.svg'
import { NavLink } from 'react-router-dom'
import arrow from '../../assets/images/arrow.png'

const ServiceBanner = ({ service }) => {

    const renderedTypes = service.subTypes.map((type, index) => {
        return (
            <p key={index}>
                <img src={arrow} alt="lazy" />
                {type}
            </p>
        )
    })


    return (
        <section className="home-banner">
            <div className="container" style={{ paddingTop: '60px' }}>
                <div className="banner-main">
                    <div className="banner-content">
                        <div className="animate-text">
                            <h1 className="swift-up-text">{service.title}</h1>
                        </div>
                        <p>{service.description}</p>
                    </div>
                    <div className="text-list mb-2">
                        {renderedTypes}
                    </div>
                    <div className="banner-btn">
                        <NavLink to="/Work">
                            See Projects
                            <img className="hov1" src={btnArrow} alt="lazy" />
                            <img className="hov2" src={arrowC2} alt="lazy" />
                        </NavLink>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ServiceBanner
