import React from "react";
import construction from '../images/construction2.jpg'
export const Headline2 = () => {
    return (
        <section id = 'headline-2'>
            <p classname = 'headline-desc'>to construction, we make it easy and hassle free.</p>
            <img className = 'headline-img' src = {construction} alt = 'construction of a building'/>
        </section>
    )
}