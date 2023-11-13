import React from "react";
import Information from "../components/information/Information";
import OptionsMenu from "../components/options-menu/OptionsMenu";

function About({links, subjectList, setFormsBySubjects, getFormsBySubject, burgerActive, setBurgerActive, setSubjectOption}) {
    return (
        <div className="about-wrapper">
            <div className="hidden-burger">
                <OptionsMenu subjects={subjectList} setSubjectOption={setSubjectOption}
                             burgerActive={burgerActive} setBurgerActive={setBurgerActive}
                             setFormsBySubjects={setFormsBySubjects} getFormsBySubject={getFormsBySubject}/>
            </div>
            <div className="about-components">
                <Information links={links}/>
            </div>
        </div>
    )
}

export default About;