import React from 'react'
import arrowC2 from '../../assets/images/arrow-c2.svg'
import btnArrow from '../../assets/images/btn-arrow.svg'
import { NavLink } from 'react-router-dom'

const ServiceTab = ({ obj }) => {
    return (
        <>
            <div>
                <p>{obj.para}</p>
                <div className="tab-btn banner-btn">
                    <NavLink to={`/Services/${obj.service}`}>Learn more <img className="hov1" src={btnArrow} alt="lazy" /> <img
                        className="hov2" src={arrowC2} alt="lazy" /> </NavLink>
                </div>
                <img className='serviceImg' src={obj.image} alt="lazy" />
            </div>
        </>
    )
}

export default ServiceTab