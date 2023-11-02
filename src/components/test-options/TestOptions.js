import React, {useState} from "react";
import "./testOptions.css";
import Skeleton from "../skeleton/Skeleton";
import Form from "../../svg/Form";

const TestOptions = () => {
    const [skeleton, setSkeleton] = useState(true);
    return (
        <div className="test-options-wrapper">
            <div className="settings-title">
                Щоб перейти до тесту, введіть ваше прізвище та ім'я, оберіть клас і предмет
            </div>
            <form className="settings-form">
                <div className="name-input-group">
                    <input type="text" className="name-input" placeholder="Введіть ім'я"/>
                    <Form />
                </div>
                <div className="surname-input-group">
                    <input type="text" placeholder="Введіть прізвище (опціонально)"/>
                </div>

            </form>
        </div>
    )
}

export default TestOptions;