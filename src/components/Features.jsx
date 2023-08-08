import React, {useEffect} from "react";
import {motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

export const Features = ({projects, desc}) => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const variantsOne = {
        visible: { opacity: 1, scale: 1, transition: {duration: 0.5}},
        hidden: { opactiy: 0, scale: 0}
    }

    useEffect(() => {
        if(inView) {
            control.start("visible")
        } else {
            control.start("hidden")
        }
    }, [control , inView])

    return (
       <motion.div 
            className = 'features'
            ref = {ref}
            animate = {control}
            initial = "hidden"
            variants={variantsOne}
        >
            <img className = 'feature-imgs' src = {projects} alt = 'projects'/>
            <p className = 'feature-desc'>{desc}</p>
        </motion.div>
    )
}