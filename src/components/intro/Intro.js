import React from "react";
import "./intro.css"

const Intro = () => {

    return (
        <div className="intro-wrapper">
            <div className="intro-info">
                <h2 className="intro-header">Вітаємо у TestHub</h2>
                <p className="intro-paragraph">
                    У цьому <a className="linked-text" href="https://react.dev/" target="_blank">React</a>
                    -додатку ви можете знайти тестування з будь-якого предмета для учнів середньої та старшої школи.
                    <br/>Розпочніть всього у два кроки!
                </p>
            </div>
        </div>
    )
}

export default Intro;