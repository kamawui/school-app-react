import React from "react";
import Information from "../components/information/Information";

function About({links}) {
    return (
        <div className="about-wrapper">
            <div className="about-components">
                <Information links={links}/>
            </div>
        </div>
    )
}

export default About;