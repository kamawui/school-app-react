import React from "react";
import "./testCompleting.css";
import {Link} from "react-router-dom";
import Ellipsis from "../../svg/Ellipsis";
import Spinner from "../spinner/Spinner";
import Timer from "../timer/Timer";

function TestCompleting({test, activeQuestionIndex, setActiveQuestion, endTest}) {
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
    }) : null;

    const menuContent = !test.loading ?
        <>
            <div className="test-timer">
                <Timer endTest={endTest}/>
            </div>
            <div className="questions-list">
                {questionsList}
            </div>
        </> : <Spinner />;

    return (
        <div className="questions-menu-wrapper">
            {menuContent}
        </div>
    )
}

export default TestCompleting;