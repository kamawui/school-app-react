import "./modals.css";
import React from "react";
import {Link} from "react-router-dom";

const QuitTestModal = ({active, setActive}) => {
    return (
        <div className={`modal-overlay ${active ? "active" : ""}`}>
            <div className="modal">
                <div className="modal-content">
                    <span className="header right">Підтвердити вихід?</span>
                    <div className="modal-item border-bot">Прогрес може не зберегтися</div>
                </div>
                <div className="modal-buttons">
                    <button className="action-btn" onClick={() => setActive(false)}>Назад</button>
                    <Link to="/">
                        <button className="call-to-action-btn" onClick={() => setActive(false)}>ОК</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuitTestModal;