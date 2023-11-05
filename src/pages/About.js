import React from "react";
import Header from "../components/header/Header";
import Information from "../components/information/Information";
import Footer from "../components/footer/Footer";
import {Link, useLocation} from "react-router-dom";

function About({links}) {
    const location = useLocation();
    return (
        <div className="about-wrapper">
            <Header links={links} location={location.pathname}/>
            <div className="about-components">
                <Information links={links}/>
            </div>
        </div>
    )
}

export default About;