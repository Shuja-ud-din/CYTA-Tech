import React from 'react'
import { NavLink } from 'react-router-dom'
import btnArrow from '../../assets/images/btn-arrow.png'
import arrowC2 from '../../assets/images/arrow-c2.png'
import Shopify from '../../assets/images/Shopify.svg'
import Klaviyo from '../../assets/images/Klaviyo.svg'
import MESA from '../../assets/images/MESA.svg'

const HomeTopBox = () => {
    return (
        <>
            <section className="home-banner">
                <div className="container">
                    <div className="banner-main">
                        <div className="banner-content">
                            <h2>Expert Technology Services for <span className="g-clr">Modern Businesses</span></h2>
                            <p>At CYTA Technologies, we provide customized technology solutions to help your business
                                thrive, leveraging the latest technologies and delivering exceptional results.</p>
                        </div>
                        <div className="banner-btn">
                            <NavLink>
                                See Our Work
                                <img className="hov1" src={btnArrow} alt="lazy" />
                                <img className="hov2" src={arrowC2} alt="lazy" />
                            </NavLink>
                        </div>
                        <div className="banner-icons">
                            <img src={Shopify} alt="lazy" />
                            <img src={Klaviyo} alt="lazy" />
                            <img src={MESA} alt="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTopBox