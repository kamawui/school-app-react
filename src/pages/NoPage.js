import React from "react";

function NoPage() {
    return (
        <div className="error404">
            <img src={"/error404.gif"} alt=""/>
            {`Помилка 404 :<`}
        </div>
    )
}

export default NoPage;