import React from "react";
import headline_img from '../images/blueprint.jpg'
export const Headline1 = () => {
    return (
        <section id = 'headline-1'>
            <img className = 'headline-img' src = {headline_img} alt = 'blueprint plan'/>
            <p classname = 'headline-desc'>We are a full service architectural firm, from design.....</p>
        </section>
    )
}