import React from "react";
import { Parallax, Background } from "react-parallax";
import img1 from '../images/blueprint.jpg'
import img2 from '../images/construction1.jpeg'
import img3 from '../images/construction2.jpg'
import img4 from '../images/building7.jpg'

export const Headline1 = () => {
    return (
        <div>
            <Parallax bgImage = {img1}  strength={500}>
                <div style = {{height: 700}}>
                </div>
            </Parallax>
            <h1>At Pristine Architecture we are a full service firm, from blueprint to construction we are there in every step!</h1>
            <Parallax bgImage = {img2}  strength={500}>
                <div style = {{height: 700}}>
                </div>
            </Parallax>
            <h1>With our contractor partners we have 40 years of experience building some of the biggest projects all over the world. You can trust Pristine Architecture.</h1>
            <Parallax bgImage = {img3}  strength={500}>
                <div style = {{height: 700}}>
                </div>
            </Parallax>
            <h1>Small projects to big projects, we do it all.</h1>
            <Parallax bgImage = {img4}  strength={500}>
                <div style = {{height: 700}}>
                </div>
            </Parallax>
        </div>
    )
}