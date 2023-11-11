import "./testResult.css";
import React from "react";
import {Link} from "react-router-dom";
import QuestionSign from "../../svg/QuestionSign";
import Ellipsis from "../../svg/Ellipsis";

const TestResult = ({testResult, formOption, subjectOption, fetchTest}) => {

    const calculateAccuracy = (points, total) => {
        return ((points / total) * 100).toFixed(0);
    }

    const correctAnswers = testResult.value.answers.map((item, key) => {
        const userAnswerClasses = item.userAnswer === item.correctAnswer ? "correct-answer" :
                                    item.userAnswer === "" ? "gray" : "wrong-answer"

        return (
            <div className="answer-info" key={key}>
                <div className="test-question border-bot">{key + 1}. {item.question} <QuestionSign /></div>
                <div className={`user-answer ${userAnswerClasses}`}><span>Ваша відповідь:</span> {item.userAnswer}</div>
                <div className="correct-answer"><span>Правильна відповідь:</span> {item.correctAnswer}</div>
            </div>
        )
    })

    return (
        <div className="test-result-wrapper white">
            <div className="intro-wrapper">
                <div className="intro-info intro-full-width">
                    <h2 className="intro-header">Тест завершено!</h2>
                    <p className="intro-paragraph">
                        Можете спробувати перепройти його або перейти на головну.
                    </p>
                </div>
            </div>
            <div className="test-result">
                <div className="header right">{testResult.value.subject}. {testResult.value.form} клас.</div>
                <div className="user-info border-bot">
                    {testResult.value.name ?
                        <span>Виконав(-ла) {testResult.value.name} {testResult.value.surname}</span> :
                        <span>Перевірка знань</span>
                    }
                    <Ellipsis />
                </div>
                <div className="marks-group">
                    <div className="marks-group-item border-bot">
                        <span>Сума балів</span>
                        <span className="points">{testResult.value.points} / 12</span>
                    </div>
                    <div className="marks-group-item border-bot">
                        <span>Точність</span>
                        <span className="accuracy">{calculateAccuracy(testResult.value.points, 12)}%</span>
                    </div>
                </div>
                <div className="extra-info border-bot">
                    <div className="extra-info-item"><span className="correct-answer">{testResult.value.points}</span> правильних</div>
                    <div className="extra-info-item"><span className="wrong-answer">{testResult.value.wrong}</span> неправильних</div>
                    <div className="extra-info-item"><span className="gray">{testResult.value.skipped}</span> пропущених</div>
                </div>
                <div className="result-buttons">
                    {formOption && subjectOption ?
                        <Link to="/test">
                            <button className="action-btn" onClick={() => fetchTest(formOption, subjectOption.tag)}>Почати спочатку
                            </button>
                        </Link> : null
                    }

                    <Link to="/">
                        <button className="call-to-action-btn">На головну</button>
                    </Link>
                </div>
                <div className="header">Правильні відповіді</div>
                <div className="correct-answers">
                    {correctAnswers}
                </div>
            </div>
        </div>
    )
}

export default TestResult;