import React from "react";
import { Parallax, Background } from "react-parallax";
import img1 from '../images/blueprint.jpg'
import img2 from '../images/construction1.jpeg'
import img3 from '../images/construction2.jpg'

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

export const Headline1 = () => {
    return (
        <div>
            <Parallax bgImage = {img1}  strength={500}>
                <div style = {{height: 500}}>
                    <div style = {insideStyles}>Constructin</div>
                </div>
            </Parallax>
            <Parallax bgImage = {img2}  strength={500}>
                <div style = {{height: 500}}>
                    <div style = {insideStyles}>Constructin</div>
                </div>
            </Parallax>
            <Parallax bgImage = {img3}  strength={500}>
                <div style = {{height: 500}}>
                    <div style = {insideStyles}>Constructin</div>
                </div>
            </Parallax>
        </div>
    )
}