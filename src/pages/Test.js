import React, {useEffect, useState} from "react";
import QuestionsMenu from "../components/questions-menu/QuestionsMenu";
import Question from "../components/question/Question";
import Answer from "../svg/Answer";
import Spinner from "../components/spinner/Spinner";

function Test({test}) {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(1);
    const [answerList, setAnswerList] = useState({});

    useEffect(() => {
        setAnswerList(initializeAnswerList());
    }, [test]);

    const initializeAnswerList = () => {
        const initialAnswers = {};

        test?.value?.questions?.forEach((item) => {
            initialAnswers[item.index] = {
                correctAnswer: item.correctAnswer,
                userAnswer: "",
            };
        });

        return initialAnswers;
    }

    const setAnswer = (index, answer) => {
        setActiveQuestionIndex(index);

        setAnswerList((prevAnswerList) => {
            const updatedAnswerList = { ...prevAnswerList };
            updatedAnswerList[index].userAnswer = answer;
            return updatedAnswerList;
        });
    }

    return (
        <div className="test-wrapper">
            <QuestionsMenu test={test} activeQuestionIndex={activeQuestionIndex} setActiveQuestion={setActiveQuestionIndex}/>
            <Question test={test} answerList={answerList} setAnswer={setAnswer} activeQuestionIndex={activeQuestionIndex} setActiveQuestionIndex={setActiveQuestionIndex}/>
        </div>
    )
}

export default Test;