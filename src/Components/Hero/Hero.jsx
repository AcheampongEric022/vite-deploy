import React from 'react'
import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import instagram from "../../img/instagram.png"
import vector1 from "../../img/vector1.png"
import vector2 from "../../img/vector2.png"
import boy from "../../img/boy.png"
import "./Hero.css"



function Hero() {
    return (
        <div className="Hero container">
            <div className="HeroLeft">
                <div className="HeroName">
                    <span>Hi!, I Am</span>
                    <span>Acheampong Eric</span>
                    <span>Frontend Developer with high level of experience
                        in web designing and development, producing the
                        quality work.
                    </span>
                </div>
                <button className="button HeroButton">Hire Me</button>
                <div className="HeroIcons">
                    <a href="https://github.com/AcheampongEric022"> <img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/eric-acheampong-b22a58315/"> <img src={linkedin} alt="" /></a>
                    <a href="https://wa.me/+233556762407"> <img src={instagram} alt="" /></a>
                </div>
            </div>
            <div className="HeroRight">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                
            </div>

        </div>

    )
}

export default Hero