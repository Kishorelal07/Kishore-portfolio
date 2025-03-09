import react from "react"
import "../../components/workExperience/CurrentExp.css"

const CurrentExp = () => {
    return (
        <div className="container-exp">
            <h2>📌 My Journey</h2>

            <div className="timeline">

                <div className="timeline-item">
                    <h5>💼 Work Experience</h5>
                    <p className="currP">Java Backend Developer at CUB (City Union Bank)</p>
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
        </div>

    )
}

export default CurrentExp