import React, {useEffect} from "react";
import OptionsMenu from "../components/options-menu/OptionsMenu";
import TestOptions from "../components/test-options/TestOptions";

function Options({subjects, forms, subjectList, clearForm, setFormsBySubjects, getFormsBySubject,
                     nameOption, setNameOption, surnameOption, setSurnameOption, formsBySubjects,
                     burgerActive, setBurgerActive, setFormOption, formOption,
                     subjectOption, setSubjectOption, fetchTest}) {

    const homeComponentsClasses = burgerActive ? "" : "full-width";

    useEffect(() => {
        setBurgerActive(true);
    }, [])

    return (
        <div className="options-wrapper">
            <div className="home-components-group">
                <OptionsMenu subjects={subjectList} setSubjectOption={setSubjectOption}
                             burgerActive={burgerActive} setBurgerActive={setBurgerActive} formsBySubjects={formsBySubjects}
                             setFormsBySubjects={setFormsBySubjects} getFormsBySubject={getFormsBySubject}
                />
                <div className={`home-components ${homeComponentsClasses}`}>
                    <TestOptions forms={forms} subjects={subjects}
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