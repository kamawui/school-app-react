import React from "react";
import OptionsMenu from "../components/options-menu/OptionsMenu";
import TestOptions from "../components/test-options/TestOptions";

function Options({subjects, forms, subjectList, setTestEnded, clearForm, setFormsBySubjects, getFormsBySubject,
                     nameOption, setNameOption, surnameOption, setSurnameOption,
                     burgerActive, setBurgerActive, setFormOption, formOption,
                     subjectOption, setSubjectOption, fetchTest}) {

    const homeComponentsClasses = burgerActive ? "" : "full-width";

    return (
        <div className="options-wrapper">
            <div className="home-components-group">
                <OptionsMenu subjects={subjectList}
                             subjectOption={subjectOption}
                             setSubjectOption={setSubjectOption}
                             burgerActive={burgerActive}
                             setBurgerActive={setBurgerActive}
                             setFormsBySubjects={setFormsBySubjects} getFormsBySubject={getFormsBySubject}
                />
                <div className={`home-components ${homeComponentsClasses}`}>
                    <TestOptions forms={forms} subjects={subjects} setTestEnded={setTestEnded}
                                 formOption={formOption} setFormOption={setFormOption}
                                 subjectOption={subjectOption} setSubjectOption={setSubjectOption}
                                 nameOption={nameOption} setNameOption={setNameOption}
                                 surnameOption={surnameOption} setSurnameOption={setSurnameOption}
                                 fetchTest={fetchTest} burgerActive={burgerActive} clearForm={clearForm}
                    />
                </div>
            </div>
        </div>
    )
}

export default Options;