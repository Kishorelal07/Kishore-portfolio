import react from "react"
import "../../components/workExperience/CurrentExp.css"

const CurrentExp = () => {
    return (
        <section id="currentExp">
            <h5>Working Experience</h5>
            <h2>Current Working Experience</h2>

            <div className="experience__container_e">
               
                <div className="timeline">

                    <div className="timeline-item">
                            <div className=""></div>
                            <h4>Newgen Software Technologies</h4>
                            
                    </div>

                    <div className="line"></div>

                    <div className="timeline-item">
                            <div className="dot"></div>
                            <h4>Velammal College of Engineering and Technology</h4>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default CurrentExp