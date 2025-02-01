import React from "react";

const CV = new URL("../../assets/KISHORELAL_A_R.pdf", import.meta.url).href;

const CTA = () =>{
    
    return(
        <div className="cta">
                <a href={CV} download="KISHORELAL A R" className="btn">Download CV</a>
                <a href="#contacts" className="btn btn-primary">Contact Me</a>
        </div>
    )
}
export default CTA