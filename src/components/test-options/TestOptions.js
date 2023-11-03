import React, {useState} from "react";
import "./testOptions.css";
import Form from "../../svg/Form";
import Arrow from "../../svg/Arrow";
import Ellipsis from "../../svg/Ellipsis";
import useTestService from "../../services/TestService";

const TestOptions = ({forms, subjects}) => {
    const [formDropdownClasses, setFormDropdownClasses] = useState("dropdown-content dropdown-hidden");
    const [subjectDropdownClasses, setSubjectDropdownClasses] = useState("dropdown-content dropdown-hidden");
    const [formOption, setFormOption] = useState("");
    const [subjectOption, setSubjectOption] = useState("");

    const toggleDropdown = (dropdownType) => {
        if (dropdownType === "form") {
            setFormDropdownClasses(
                formDropdownClasses === "dropdown-content" ? "dropdown-content dropdown-hidden" : "dropdown-content"
            );
        } else if (dropdownType === "subject") {
            setSubjectDropdownClasses(
                subjectDropdownClasses === "dropdown-content" ? "dropdown-content dropdown-hidden" : "dropdown-content"
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
                    <input type="text" className="name-input" placeholder="Введіть ім'я"/>
                    <Form/>
                </div>
                <div className="surname-input-group">
                    <input type="text" placeholder="Введіть прізвище (опціонально)"/>
                    <Form/>
                </div>
            </form>
            <div className="settings-dropdowns">
                <div className="form-input-group">
                    <div className="form-title">Оберіть клас</div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => toggleDropdown("form")}><Arrow/></button>
                        <div className="dropdown-area">
                            <div className="dropdown-items-group">
                                <input type="text" placeholder="Клас" value={formOption} readOnly/>
                                <Ellipsis />
                            </div>
                            <div className={formDropdownClasses}>
                                {formDropdownElements}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subject-input-group">
                    <div className="form-title">Оберіть предмет</div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => toggleDropdown("subject")}><Arrow/></button>
                        <div className="dropdown-area">
                            <div className="dropdown-items-group">
                                <input type="text" placeholder="Предмет" value={subjectOption} readOnly/>
                                <Ellipsis />
                            </div>
                            <div className={subjectDropdownClasses}>
                                {subjectsDropdownElements}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="options-buttons">
                <button className="clear-form-btn">Очистити</button>
                <button className="start-test-btn">Розпочати</button>
            </div>
        </div>
    )
}

export default TestOptions;