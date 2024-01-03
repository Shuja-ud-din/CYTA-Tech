import React, { useEffect } from 'react'
import videoBG from '../assets/images/realistic-business.png'
import playIcon from '../assets/images/video-icon.png'
import mission1 from '../assets/images/mission(1).png'
import mission2 from '../assets/images/mission(2).png'
import arrow from '../assets/images/arrow.png'
import womanTaking from '../assets/images/woman-taking.png'
import OurClients from '../components/Clients/OurClients'
import buisness from '../assets/images/realistic-business9.png'
import { NavLink } from 'react-router-dom'

const About = () => {
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
                                <h1>About <br /> <span className="g-clr"> CYTA Technologies </span></h1>
                                <p>At CYTA Technologies, we are a passionate and forward-thinking software agency dedicated
                                    to providing cutting-edge technology solutions to empower businesses in the digital age.
                                    With our team of skilled professionals, we strive to deliver innovative and user-centric
                                    solutions tailored to meet our clients' unique needs. Our commitment to excellence,
                                    creativity, and continuous learning ensures that we stay at the forefront of industry
                                    trends and technologies, enabling us to drive tangible results and help businesses
                                    thrive in the rapidly evolving digital landscape.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-main">
                    <div className="container">
                        <div className="about-video">
                            <a data-fancybox="" href="https://youtu.be/bON-KPiiNCk">
                                <div className="video-back-img" style={{ backgroundImage: `url(${videoBG})` }}>
                                    <img src={playIcon} alt="lazy" />
                                </div>
                            </a>
                        </div>
                        <div className="goto">
                            <div className="count-fst">
                                <div id="numbers"><span className="count">15</span> <span>+</span></div>
                                <div> Years of Experience </div>
                            </div>
                            <div className="count-fst">
                                <div id="numbers"><span className="count">200</span> <span>+</span></div>
                                <div className="num-all">Projects Completed</div>
                            </div>
                            <div className="count-fst">
                                <div id="numbers"><span className="count">40</span> <span>+</span></div>
                                <div className="num-all">Happy Clients</div>
                            </div>
                            <div className="count-fst">
                                <div id="numbers"><span className="count">90</span><span>%</span></div>
                                <div className="num-all">Customer Retention Rate</div>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                        </div>

                    </div>
                </section>
            </div>

            <section className="about-cyta">
                <div className="container">
                    <div className="about-text-t">
                        <p>At CYTA Technologies, we are driven by a shared vision of harnessing the power of technology to
                            transform businesses and empower their growth. Our team is comprised of passionate individuals
                            who thrive on the challenges of the digital realm and are constantly seeking innovative
                            solutions to drive measurable impact. With a deep understanding of industry trends and emerging
                            technologies, we stay at the forefront of digital innovation, enabling us to deliver
                            forward-thinking solutions that give our clients a competitive edge. We pride ourselves on our
                            ability to adapt to the evolving needs of our clients, providing them with scalable and
                            future-proof solutions that support their long-term growth strategies.</p>
                        <p>In addition to our technical expertise, CYTA Technologies is known for our commitment to
                            exceptional customer service. We believe that successful partnerships are built on trust,
                            transparency, and open communication. We value the relationships we forge with our clients and
                            prioritize their satisfaction above all else. With a focus on delivering measurable results and
                            an unwavering commitment to quality, CYTA Technologies is the trusted partner you can rely on
                            for all your technology needs. Together, let's embark on a digital journey that will propel your
                            business to new heights.</p>
                    </div>
                </div>
            </section>

            <section className="about-mission">
                <div className="container">
                    <div className="mission-flex">
                        <div className="mission-fst">
                            <img src={mission2} alt="lazy" />
                            <h2>Our Misison</h2>
                            <p>Our mission is to empower businesses with innovative and user-centric technology solutions,
                                enabling them to thrive in the digital landscape and achieve their goals.</p>
                        </div>
                        <div className="mission-fst">
                            <img src={mission1} alt="lazy" />
                            <h2>Our Vision</h2>
                            <p>We envision a future where seamless and intuitive digital experiences are accessible to all,
                                where technology drives growth and fosters meaningful connections between businesses and
                                their customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-culture">
                <div className="container">
                    <div className="culture-flex">
                        <div className="culture-content">
                            <h2>Our Culture</h2>
                            <p>At CYTA Technologies, our values serve as the guiding principles that shape our actions and
                                define our culture. They reflect our commitment to excellence, collaboration, and delivering
                                exceptional technology solutions to our clients. Our core values include:</p>
                            <div className="cl-link">
                                <p><span className="cl-arrow"><img src={arrow} alt="lazy" /></span> Innovation </p>
                                <p><span className="cl-arrow"><img src={arrow} alt="lazy" /></span> Integrity </p>
                                <p><span className="cl-arrow"><img src={arrow} alt="lazy" /></span> Continuous Learning
                                </p>
                                <p><span className="cl-arrow"><img src={arrow} alt="lazy" /></span> Collaboration </p>
                                <p><span className="cl-arrow"><img src={arrow} alt="lazy" /></span> Impact Through Work
                                </p>
                                <p><span className="cl-arrow"><img src={arrow} alt="lazy" /></span> Client-Centric </p>
                            </div>
                        </div>
                        <div className="culture-image">
                            <img src={womanTaking} alt="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            <OurClients />

            <section className="about-work">
                <div className="container">
                    <div className="a-work-image" style={{ backgroundImage: `url(${buisness})` }}>
                        <div className="work-work">
                            <h2>Let's <span>Work Together</span> to <br /> Achieve Your <span>Business Goals.</span></h2>
                            <NavLink to="/Contact">Contact us</NavLink>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About