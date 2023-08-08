import React from "react";
import { Slide } from "react-slideshow-image";
import headline_img1 from '../images/blueprint.jpg'
import headline_img2 from '../images/construction1.jpeg'
import headline_img3 from '../images/construction2.jpg'

export const Headline1 = () => {
    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${headline_img1})` }}>
                    <span>Full service firm, from blueprint to...</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${headline_img2})` }}>
                    <span>construction with an outstanding team</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${headline_img3})` }}>
                    <span>Choose Pristine Archicture today.</span>
                </div>
            </div>
        </Slide>
    )
}