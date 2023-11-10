import React, {useEffect, useState} from "react";
import Question from "../components/question/Question";
import TestCompleting from "../components/test-completing/testCompleting";
import NoPage from "./NoPage";

function Test({test, setTestResult, setTestEnded, testEnded, setShowResults}) {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(1);
    const [answerList, setAnswerList] = useState({});

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
                answers: Object.values(answerList)
            },
            loading: false
        });

        setTestEnded(true);
        setShowResults(true);
    }

    return (
        <div className="test-wrapper">
            {
                testEnded ? <NoPage/> :
                    <>
                        <TestCompleting test={test} activeQuestionIndex={activeQuestionIndex}
                                        setActiveQuestion={setActiveQuestionIndex} endTest={endTest}/>
                        <Question test={test} answerList={answerList} setAnswer={setAnswer} endTest={endTest}
                                  activeQuestionIndex={activeQuestionIndex}
                                  setActiveQuestionIndex={setActiveQuestionIndex}/>
                    </>
            }
        </div>
    )
}

export default Test;