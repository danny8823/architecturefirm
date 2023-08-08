import React from "react";
import {feature_images} from './constants'
import { Features } from "./Features";

export const Projects = () => {
    return (
        <section className = 'features-container'>
            <h1>Projects</h1>
            {feature_images.map(({image, description}) => (
                <Features projects = {image} desc = {description}/>
            ))}
        </section>
    )
}

