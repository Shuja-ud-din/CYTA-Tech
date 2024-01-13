import React, { useContext, useEffect, useRef } from 'react'
import ServiceBanner from '../components/service/ServiceBanner'
import { DataContext } from '../context/AppData';
import { useLocation } from 'react-router-dom';
import OurClients from '../components/Clients/OurClients';
import videoBG from '../assets/images/realistic-business.png'
import playIcon from '../assets/images/video-icon.png'

const ServiceDetails = () => {

    const { servicesData } = useContext(DataContext);
    const serviceType = useLocation().pathname.split('/')[2];
    const animateRef = useRef(null)

    const service = servicesData.filter(service => {
        return service.service === serviceType
    })[0];

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className="home-main-1">
            <ServiceBanner service={service} />

            <section className="about-main">
                <div className="client-heading">
                    <h2>Why we are <span>Different </span>?</h2>
                </div>
                <div className="container">
                    <div className="about-video">
                        <a data-fancybox="" href="https://youtu.be/bON-KPiiNCk">
                            <div className="video-back-img" style={{ backgroundImage: `url(${videoBG})` }}>
                                <img src={playIcon} alt="lazy" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <div className="container">
                <div ref={animateRef} className="goto">
                    <div className="count-fst">
                        <div id="numbers"><span className="count">15</span> <span>+</span></div>
                        <div> Years of Experience </div>
                    </div>
                    <div className="count-fst">
                        <div id="numbers"><span className="count">80</span> <span>+</span></div>
                        <div className="num-all">Projects Completed</div>
                    </div>
                    <div className="count-fst">
                        <div id="numbers"><span className="count">40</span> <span>+</span></div>
                        <div className="num-all">Happy Clients</div>
                    </div>
                    <div className="count-fst">
                        <div id="numbers"><span className="count">90</span><span>%</span></div>
                        <div className="num-all">Saticfaction Rate</div>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div >


            <OurClients />

        </div >
    )
}

export default ServiceDetails
