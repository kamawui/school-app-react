import React from "react";
import "./optionsMenu.css";
import Arrow from "../../svg/Arrow";
import {Link, useLocation} from "react-router-dom";

const OptionsMenu = ({subjects, burgerActive, setBurgerActive, setFormsBySubjects, getFormsBySubject, setSubjectOption}) => {
    const setForms = (subjectOption) => {
        try {
            async function fetchData() {
                return await getFormsBySubject(subjectOption);
            }

            fetchData()
                .then(res => setFormsBySubjects({
                    value: res,
                    loading: false,
                    error: false,
                }));
        } catch (err) {
            throw "Forms by subjects list error occurred: " + err;
        }
    }

    const location = useLocation();

    const subjectsElements = !subjects.loading ? subjects.value.map((item, key) => {
        return (
            <Link to="/forms" key={key} onClick={() => {
                setForms(item.tag);
                setBurgerActive(false);
                setSubjectOption(item);
            }}>
                <div className="option"><span>{item.title}</span></div>
            </Link>

        )
    }) : null;

    return (
        <>
            {burgerActive && <div className="dark-overlay" onClick={() => setBurgerActive(false)}></div>}
            <div className={`options-menu-wrapper white ${burgerActive ? "" : "wrapper-hidden"}`}>
                <div className={`burger-menu ${burgerActive ? "" : "burger-hidden"}`}>
                    <div className="fixed-options-menu-panel">
                        <div className="burger-nav-group">
                            <Link to="/" className={`burger-nav-point ${location.pathname !== "/about" ? "active-nav" : ""}`} onClick={() => setBurgerActive(false)}>
                                <span>Головна</span>
                            </Link>
                            <Link to="/about" className={`burger-nav-point ${location.pathname === "/about" ? "active-nav" : ""}`} onClick={() => setBurgerActive(false)}>
                                <span>Про проект</span>
                            </Link>
                        </div>
                        <span className="options-menu-title">Всі тести з предметів</span>
                        <span className="options-menu-message">Оберіть предмет, щоб перейти до вибору класу</span>
                    </div>
                    <div className="options">
                        {!subjects.error ? subjectsElements : null}
                    </div>
                </div>
                <div className={`burger-button ${burgerActive ? "active-burger" : ""}`} onClick={() => setBurgerActive(!burgerActive)}>
                    <button className="burgerbtn">
                        <Arrow angle={!burgerActive ? 270 : 90}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default OptionsMenu;