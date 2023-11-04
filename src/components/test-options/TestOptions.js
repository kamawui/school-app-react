import React, {useState} from "react";
import "./testOptions.css";
import Form from "../../svg/Form";
import Arrow from "../../svg/Arrow";
import Ellipsis from "../../svg/Ellipsis";
import useTestService from "../../services/TestService";

const TestOptions = ({forms, subjects}) => {
    const [formDropdownClasses, setFormDropdownClasses] = useState("dropdown-hidden");
    const [subjectDropdownClasses, setSubjectDropdownClasses] = useState("dropdown-hidden");
    const [nameOption, setNameOption] = useState("");
    const [surnameOption, setSurnameOption] = useState("");
    const [formOption, setFormOption] = useState("");
    const [subjectOption, setSubjectOption] = useState("");

    const toggleDropdown = (dropdownType) => {
        if (dropdownType === "form") {
            setFormDropdownClasses(
                formDropdownClasses ? "" : "dropdown-hidden"
            );
        } else if (dropdownType === "subject") {
            setSubjectDropdownClasses(
                subjectDropdownClasses ? "" : "dropdown-hidden"
            );
        }
    }

    const setActiveOption = (type, value) => {
        if (type === "form") {
            setFormOption(value);
        } else if (type === "subject") {
            setSubjectOption(value);
        }

        toggleDropdown(type);
    }

    const clearForm = () => {
        setNameOption("");
        setSurnameOption("");
        setFormOption("");
        setSubjectOption("");
    }

    const formDropdownElements = !forms.loading ? forms.value.map((item, id) => {
        return (
            <div className="dropdown-element" onClick={() => setActiveOption("form", item)} id={id}>{item}</div>
        )
    }) : null;

    const subjectsDropdownElements = !subjects.loading ? subjects.value.map((item, id) => {
        return (
            <div className="dropdown-element" onClick={() => setActiveOption("subject", item)} id={id}>{item}</div>
        )
    }) : null;

    return (
        <div className="test-options-wrapper">
            <div className="settings-title">
                Щоб перейти до тесту, введіть ваше прізвище та ім'я, оберіть клас і предмет
            </div>
            <form className="settings-form">
                <div className="name-input-group">
                    <input type="text" className="name-input" value={nameOption}
                           placeholder="Введіть ім'я" onChange={(e) => setNameOption(e.target.value)}/>
                    <Form/>
                </div>
                <div className="surname-input-group">
                    <input type="text"  value={surnameOption}
                           placeholder="Введіть прізвище (опціонально)" onChange={(e) => setSurnameOption(e.target.value)}/>
                    <Form/>
                </div>
            </form>
            <div className="settings-dropdowns">
                <div className="form-input-group">
                    <div className="form-title">Оберіть клас</div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => toggleDropdown("form")}>
                            <Arrow angle={formDropdownClasses ? 180 : 0}/>
                        </button>
                        <div className="dropdown-area">
                            <div className="dropdown-items-group">
                                <input type="text" placeholder="Клас" onClick={() => toggleDropdown("form")}
                                       value={formOption} readOnly/>
                                <Ellipsis />
                            </div>
                            <div className={`dropdown-content ${formDropdownClasses}`}>
                                {formDropdownElements}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subject-input-group">
                    <div className="form-title">Оберіть предмет</div>
                    <div className="dropdown">
                        <button className="dropbtn"
                                onClick={() => formOption ? toggleDropdown("subject")
                                    : alert("Перш ніж перейти до вибору, предмета оберіть клас")}>
                            <Arrow angle={subjectDropdownClasses ? 180 : 0}/>
                        </button>
                        <div className="dropdown-area">
                            <div className="dropdown-items-group">
                                <input type="text" placeholder="Предмет" onClick={() => toggleDropdown("subject")}
                                       value={subjectOption} readOnly/>
                                <Ellipsis />
                            </div>
                            <div className={`dropdown-content ${subjectDropdownClasses}`}>
                                {subjectsDropdownElements}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="options-buttons">
                <button className="clear-form-btn" onClick={() => clearForm()}>Очистити</button>
                <button className="start-test-btn">Розпочати</button>
            </div>
        </div>
    )
}

export default TestOptions;