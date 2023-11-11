import React from "react";
import TestResult from "../components/test-result/TestResult";
import Spinner from "../components/spinner/Spinner";

function Result({testResult, formOption, subjectOption, fetchTest}) {
    return (
        <div className="result-wrapper">
            <div className="result-components ">
                {
                    testResult.loading ? <Spinner/> :
                        <TestResult testResult={testResult} fetchTest={fetchTest}
                                    formOption={formOption} subjectOption={subjectOption}/>
                }
            </div>
        </div>
    )
}

export default Result;