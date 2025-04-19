import React from "react";
import "../../components/workExperience/CurrentExp.css";

const CurrentExp = () => {
    return (
        <section id='currExp'>
            <h5>My Degree to Job</h5>
            <h2 id='about'>My Journey</h2>
            <div className="container-exp">
                <div className="timeline">
                    <div className="timeline-item">
                        <h5>💼 Work Experience</h5>
                        <p className="currP">Java Backend Developer at Newgen Software Technologies</p>
                        <p className="date">2024 - Present</p>
                    </div>

                    <div className="timeline-item">
                        <h5>🎓 College</h5>
                        <p className="currP">Velammal College of Engineering and Technology</p>
                        <p className="date">2024</p>
                    </div>

                    <div className="timeline-item">
                        <h5>🏫 School</h5>
                        <p className="currP">Velammal Matriculation Higher Secondary School</p>
                        <p className="date">2018</p>
                    </div>
                </div>

                {/* Glowing launchpad */}
                <div className="rocket-launchpad"></div>
                {/* <p className="motivation">"Onward to Success!" 🚀</p> */}
            </div>
        </section>
    );
};

export default CurrentExp;
