import React, { useContext } from 'react'
import { DataContext } from '../../context/AppData'
import StoryCard from './StoryCard';
import ReactOwlCarousel from 'react-owl-carousel';

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
                    <ReactOwlCarousel className="stories-h owl-carousel owl-theme" loop={false} items={1} dots={false}>
                        {renderedStories}
                    </ReactOwlCarousel>
                </div>
            </section>
        </>
    )
}

export default SuccessStories