import React from "react";
import { feature_images } from "./constants";
import {motion, Variants } from "framer-motion"

export const Features = () => {
    
    return (
        <section>
            <div>
                {feature_images.map(({image}) => (
                    <div>
                        <img className = 'feature-imgs' src = {image} alt = 'projects'/>
                    </div>
                ))}
            </div>
        </section>
    )
}

