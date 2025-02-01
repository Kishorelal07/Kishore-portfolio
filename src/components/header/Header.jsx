import React from 'react'
import CTA from './CTA'
import "../header/Header.css"
import myIMG from "../../assets/IMG_9470.png"

const Header = () => {
    return (
        <header id="home">

            <div className="header__container">

                <h5>Hello, I'm</h5>
                <h1>Kishore</h1>
                <h5 className="text-light">Application Engineer</h5>
                <CTA/>
                {/* <HeaderSocials/> */}

                <div className="me">
                    <img src={myIMG}></img>
                </div>

                <a href="#contacts" className="scroll__down"></a>

            </div>
        </header>
    )
}

export default Header