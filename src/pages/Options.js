import React, {useEffect, useMemo, useState} from "react";
import useTestService from "../services/TestService";
import Header from "../components/header/Header";
import OptionsMenu from "../components/options-menu/OptionsMenu";
import Intro from "../components/intro/Intro";
import TestOptions from "../components/test-options/TestOptions";
import Footer from "../components/footer/Footer";

function Options({links, subjects, forms, subjectList, activeTab, setActiveTab,
                     burgerActive, setBurgerActive, setFormOption, formOption, subjectOption, setSubjectOption}) {
    const homeComponentsClasses = burgerActive ? "" : "full-width";

    return (
        <div className="options-wrapper">
            <Header links={links} activeTab={activeTab} setActiveTab={setActiveTab}/>
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
                    />
                    {/*<Footer links={links} error={linksError} loading={linksLoading}/>*/}
                </div>
            </div>
        </div>
    )
}

export default Options;