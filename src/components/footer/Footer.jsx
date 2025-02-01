import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Footer = () =>{
    return(
        <footer>
            <a href="#home" className="footer__logo">Kishore</a>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#myprojects">My projects</a></li>
            </ul>

            <div className="footer__socials">
                <a href=""><BsLinkedin/></a>
                <a href=""><BsGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy. Kishore lal. All rights reserved</small>
            </div>
        </footer>

    )
}

export default Footer