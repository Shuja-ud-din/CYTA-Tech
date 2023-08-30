import React from 'react'
import icon from '../../assets/images/icon.png'

const StoryCard = ({ story }) => {
    return (
        <>
            <div className="item">
                <div className="stories-slides">
                    <div className="stories-slides-sub">
                        <div className="slides-images">
                            <img src={story.clientImage} alt="lazy" />
                        </div>
                        <div className="slides-content">
                            <img src={icon} alt="lazy" />
                            <p>{`"${story.content}"`}</p>
                            <div className="s-name-flex">
                                <h4>{story.clientName}</h4>
                                <span>|</span>
                                <p>{story.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoryCard