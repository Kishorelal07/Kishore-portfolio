import React from "react";
import { BsBookmarkStar } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import myIMG from "../../assets/IMG_9470.png"
import "../about/About.css"
const About = () =>{
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="about__container">

                <div className="about__me">
                    <div className="about__me-image">
                            <img className="myIMG" src={myIMG}></img>
                    </div>
                </div>

                <div className="about__content">
                        <div className="about__cards">

                            <article className="about__card">
                                <GiGraduateCap className="about__icon"/>
                                      <h5>Degree</h5>
                                     <small>B.E Electronics and Communication</small>         
                            </article>

                            <article className="about__card">
                                <BsBookmarkStar className="about__icon"/>
                                <h5>Curent GPA</h5>
                                <small>8.75</small>
                            </article>

                            <article className="about__card">
                                <TfiWorld className="about__icon"/>
                                <h5>Domain</h5>
                                <small>
                                    <ul>
                                        <li>Net Centric</li>
                                        <li>Mobile Applications</li>
                                    </ul>
                                </small>
                            </article>
                        </div>
                        <p>
                            I'm a <b>Software Engineering Undergradute</b> at the University of Kelaniya. 
                            I'm an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply 
                            and expand my technical skills. 
                            With a strong academic foundation in software engineering and hands-on experience in various programming languages,
                            I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.  
                        </p>
                     </div>
                 </div>
        </section>
    )
}

export default About;