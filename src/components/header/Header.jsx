import React from 'react'
import CTA from './CTA'
import "../header/Header.css"
import myIMG from "../../assets/IMG_9470.png"

const Header = () => {
    return (
        <header id="home">

            <div className="header__container">

                <div className="me">
                    <img src={myIMG}></img>
                </div>

                <div>
                    <h5>Hello, I'm</h5>
                    <h1>Kishore</h1>
                    <h5 className="text-light">Application Engineer at Newgen Software Technologies</h5>
                </div>

                <CTA/>
                {/* <HeaderSocials/> */}



                <a href="#contacts" className="scroll__down"></a>

            </div>
        </header>
    )
}

export default Header