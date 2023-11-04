import React, {useState} from "react";
import "./intro.css"

const Intro = ({burgerActive}) => {
    const introClasses =burgerActive ? "" : "intro-full-width";

    return (
        <div className="intro-wrapper">
            <div className={`intro-info ${introClasses}`}>
                <h2 className="intro-header">Вітаємо у TestHub</h2>
                <p className="intro-paragraph">
                    У цьому <a className="linked-text" href="https://react.dev/" target="_blank">React</a>
                    -додатку ви можете знайти тестування з будь-якого предмета для учнів середньої та старшої школи.
                </p>
            </div>
        </div>
    )
}

export default Intro;