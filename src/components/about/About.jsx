import React from "react";
import { BsBookmarkStar } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import myIMG from "../../assets/Kishore_1.png"
import "../about/About.css"
const About = () =>{
    return (
        <section >
            <h5 id='about'>Get To Know</h5>
            <h2>about Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                            <img src={myIMG} alt="Me"></img>
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
                                <h5>Curent CGPA</h5>
                                <small>8.75</small>
                            </article>

                            <article className="about__card">
                                <TfiWorld className="about__icon"/>
                                <h5>Domain</h5>
                                <small>
                                    <ul>
                                        <li>Java Backend API</li>
                                    </ul>
                                </small>
                            </article>
                        </div>
                        <p>
                            I'm a <b>Electronics and Engineering Graduate</b> from Velammal College of Engineering and Technology.
                            I am an enthusiastic individual with a passion for learning new technologies and tackling challenges in the software industry.
                            Currently, I have been working in the Java domain at a client location for the past year, specializing in banking APIs and Fintech technologies.
                            A quick learner, I thrive in dynamic environments and am always eager to take on new challenges.  
                        </p>
                     </div>
                 </div>
        </section>
    )
}

export default About;