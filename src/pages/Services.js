import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/AppData'
import ServiceCard from '../components/Services/ServiceCard';

const Services = () => {

    const { servicesData } = useContext(DataContext);

    const renderedServices = servicesData.map((service, index) => {
        return <ServiceCard key={index} service={service} index={index} />
    })

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <>
            <div className="home-main-1">
                <section className="site-banner">
                    <div className="container">
                        <div className="site-banner-main">
                            <div className="site-banner-content">
                                <h1>Innovative Offerings to <br /> Empower Your <span className="g-clr"> Success </span></h1>
                                <p>At CYTA Technologies, we offer a comprehensive range of services designed to empower
                                    businesses and drive their success in the modern digital landscape. From innovative web
                                    design and development to cutting-edge mobile app solutions, our services are crafted to
                                    deliver exceptional experiences and tangible results.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-main">
                    <div className="container">
                        <div className="new-services-al">
                            {renderedServices}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Services