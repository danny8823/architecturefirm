import React from "react";
import hero_image1 from '../images/hero.jpg'
import hero_image2 from '../images/hero2.jpg'
export const Hero = () => {
    return (
        <section className= 'hero-container'>
            <img className = 'hero-img' src = {hero_image1} alt = 'downtown buildings'/>
            <div className = 'hero-title'>
                <p>Pristine Architecture Firm</p>
                <p className = 'hero-headline'>Architectural Visionaries Redefining Urban Landscapes</p>
            </div>
            
        </section>
    )
}