import "./modals.css";
import React from "react";
import {Link} from "react-router-dom";

const DataNotFulfilled = ({active, setActive}) => {
    return (
        <div className={`modal-overlay ${active ? "active" : ""}`}>
            <div className="modal">
                <div className="modal-content">
                    <span className="header right">Помилка</span>
                    <div className="modal-item border-bot">Заповніть всі дані перед тим, як почати тест</div>
                </div>
                <div className="modal-buttons">
                    <button className="call-to-action-btn" onClick={() => {
                        setActive(false);
                    }}>ОК</button>
                </div>
            </div>
        </div>
    )
}

export default DataNotFulfilled;