import React, { useEffect } from 'react'
import HomeTopBox from '../components/Home/HomeTopBox'
import HomeSlides from '../components/Home/HomeSlides'
import HomeInfo from '../components/Home/HomeInfo'
import OurClients from '../components/Clients/OurClients'
import OurProcess from '../components/Process/OurProcess'
import OurServices from '../components/Services/OurServices'
import OurProjects from '../components/Projects/OurProjects'
import SuccessStories from '../components/Stories/SuccessStories'
import WorkTogether from '../components/WorkTogether'

const Home = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <>
            <div className="home-main-1">
                <HomeTopBox />
                <HomeSlides />
                <HomeInfo />
            </div>
            <OurProcess />
            <OurServices />
            <OurClients />
            <OurProjects />
            <SuccessStories />
            <WorkTogether />
        </>
    )
}

export default Home