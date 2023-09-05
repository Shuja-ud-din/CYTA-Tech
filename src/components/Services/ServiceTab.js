import React from 'react'
import arrowC2 from '../../assets/images/arrow-c2.svg'
import btnArrow from '../../assets/images/btn-arrow.svg'

const ServiceTab = ({ obj }) => {
    return (
        <>
            <div>
                <p>{obj.para}</p>
                <div className="tab-btn banner-btn">
                    <a href="/">Learn more <img className="hov1" src={btnArrow} alt="lazy" /> <img
                        className="hov2" src={arrowC2} alt="lazy" /> </a>
                </div>
                <img src={obj.image} alt="lazy" />
            </div>
        </>
    )
}

export default ServiceTab