import React from 'react'
import HomeTopBox from './HomeTopBox'
import HomeSlides from './HomeSlides'
import HomeInfo from './HomeInfo'
import OurProcess from './OurProcess/OurProcess'

const HomeExp = () => {
    return (
        <>
            <div className="home-main-1">
                <HomeTopBox />
                <HomeSlides />
                <HomeInfo />
            </div>
            <OurProcess />
        </>
    )
}

export default HomeExp