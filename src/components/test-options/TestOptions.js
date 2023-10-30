import React from "react";
import "./testOptions.css"

const TestOptions = () => {
    return (
        <div className="test-options-wrapper">
            <div className="test-opt-slider">
                <div className="slide active-slide">
                    <div className="slider-bar">
                        <span className="choose-form">Оберіть клас</span>
                        <span className="counter">Крок 1</span>
                    </div>
                    <div className="slider-content">
                        <div className="slider-field">
                            <div className="test-link">
                                <span>9</span>
                            </div>
                            <div className="test-link">
                                <span>10</span>
                            </div>
                            <div className="test-link">
                                <span>11</span>
                            </div>
                        </div>
                        <div className="slider-buttons call-to-action">
                            <button>Далі</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestOptions;