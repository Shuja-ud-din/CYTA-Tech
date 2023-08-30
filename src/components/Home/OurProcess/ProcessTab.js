import React from 'react'
import btnArrow from '../../../assets/images/btn-arrow.png'
import arrowC2 from '../../../assets/images/arrow-c2.png'
import { NavLink } from 'react-router-dom'

const ProcessTab = ({ data, sr, activeClass }) => {


    return (
        <div id={`tab-${sr}`} className={`tab-content ${activeClass}`}>
            <div className="tab-flex">
                <div className="tax-sub-content">
                    <p>{data.para}</p>

                    <div className="banner-btn p3">
                        <NavLink>about CYTA <img className="hov1" src={btnArrow} alt="lazy" /> <img
                            className="hov2" src={arrowC2} alt="lazy" /> </NavLink>
                    </div>
                </div>
                <div className="tab-image-sub">
                    <img src={data.image} alt="lazy" />
                </div>
            </div>
        </div>
    )
}

export default ProcessTab