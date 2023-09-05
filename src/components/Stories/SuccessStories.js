import React, { useContext } from 'react'
import { DataContext } from '../../context/AppData'
import StoryCard from './StoryCard';
import ReactOwlCarousel from 'react-owl-carousel';
import arrowC1 from '../../assets/images/arrow-c1.svg'
import arrowC2 from '../../assets/images/arrow-c2.svg'

const SuccessStories = () => {

    const { storyData } = useContext(DataContext);

    const renderedStories = storyData.map((story, index) => {
        return <StoryCard key={index} story={story} />
    })

    return (
        <>
            <section className="stories">
                <div className="story-heading">
                    <h2>Success Stories</h2>
                </div>
                <div className="container">
                    <ReactOwlCarousel className="stories-h owl-carousel owl-theme" loop={false} items={1} dots={false} smartSpeed={1500} autoplayTimeout={4000} navText={[`<img src='${arrowC1}'>`, `<img src='${arrowC2}'>`]} nav={true} responsive={{
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }} >
                        {renderedStories}
                    </ReactOwlCarousel>
                </div>
            </section>
        </>
    )
}

export default SuccessStories