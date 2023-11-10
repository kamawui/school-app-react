import React from "react";
import "./question.css";
import Spinner from "../spinner/Spinner";
import QuestionSign from "../../svg/QuestionSign";
import Answer from "../../svg/Answer";
import {Link} from "react-router-dom";

const Question = ({test, activeQuestionIndex, setActiveQuestionIndex, setAnswer, answerList, endTest}) => {

    const questions = !test.loading ? test.value.questions.map((item, key) => {
        const questionClasses = activeQuestionIndex === item.index ? "question-item active-question-item " : "question-item"

        const variants = item.answers.map((answer, key) => {
            const variantsClasses = answerList[item.index]?.userAnswer === answer ? "variant active-variant" : "variant"

            return (
                <li className={variantsClasses} key={key}>
                    <div className="radio-btn" onClick={() => setAnswer(item.index, answer)}>
                        <div></div>
                    </div>
                    <div className="variant-content"><span>{answer}</span>
                        <Answer/>
                    </div>
                </li>
            )
        })

        return (
            <li className={questionClasses} key={key}>
                {variants}
            </li>
        )

    }) : null;

    const questionContent = !test.loading ? (
        <div className="question-content">
            <div
                className="question-title">{activeQuestionIndex}. {test.value.questions[activeQuestionIndex - 1].question}</div>
            <div className="variants-title">Варіанти відповідей:
                <QuestionSign/>
            </div>
            <div className="choose-one-message">Виберіть одну відповідь</div>
            <ul className="question-list">
                {questions}
            </ul>
            <div className="quiz-buttons">
                {activeQuestionIndex === 12 ?
                    <Link to="/result">
                        <button className="call-to-action-btn" onClick={endTest}>Завершити</button>
                    </Link>
                     :
                    <button className="action-btn" onClick={() => setActiveQuestionIndex((prevIndex) => prevIndex + 1)}>
                        Наступне
                    </button>
                }
            </div>

        </div>
    ) : <Spinner/>

    return (
        <div className="question-wrapper">
            {questionContent}
        </div>
    )
}

export default Question;