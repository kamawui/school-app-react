import React, {useEffect, useRef, useState} from "react";
import QuestionsMenu from "../components/questions-menu/QuestionsMenu";
import Question from "../components/question/Question";

function Test({test}) {
    const [activeQuestion, setActiveQuestion] = useState({});
    const answerList = useRef({})

    useEffect(() => {
        if (!test.loading) {
            setActiveQuestion(test.value.questions[0]);

            initializeAnswerList();
        }
    }, [test]);

    const initializeAnswerList = () => {
        test.value.questions.forEach((item) => {
            answerList.current[item.index] = {
                    correctAnswer: item.correctAnswer,
                    userAnswer: "",
            }
        })

    }

    const setAnswer = (index, answer) => {
        answerList.current[index].userAnswer = answer;
        console.log(answerList.current[index]);
    }

    return (
        <div className="test-wrapper">
            <QuestionsMenu test={test} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion}/>
            <Question error={test.error} loading={test.loading} setAnswer={setAnswer}
                      activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion}/>
        </div>
    )
}

export default Test;