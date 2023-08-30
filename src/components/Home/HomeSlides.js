import React from 'react'
import slideImg7 from '../../assets/images/slide-img(7).png'
import slideImg6 from '../../assets/images/slide-img(6).png'
import slideImg5 from '../../assets/images/slide-img(5).png'
import slideImg4 from '../../assets/images/slide-img(4).png'
import slideImg3 from '../../assets/images/slide-img(3).png'
import slideImg2 from '../../assets/images/slide-img(2).png'
import slideImg1 from '../../assets/images/slide-img(1).png'
import slideImg from '../../assets/images/slide-img.png'
import ReactOwlCarousel from 'react-owl-carousel'

const HomeSlides = () => {
    return (
        <>
            <section className="home-slides">
                <div className="slides-main">
                    <ReactOwlCarousel className='owl-theme' rtlClass={'owl-rtl'} nav={false} dots={false} autoplay={1} autoplayHoverPause={true} autoplayTimeout={4000} smartSpeed={1500} loop margin={10} responsive={{
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3.5
                        }
                    }}>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg7} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg6} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg5} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg7} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg6} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg5} alt="lazy" />
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>


                <div className="slides-main">
                    <ReactOwlCarousel className='owl-theme' nav={false} dots={false} autoplay={1} autoplayHoverPause={true} autoplayTimeout={4000} smartSpeed={1500} loop margin={10} responsive={{
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 3.5
                        }
                    }}>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg4} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg3} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg2} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg1} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg4} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg3} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg2} alt="lazy" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-move-img">
                                <img src={slideImg1} alt="lazy" />
                            </div>
                        </div>

                    </ReactOwlCarousel>
                </div>
            </section >
        </>
    )
}

export default HomeSlides