import React from 'react'
import arrowC2 from '../assets/images/arrow-c2.png'
import btnArrow from '../assets/images/btn-arrow.png'
import wk from '../assets/images/wk.png'

const WorkTogether = () => {
    return (
        <>
            <section className="lets-work">
                <div className="container">
                    <div className="work-flex">
                        <div className="work-content">
                            <h2>Let's <span>Work Together</span> to <br /> Achieve Your <span>Business Goals</span> .</h2>
                            <p> We believe in building long-term relationships with our clients and helping them achieve
                                their
                                business goals. If you are ready to take the next step and start working with us, fill out
                                the
                                contact form below and we'll get in touch with you shortly.</p>
                            <div className="tab-btn wk2 banner-btn">
                                <a href="/">Contact us <img className="hov1" src={btnArrow} alt="lazy" /> <img
                                    className="hov2" src={arrowC2} alt="lazy" /> </a>
                            </div>
                        </div>
                        <div className="work-image">
                            <img src={wk} alt="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkTogether