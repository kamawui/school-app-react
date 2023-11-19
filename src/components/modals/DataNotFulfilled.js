import "./modals.css";
import React from "react";
import {Link} from "react-router-dom";

const DataNotFulfilled = ({active, setActive}) => {
    return (
        <div className={`modal-overlay ${active ? "active" : ""}`}>
            <div className="modal">
                <div className="modal-content">
                    <span className="header right">Розпочати тест?</span>
                    <div className="modal-item border-bot"><span>Тест: </span>{subject.title}. {form} клас</div>
                    <div className="modal-item border-bot"><span>Час: </span>20 хвилин</div>
                </div>
                <div className="modal-buttons">
                    <button className="action-btn" onClick={() => setActive(false)}>Назад</button>
                    <button className="call-to-action-btn" onClick={() => {
                        setActive(false);
                    }}>Почати</button>
                </div>
            </div>
        </div>
    )
}

export default DataNotFulfilled;