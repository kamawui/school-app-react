import React from "react";
import "./question.css";
import Spinner from "../spinner/Spinner";
import QuestionSign from "../../svg/QuestionSign";
import Answer from "../../svg/Answer";

const Question = ({loading, error, activeQuestion, setActiveQuestion, setAnswer}) => {

    const questionVariants = (!loading && activeQuestion.answers) ? activeQuestion.answers.map((item, key) => {
        return (
            <li className="variant" key={key}>
                <div className="radio-btn" onClick={() => setAnswer(activeQuestion.index, item)}>
                    <input type="radio" name="answer"/>
                </div>
                <div className="variant-content"><span>{item}</span>
                    <Answer />
                </div>
            </li>
        )
    }) : null;

    const questionContent = !loading ? (
        <div className="question-content">
            <div className="question-title">{activeQuestion.index}. {activeQuestion.question}</div>
            <div className="variants-title">Варіанти відповідей:
                <QuestionSign />
            </div>
            <div className="choose-one-message">Виберіть одну відповідь</div>
            <ul className="variants">
                {questionVariants}
            </ul>
            <div className="quiz-buttons">
                {activeQuestion.index === 12 ?
                    <button className="end-quiz quiz-btn">Завершити</button> :
                    <button className="next-question quiz-btn">Наступне</button>
                }
            </div>

        </div>
    ) : <Spinner />

    return (
        <div className="question-wrapper">
            {questionContent}
        </div>
    )
}

export default Question;