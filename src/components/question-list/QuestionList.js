import React, {useState} from "react";
import "./questionList.css";
import Ellipsis from "../../svg/Ellipsis";
import Spinner from "../spinner/Spinner";
import Timer from "../timer/Timer";
import QuitTestModal from "../modals/QuitTestModal";

function QuestionList({test, activeQuestionIndex, setActiveQuestion, endTest, timeInSeconds, timeInMinutes, answerList, clearForm}) {
    const questionsList = !test.loading ? test.value.questions.map((item, key) => {
        return (
            <div onClick={() => setActiveQuestion(item.index)} key={key}
                 className={`question-group ${activeQuestionIndex === item.index ? "active-question" : ""}`}>
                <div className="question-index">{key + 1}</div>
                <div className="question-list-border-group">
                    <div className="question"><span>{item.question}</span></div>
                    <div className="question-logo"><Ellipsis/></div>
                </div>
            </div>
        )
    }) : null;

    const questionsPanel = !test.loading ? test.value.questions.map((item, key) => {
        return (
            <div className={`question-icon ${answerList[key + 1]?.userAnswer ? "question-chosen" : ""}`}
                 onClick={() => setActiveQuestion(item.index)} key={key}>{key + 1}</div>
        )
    }) : null;

    const [quitTestModalActive, setQuitTestModalActive] = useState(false);

    const menuContent = !test.loading ?
        <>
            <div className="question-list-menu">
                <button className="action-btn" onClick={() => setQuitTestModalActive(true)}>На головну</button>
                <Timer endTest={endTest} timeInSeconds={timeInSeconds} timeInMinutes={timeInMinutes}/>
            </div>
            <div className="questions-list">
                {questionsList}
            </div>
        </> : <Spinner/>;

    return (
        <>
            <div className="questions-menu-wrapper white">
                {menuContent}
            </div>
            <div className="questions-panel">
                {questionsPanel}
            </div>
            <QuitTestModal active={quitTestModalActive} setActive={setQuitTestModalActive}/>
        </>

    )
}

export default QuestionList;