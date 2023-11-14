import React, {useEffect, useRef, useState} from "react";
import Question from "../components/question/Question";
import QuestionList from "../components/question-list/QuestionList";
import NoPage from "./NoPage";

function Test({test, setTestResult, setFirstSession,
                  formOption, subjectOption, nameOption, surnameOption}) {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(1);
    const [answerList, setAnswerList] = useState({});
    const timeInMinutes = useRef(0);
    const timeInSeconds = useRef(0);

    useEffect(() => {
        setAnswerList(initializeAnswerList());
    }, [test]);

    const initializeAnswerList = () => {
        const initialAnswers = {};

        test?.value?.questions?.forEach((item) => {
            initialAnswers[item.index] = {
                question: item.question,
                correctAnswer: item.correctAnswer,
                userAnswer: "",
            };
        });

        return initialAnswers;
    }

    const setAnswer = (index, answer) => {
        setActiveQuestionIndex(index);

        setAnswerList((prevAnswerList) => {
            const updatedAnswerList = {...prevAnswerList};
            updatedAnswerList[index].userAnswer = answer;
            return updatedAnswerList;
        });
    }

    const calculateResult = (answerList) => {
        let score = 0;
        let skipped = 0;
        let wrong = 0;

        for (let i = 1; i <= 12; i++) {
            if (answerList[i].correctAnswer === answerList[i].userAnswer) {
                score++;
            } else if (answerList[i].userAnswer === "") {
                skipped++;
            } else {
                wrong++;
            }
        }

        return {score, skipped, wrong};
    }

    const endTest = () => {
        setTestResult({
            value: {
                points: calculateResult(answerList).score,
                skipped: calculateResult(answerList).skipped,
                wrong: calculateResult(answerList).wrong,
                answers: Object.values(answerList),
                minutes: timeInMinutes.current,
                seconds: timeInSeconds.current,
                name: nameOption,
                surname: surnameOption,
                subject: subjectOption.title,
                form: formOption

            },
            loading: false
        });

        setFirstSession(false);
    }

    return (
        <div className="test-wrapper">
            {
                subjectOption ?
                    <>
                        <QuestionList test={test} activeQuestionIndex={activeQuestionIndex} answerList={answerList}
                                      timeInSeconds={timeInSeconds} timeInMinutes={timeInMinutes}
                                      setActiveQuestion={setActiveQuestionIndex} endTest={endTest}/>
                        <Question test={test} answerList={answerList} setAnswer={setAnswer} endTest={endTest}
                                  activeQuestionIndex={activeQuestionIndex}
                                  setActiveQuestionIndex={setActiveQuestionIndex}/>
                    </> : <NoPage />
            }
        </div>
    )
}

export default Test;