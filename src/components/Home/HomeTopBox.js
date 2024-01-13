import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import btnArrow from '../../assets/images/btn-arrow.svg'
import arrowC2 from '../../assets/images/arrow-c2.svg'
import Shopify from '../../assets/images/Shopify.svg'
import Klaviyo from '../../assets/images/Klaviyo.svg'
import MESA from '../../assets/images/MESA.svg'

const HomeTopBox = () => {


    useEffect(() => {
        const swiftUpElements = document.querySelectorAll('.swift-up-text');
        swiftUpElements.forEach(elem => {

            const words = elem.textContent.split(' ');
            elem.innerHTML = '';

            words.forEach((el, index) => {
                words[index] = `<span><i>${words[index]}</i></span>`;
            });

            elem.innerHTML = words.join(' ');

            const children = document.querySelectorAll('span > i');
            children.forEach((node, index) => {
                node.style.animationDelay = `${index * .2}s`;
            });

        });
    }, [])

    return (
        <>
            <section className="home-banner">
                <div className="container" style={{ paddingTop: '60px' }}>
                    <div className="banner-main">
                        <div className="banner-content">
                            <div className="animate-text">
                                <h1 className="swift-up-text">Expert Technology Services for <span className="g-clr">Digital Marketing Agency</span></h1>
                            </div>
                            <p>CYTA Tech is a top Digital Marketing Agency in Australia. Strengthen brand identity, promote online presence and increase engagement & Conversions by redefining digital success.</p>
                        </div>
                        <div className="banner-btn">
                            <NavLink to="/Work">
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