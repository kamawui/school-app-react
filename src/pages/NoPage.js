import React from "react";
import {Link} from "react-router-dom";

function NoPage() {
    return (
        <div className="error404">
            <img src={"/error404.gif"} alt=""/>
            {`Помилка 404 :<`}
            <Link to="/">
                <button className="call-to-action-btn">На головну</button>
            </Link>
        </div>
    )
}

export default NoPage;