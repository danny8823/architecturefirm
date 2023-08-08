import React from "react";
import hero_image1 from '../images/hero.jpg'
import hero_image2 from '../images/hero2.jpg'
import { motion } from "framer-motion";
export const Hero = () => {
    return (
        <section className= 'hero-container'>
            <img className = 'hero-img' src = {hero_image1} alt = 'downtown buildings'/>
            <motion.div className = 'hero-title' animate = {{x : 200}} whileHover = {{scale: [null, 1.5,1.4]}} transition = {{duration: 0.3}}>
                <motion.h1 >Pristine Architecture Firm</motion.h1>
                <p className = 'hero-headline'>Architectural Visionaries Redefining Urban Landscapes</p>
            </motion.div>
        </section>
    )
}