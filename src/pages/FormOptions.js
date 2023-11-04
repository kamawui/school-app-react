import React from "react";
import Header from "../components/header/Header";
import {Link, useLocation} from "react-router-dom";

function FormOptions({links, activeTab, setActiveTab}) {
    const location = useLocation();
    return (
        <div className="form-options-wrapper">
            <Header links={links} location={location.pathname}/>
            <div className="home-components">
                <h1>There is still nothing on this page</h1>
            </div>
            <Link to="/">
                <button className="back">
                    GO HOME
                </button>
            </Link>
        </div>
    )
}

export default FormOptions;