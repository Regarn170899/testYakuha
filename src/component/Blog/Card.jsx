import React from 'react';
import s from "./Card.module.css";
import person from './../../img/person.jpg'
const Card = (props) => {
    return (
        <div className={s.card}>
            <div className={s.cardImgBlock}><img className={s.cardImg}  src={props.photo} alt="photonone"/></div>
            <h3 className={s.cardName}>Заголовок</h3>
            <p className={s.cardDescription}>
                Также как перспективное планирование является качественно новой ступенью переосмысления внешнеэкономических политик. С другой стороны, выбранный нами инновационный путь представляет собой интересный эксперимент проверки экспериментов, поражающих по своей масштабности и грандиозности.Также как перспективное планирование является качественно новой ступенью переосмысления внешнеэкономических политик.
            </p>
            <div className={s.CreatorsProfile}>
                <div><img  src={person} alt=""/></div>
                <h5 className={s.personName}>Петренко Константин</h5>
                <p className={s.personData}>03 Марта 2021</p>
            </div>
        </div>
    );
};

export default Card;