import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from '../../assets/images/arrow.png'
import btnArrow from '../../assets/images/btn-arrow.png'
import arrowC2 from '../../assets/images/arrow-c2.png'
import { DataContext } from '../../context/AppData'

const ServiceCard = ({ service, index }) => {

    const navigate = useNavigate();
    const { setActiveIndex } = useContext(DataContext)

    const renderedTypes = service.subTypes.map((type, index) => {
        return (
            <p key={index}>
                <img src={arrow} alt="lazy" />
                {type}
            </p>
        )
    })

    const showService = (event) => {
        event.preventDefault();
        index < 6 ?
            setActiveIndex(index + 1) :
            setActiveIndex(0);
        navigate("/Work")
    }

    return (
        <>
            <div className="key-flex">
                <div className="key-image">
                    <img src={service.image} alt="lazy" />
                </div>
                <div className="key-text">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="text-list">
                        {renderedTypes}
                    </div>
                    <div className="banner-btn p3">
                        <a href='/Work' onClick={showService}>
                            See {service.type} projects
                            <img className="hov1" src={btnArrow} alt="lazy" />
                            <img className="hov2" src={arrowC2} alt="lazy" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard