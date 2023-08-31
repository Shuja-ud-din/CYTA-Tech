import React from 'react'
import cLinks1 from '../assets/images/c-links(1).png'
import cLinks2 from '../assets/images/c-links(2).png'
import cLinks3 from '../assets/images/c-links(3).png'

const Contact = () => {
    return (
        <>
            <div className="home-main-1">
                <section className="site-banner">
                    <div className="container">
                        <div className="site-banner-main">
                            <div className="site-banner-content">
                                <h2>Request a Quote From <br /> <span className="g-clr"> Technologies </span></h2>
                                <p>Ready to take your digital presence to the next level? Fill out the form below to request
                                    a personalized quote tailored to your unique needs. Our team of experts at CYTA
                                    Technologies is ready to discuss your project requirements, provide valuable insights,
                                    and offer competitive pricing options.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-form">
                    <div className="container">
                        <div className="field-flex">
                            <div className="field1">
                                <label htmlFor="">First Name *</label>
                                <input type="text" placeholder="Your first name" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Last Name *</label>
                                <input type="text" placeholder="Your last name" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Email *</label>
                                <input type="email" placeholder="Your business email" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Phone Number *</label>
                                <input type="number" placeholder="Your phone number" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Company Name *</label>
                                <input type="text" placeholder="Company Name *" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Service Required *</label>
                                <select id="cars" name="cars">
                                    <option value="volvo">Select Service</option>
                                    <option value="saab">Select Service2</option>
                                    <option value="mercedes">Select Service3</option>
                                    <option value="audi">Select Service4</option>
                                </select>
                            </div>
                            <div className="field1">
                                <label htmlFor="">Project Details *</label>
                                <input type="text" placeholder="Your project brief" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Budget *</label>
                                <input type="text" placeholder="Your estimated budget" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Timeline *</label>
                                <input type="text" placeholder="Your expected deadline" />
                            </div>
                            <div className="field1">
                                <label htmlFor="">Additional Comments</label>
                                <textarea name="msg" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="submit-btn">
                                <input type="submit" value="Send message" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="contact-links">
                    <div className="container">
                        <div className="contact-links-flex">
                            <div className="contact-link-sub">
                                <div className="c-link-flex">
                                    <div className="c-link-image">
                                        <img src={cLinks3} alt="lazy" />
                                    </div>
                                    <div className="c-link-content">
                                        <h3>Visit us</h3>
                                        <a href="/">77 E1 Main Boulevard Gulberg, <br /> Block E1 Block E 1 Gulberg III, <br /> Lahore, Punjab</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-link-sub">
                                <div className="c-link-flex">
                                    <div className="c-link-image">
                                        <img src={cLinks2} alt="lazy" />
                                    </div>
                                    <div className="c-link-content">
                                        <h3>Call us</h3>
                                        <a href="/">+92 300 6088036</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-link-sub">
                                <div className="c-link-flex">
                                    <div className="c-link-image">
                                        <img src={cLinks1} alt="lazy" />
                                    </div>
                                    <div className="c-link-content">
                                        <h3>Email us</h3>
                                        <a href="/">info@cytatechnologies.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Contact