import React from 'react'
import CTA from './CTA'
import "../header/Header.css"
import myIMG from "../../assets/IMG_9470.png"
import HeaderSocials from './HeaderSocials'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {

    const [text] = useTypewriter({
        words: ["React" ,"Java"],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <header id="home">

            <div className="header__container">

                <div className="me">
                    <img src={myIMG} alt="profile"></img>
                </div>

                <div>
                    <h5>Hello, I'm</h5>
                    <h1>Kishore</h1>
                    <h2 className="text-light">Application Engineer at Newgen Software Technologies</h2>
                    <h5 className="text-run">
                        I'm a <span>{text}</span>
                        <Cursor cursorBlinking={false} cursorStyle=""/> Developer.
                    </h5>
                </div>

                <CTA/>
                {/* <HeaderSocials/> */}



                <a href="#contacts" className="scroll__down"></a>

            </div>
        </header>
    )
}

export default Header