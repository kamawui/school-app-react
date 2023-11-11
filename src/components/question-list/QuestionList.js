import React from "react";
import "./questionList.css";
import Ellipsis from "../../svg/Ellipsis";
import Spinner from "../spinner/Spinner";
import Timer from "../timer/Timer";
import {Link} from "react-router-dom";

function QuestionList({test, activeQuestionIndex, setActiveQuestion, endTest}) {
    console.log(test);
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
            <div className="question-list-menu">
                <Link to="/">
                    <button className="action-btn">Назад</button>
                </Link>

                <Timer endTest={endTest}/>
            </div>
            <div className="questions-list">
                {questionsList}
            </div>
        </> : <Spinner />;

    return (
        <div className="questions-menu-wrapper white">
            {menuContent}
        </div>
    )
}

export default QuestionList;