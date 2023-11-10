import React from "react";
import OptionsMenu from "../components/options-menu/OptionsMenu";
import Forms from "../components/forms/Forms";
import Spinner from "../components/spinner/Spinner";

function FormOptions({subjectList, subjectOption, setSubjectOption, burgerActive, setBurgerActive, formsBySubjects,
                         setFormsBySubjects, getFormsBySubject}) {

    const homeComponentsClasses = burgerActive ? "" : "full-width";
    const introClasses = burgerActive ? "" : "intro-full-width";

    return (
        <div className="form-options-wrapper">
            <div className="home-components-group">
                <OptionsMenu subjects={subjectList}
                             subjectOption={subjectOption}
                             setSubjectOption={setSubjectOption}
                             burgerActive={burgerActive}
                             setBurgerActive={setBurgerActive} setFormsBySubjects={setFormsBySubjects}
                             getFormsBySubject={getFormsBySubject}
                />
                <div className={`home-components ${homeComponentsClasses}`}>
                    <div className="intro-wrapper">
                        <div className={`intro-info ${introClasses}`}>
                            <h2 className="intro-header">Вітаємо у TestHub</h2>
                            <p className="intro-paragraph">
                                У цьому <a className="linked-text" href="https://react.dev/" target="_blank">React</a>
                                -додатку ви можете знайти тестування з будь-якого предмета для учнів середньої та старшої школи.
                            </p>
                        </div>
                    </div>

                    {formsBySubjects.loading ? <Spinner /> : <Forms forms={formsBySubjects.value}/>}
                </div>
            </div>
        </div>
    )
}

export default FormOptions;