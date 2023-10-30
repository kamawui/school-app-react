import React from "react";
import "./optionsMenu.css";

const OptionsMenu = ({subjects, error, loading}) => {

    const subjectsElements = !loading ? subjects.map((item, key) => {
        return (
            <div className="option" key={key}><span>{item}</span></div>
        )
    }) : null;

    return (
        <div className="options-menu-wrapper">
            <div className="fixed-options-menu-panel">
                <span className="options-menu-title">Всі тести з предметів</span>
                <span className="options-menu-message">Оберіть предмет, щоб перейти до вибору класу</span>
            </div>
            <div className="options">
                {!error ? subjectsElements : null}
            </div>
        </div>
    )
}

export default OptionsMenu;