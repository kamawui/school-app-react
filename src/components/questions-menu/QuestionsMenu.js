import React from "react";
import "./questionsMenu.css";
import {Link} from "react-router-dom";
import Ellipsis from "../../svg/Ellipsis";
import Spinner from "../spinner/Spinner";

function QuestionsMenu({test, activeQuestionIndex, setActiveQuestion}) {
    const questionsList = !test.loading ? test.value.questions.map((item, key) => {
        return (
            <div onClick={() => setActiveQuestion(item.index)} key={key}
                className={`question-group ${activeQuestionIndex === item.index ? "active-question" : ""}`}>
                <div className="question-index">{key + 1}</div>
                <div className="question-list-border-group">
                    <div className="question"><span>{item.question}</span></div>
                    <div className="question-logo"><Ellipsis /></div>
                </div>
            </div>
        )
    }) : <Spinner />;

    return (
        <div className="questions-menu-wrapper">
            <div className="test-timer">
                00:00
            </div>
            <div className="questions-list">
                {questionsList}
            </div>
        </div>
    )
}

export default QuestionsMenu;