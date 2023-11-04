import React from "react";
import Header from "../components/header/Header";
import {Link} from "react-router-dom";

function FormOptions({links, activeTab, setActiveTab}) {
    return (
        <div className="form-options-wrapper">
            <Header links={links} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="home-components">
                <h1>There is still nothing on this page</h1>
            </div>
            <Link to="/options">
                <button className="back">
                    GO HOME
                </button>
            </Link>
        </div>
    )
}

export default FormOptions;