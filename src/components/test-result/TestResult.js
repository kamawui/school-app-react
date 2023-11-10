import "./testResult.css";
import React from "react";
import {Link} from "react-router-dom";

const TestResult = ({testResult, nameOption, surnameOption, formOption, subjectOption, fetchTest, setTestEnded, clearForm}) => {

    console.log(testResult.value.answers);

    const calculateAccuracy = (points, total) => {
        return ((points / total) * 100).toFixed(0);
    }

    const correctAnswers = testResult.value.answers.map((item, key) => {
        const userAnswerClasses = item.userAnswer === item.correctAnswer ? "correct-answer" : ""

        return (
            <div className="answer-info" key={key}>
                <div className="test-question">{key + 1}. {item.question}</div>
                <div className={`user-answer ${userAnswerClasses}`}><span>Ваша відповідь:</span> {item.userAnswer}</div>
                <div className="correct-answer"><span>Правильна відповідь:</span> {item.correctAnswer}</div>
            </div>
        )
    })

    return (
        <div className="test-result-wrapper">
            <div className="intro-wrapper">
                <div className="intro-info intro-full-width">
                    <h2 className="intro-header">Тест завершено!</h2>
                    <p className="intro-paragraph">
                        Можете спробувати перепройти його або перейти на головну.
                    </p>
                </div>
            </div>
            <div className="test-result">
                <div className="test-topic">{subjectOption.title}. {formOption} клас.</div>
                <div className="user-info">
                    <span>Виконав(-ла) {nameOption} {surnameOption}</span>
                </div>
                <div className="marks-group">
                    <div className="marks-group-item">
                        <span>Сума балів</span>
                        <span className="points">{testResult.value.points} / 12</span>
                    </div>
                    <div className="marks-group-item">
                        <span>Точність</span>
                        <span className="accuracy">{calculateAccuracy(testResult.value.points, 12)}%</span>
                    </div>
                </div>
                <div className="extra-info">
                    <div className="extra-info-item"><span>{testResult.value.points}</span> правильних</div>
                    <div className="extra-info-item"><span>{testResult.value.wrong}</span> неправильних</div>
                    <div className="extra-info-item"><span>{testResult.value.skipped}</span> пропущених</div>
                </div>
                <div className="result-buttons">
                    <Link to="/test">
                        <button className="action-btn" onClick={() => {
                            setTestEnded(false);
                            fetchTest(formOption, subjectOption);
                        }}>Почати спочатку
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="call-to-action-btn" onClick={clearForm}>На головну</button>
                    </Link>
                </div>
                <div className="correct-answers-message">Правильні відповіді</div>
                <div className="correct-answers">
                    {correctAnswers}
                </div>
            </div>
        </div>
    )
}

export default TestResult;