import React, {useEffect, useState} from "react";
import QuestionsMenu from "../components/questions-menu/QuestionsMenu";

function Test({test}) {
    const [activeQuestion, setActiveQuestion] = useState({});

    useEffect(() => {
        if (test.value?.questions?.length > 0) {
            setActiveQuestion(test.value.questions[0])
        }
    }, [test])

    return (
        <div className="test-wrapper">
            <QuestionsMenu test={test} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion}/>
        </div>
    )
}

export default Test;