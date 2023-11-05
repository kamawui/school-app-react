import React, {useEffect, useMemo, useState} from "react";
import Header from "../components/header/Header";
import OptionsMenu from "../components/options-menu/OptionsMenu";
import Intro from "../components/intro/Intro";
import TestOptions from "../components/test-options/TestOptions";
import {useLocation} from "react-router-dom";

function Options({links, subjects, forms, subjectList, activeTab, setActiveTab,
                     nameOption, setNameOption, surnameOption, setSurnameOption,
                     burgerActive, setBurgerActive, setFormOption, formOption,
                     subjectOption, setSubjectOption, fetchTest}) {

    const homeComponentsClasses = burgerActive ? "" : "full-width";

    const location = useLocation();


    return (
        <div className="options-wrapper">
            <Header links={links} activeTab={activeTab} setActiveTab={setActiveTab} location={location.pathname}/>
            <div className="home-components-group">
                <OptionsMenu subjects={subjectList}
                             subjectOption={subjectOption}
                             setSubjectOption={setSubjectOption}
                             burgerActive={burgerActive}
                             setBurgerActive={setBurgerActive}/>
                <div className={`home-components ${homeComponentsClasses}`}>
                    <Intro burgerActive={burgerActive}/>
                    <TestOptions forms={forms} subjects={subjects}
                                 formOption={formOption} setFormOption={setFormOption}
                                 subjectOption={subjectOption} setSubjectOption={setSubjectOption}
                                 nameOption={nameOption} setNameOption={setNameOption}
                                 surnameOption={surnameOption} setSurnameOption={setSurnameOption}
                                 fetchTest={fetchTest}
                    />
                </div>
            </div>
        </div>
    )
}

export default Options;