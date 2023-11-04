import React, {useState} from "react";
import "./optionsMenu.css";
import Arrow from "../../svg/Arrow";
import {Link} from "react-router-dom";

const OptionsMenu = ({subjects, burgerActive, setBurgerActive}) => {
    const [burgerMenuClasses, setBurgerMenuClasses] = useState(burgerActive ? "" : "burger-hidden");
    const [burgerButtonClasses, setBurgerButtonClasses] = useState(burgerActive ? "active-burger" : "");
    const toggleBurger = () => {
        setBurgerActive(!burgerActive);
        setBurgerMenuClasses(
            burgerActive ? "burger-hidden" : ""
        );
        setBurgerButtonClasses(
            burgerActive ? "" : "active-burger"
        )

    }

    const subjectsElements = !subjects.loading ? subjects.value.map((item, key) => {
        return (
            <Link to="/forms">
                <div className="option" key={key}><span>{item}</span></div>
            </Link>

        )
    }) : null;

    return (
        <div className="options-menu-wrapper">
            <div className={`burger-menu ${burgerMenuClasses}`}>
                <div className="fixed-options-menu-panel">
                    <span className="options-menu-title">Всі тести з предметів</span>
                    <span className="options-menu-message">Оберіть предмет, щоб перейти до вибору класу</span>
                </div>
                <div className="options">
                    {!subjects.error ? subjectsElements : null}
                </div>
            </div>
            <div className={`burger-button ${burgerButtonClasses}`}>
                <button className="burgerbtn" onClick={() => toggleBurger()}>
                    <Arrow angle={burgerMenuClasses ? 270 : 90}/>
                </button>
            </div>
        </div>

    )
}

export default OptionsMenu;