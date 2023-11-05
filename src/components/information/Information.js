import React from "react";
import "./information.css";
import Gear from "../../svg/Gear";
import {Link} from "react-router-dom";

const Information = ({links}) => {
    const infoLinks = !links.loading ? links.value.map((item, id) => {
        return (
            <div className="info-link" id={id}>Я в <a href={item.url} target="_blank">{item.title}</a></div>
        )
    }) : null;

    return (
        <div className="information-wrapper">
            <div className="info-intro">
                <h2 className="information-header">Вітаємо Вас у <span>TestHub</span>!</h2>
                <p className="info-paragraph">Навчальний проект, що включає в себе тести шкільної програми різних класів.</p>
            </div>
            <div className="info-description">
                <div className="info">Про проект</div>
                <div className="info-item"><span>Мета проекту: </span>
                    створення додатку, який може пропонувати тести шкільної програми.
                    Оцінити, наскільки добре учні знають програму певного класу.
                    Перевірка навичок розробника додатку в галузі веб-розробки.
                </div>
                <div className="info-item"><span>Особливості: </span>
                    проект включає в себе тести шкільної програми для 5-11 класів.
                    Предмети у кожного класу можуть відрізнятися.
                </div>
                <div className="info-item"><span>Технології: </span>
                    HTML/CSS, JavaScript, React, React Router.
                </div>
            </div>
            <div className="info-contacts">
                <div className="contacts">Інформація та посилання</div>
                <div className="info-item info-item-right">Підготовлено учнем 11 класу Бурлаченком Даніїлом</div>
                <div className="info-item"><span>Школа: </span>Вижницький опорний ліцей імені Юрія Федьковича</div>
                <div className="contacts-links">
                    <div className="contacts-left">
                        <div className="info-project-title"><span>2023</span> TestHub</div>
                        <div className="info-competition">Створено для проекту ###</div>
                    </div>
                    <div className="contacts-right">
                        <div className="info-links-span">Посилання: </div>
                        <div className="info-links">
                            {!links.error ? infoLinks : null}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Information;