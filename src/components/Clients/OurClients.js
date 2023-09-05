import React from 'react'
import client1 from '../../assets/images/slide-e(1).svg'
import client2 from '../../assets/images/slide-e(2).svg'
import client3 from '../../assets/images/slide-e(3).svg'
import client4 from '../../assets/images/slide-e(4).svg'
import arrowC1 from '../../assets/images/arrow-c1.svg'
import arrowC2 from '../../assets/images/arrow-c2.svg'
import ReactOwlCarousel from 'react-owl-carousel'

const OurClients = () => {

    const clientsImgs = [
        client1,
        client2,
        client3,
        client4,
        client3,
        client2,
        client1,
    ]

    const renderedClients = clientsImgs.map((image, index) => {
        return (
            <div key={index} className="item">
                <img src={image} alt="client" />
            </div>
        )
    })

    return (
        <>
            <section className="our-clients">
                <div className="container">
                    <div className="client-heading">
                        <h2>Trusted by <span>Our Clients</span></h2>
                    </div>
                    <div className="clients-logos">
                        <ReactOwlCarousel className='client owl-carousel owl-theme' items={5} margin={20} loop={false} dots={false} autoPlay={true} autoplayTimeout={4000} smartSpeed={1500} nav={true}
                            navText={[`<img src='${arrowC1}'>`, `<img src='${arrowC2}'>`]}
                            responsive={{
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 3
                                },
                                1000: {
                                    items: 5
                                }
                            }}>
                            {renderedClients}
                        </ReactOwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurClients