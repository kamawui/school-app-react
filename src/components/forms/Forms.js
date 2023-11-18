import "./forms.css";
import React from "react";
import {Link} from "react-router-dom";

const Forms = ({forms, fetchTest, setFormOption, subjectOption, loading}) => {

    const availableForms = forms.forms.map((item, key) => {
        return (
            <Link to="/test" key={key} onClick={() => {
                setFormOption(item);
            }}>
                <button className="available-form action-btn" onClick={() => fetchTest(item, subjectOption.tag)}>{item}</button>
            </Link>
        )
    })

    return (
        <div className="forms-wrapper white">
            <div className="header right">{forms.title}</div>
            <div className="available-forms-message border-bot gray">Оберіть клас:</div>
            <div className="available-forms">
                {availableForms}
            </div>
        </div>
    )
}

export default Forms;