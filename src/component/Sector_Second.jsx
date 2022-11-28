import React from 'react';
import s from './Sector_Second.module.css'
const SectorSecond = () => {
    return (
        <div className={s.sector}>
            <div className={s.gradient1}></div>
            <div className={s.container}>
                <h4 className={s.f_text}>Сказочная </h4>
                <h1 className={s.s_text}>ИРЛАНДИЯ</h1>
                <p className={s.text_description}>Дублин / Собор святого Патрика / Святилище «Ньюгрейндж» /  Килларни /<br/>
                    Дублин / Собор святого Патрика / Святилище «Ньюгрейндж» /  Килларни / Национальный парк килларни /<br/>
                    Дублин / Собор святого Патрика /  Килларни / Национальный парк килларни /<br/>
                    Святилище «Ньюгрейндж» /  Килларни / Национальный парк килларни /  </p>
                <button className={s.btn}>
                    Забронировать
                    <div className={s.btn_arow}></div>
                </button>
                <div className={s.text_andnumber}>
                    <h4 className={s.text_number}>Ближайшие
                        походы:</h4>
                    <div className={s.number}>
                        <h1 className={s.numbers}>04</h1>
                        <div className={s.discription_number}>
                            <p className={s.num_m}>ИЮНЯ</p>
                            <p className={s.num_text}>Неповторимая
                                Ирландия</p>
                        </div>
                    </div>
                </div>
                <div className={s.full_numbers}>
                    <div className={s.number}>
                        <h1 className={s.numbers1}>07</h1>
                        <div className={s.discription_number}>
                            <p className={s.num_m}>ИЮНЯ</p>
                            <p className={s.num_text}>Неповторимая
                                Ирландия</p>
                        </div>
                    </div>
                </div>
                <div className={s.full_numbers}>
                    <div className={s.number}>
                        <h1 className={s.numbers1}>23</h1>
                        <div className={s.discription_number}>
                            <p className={s.num_m}>ИЮНЯ</p>
                            <p className={s.num_text}>Неповторимая
                                Ирландия</p>
                        </div>
                    </div>
                </div>
                <div className={s.full_numbers}>
                    <div className={s.number}>
                        <h1 className={s.numbers1}>25</h1>
                        <div className={s.discription_number}>
                            <p className={s.num_m}>ИЮНЯ</p>
                            <p className={s.num_text}>Неповторимая
                                Ирландия</p>
                        </div>
                    </div>
                </div>
                <div className={s.full_numbers2}>
                    <div className={s.number}>
                        <h1 className={s.numbers1}>06</h1>
                        <div className={s.discription_number}>
                            <p className={s.num_m}>ИЮНЯ</p>
                            <p className={s.num_text}>Неповторимая
                                Ирландия</p>
                        </div>
                    </div>
                </div>
                <div className={s.full_numbers}>
                    <div className={s.number}>
                        <h1 className={s.numbers1}>09</h1>
                        <div className={s.discription_number}>
                            <p className={s.num_m}>ИЮНЯ</p>
                            <p className={s.num_text}>Неповторимая
                                Ирландия</p>
                        </div>
                    </div>
                </div>
                <div className={s.full_numbers1}>
                    <div className={s.number}>
                        <h1 className={s.numbers1}>28</h1>
                        <div className={s.discription_number}>
                            <p className={s.num_m}>ИЮНЯ</p>
                            <p className={s.num_text}>Неповторимая
                                Ирландия</p>
                        </div>
                    </div>
                </div>
                <div className={s.footer}>
                    <div className={s.b_text_line}>
                        <p className={s.b_text}>Подпишитесь на наши социальные сети<br />
                            что бы первыми узнавать о новых маршрутах и турах ! </p>
                        <div className={s.arrow2}></div>
                    </div>
                    <div className={s.line2}></div>
                </div>
            </div>
            <div className={s.gradient}></div>
        </div>
    );
};

export default SectorSecond;