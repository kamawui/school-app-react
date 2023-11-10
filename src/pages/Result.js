import React from "react";
import TestResult from "../components/test-result/TestResult";
import Spinner from "../components/spinner/Spinner";
import {useLocation} from "react-router";

function Result({testResult, nameOption, surnameOption, formOption, subjectOption, fetchTest, setTestEnded, clearForm}) {
    return (
        <div className="result-wrapper">
            <div className="result-components ">
                {
                    testResult.loading ? <Spinner/> :
                        <TestResult testResult={testResult} fetchTest={fetchTest}
                                    formOption={formOption} subjectOption={subjectOption} clearForm={clearForm}
                                    nameOption={nameOption} surnameOption={surnameOption} setTestEnded={setTestEnded}/>
                }
            </div>
        </div>
    )
}

export default Result;