import "./forms.css";
import React from "react";

const Forms = ({forms}) => {

    console.log(forms);

    const availableForms = forms.forms.map((item, key) => {
        return (
            <button className="available-form action-btn" key={key}>{item}</button>
        )
    })

    return (
        <div className="forms-wrapper">
            <div className="forms-subject">{forms.title}</div>
            <div className="available-forms-message">Оберіть клас: </div>
            <div className="available-forms">
                {availableForms}
            </div>
        </div>
    )
}

export default Forms;