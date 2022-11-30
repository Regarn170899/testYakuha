import React from 'react';
import s from './Sector_Ferst.module.css'
const SectorFerst = () => {
    return (
        <div className={s.sector}>
            <div className={s.content_container}>
                <h4 className={s.top_text}>Маршрут который останется навсегда в вашем сердце</h4>
                <div className={s.line_top}></div>
                <div className={s.map_and_text}>
                    <div className={s.map} >
                    </div>
                    <div className={s.m_full_text}>
                        <p className={s.m_text1}>Наше дело не так однозначно, как может показаться: социально-экономическое развитие предоставляет широкие возможности для укрепления моральных ценностей. В рамках спецификации современных стандартов, акционеры крупнейших компаний будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Но тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. Таким образом, укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации своевременного выполнения сверхзадачи.</p>
                        <div className={s.m_text2_btn}>
                            <p className={s.m_text2}>Наше дело не так однозначно, как может показаться: социально-экономическое развитие предоставляет широкие возможности для укрепления моральных ценностей. В рамках спецификации современных стандартов, акционеры крупнейших компаний будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок! Но тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть описаны максимально подробно. </p>
                            <button
                                className={s.m_btn}>Узнать больше
                                <div className={s.btn_arow}></div>
                            </button>
                        </div>
                    </div>
                    <div className={s.btn_adap}>
                        <button
                            className={s.m_btn_768}>Узнать больше
                            <div className={s.btn_arow}></div>
                        </button>
                    </div>
                </div>
                <h4 className={s.bottom_text}>Гиды /Проводники</h4>
                <div className={s.line}></div>
                <div className={s.people_video}>
                    <div className={s.people_card}>
                        <div className={s.people}>
                            <div className={s.man}>
                                <div className={s.img_men}></div>
                                <h5 className={s.name}>Василий Ходилин</h5>
                                <p className={s.prof}>Гид </p>
                                <p className={s.discription}>Самое лучшее в моей работе, это улыбки клиентов.</p>
                            </div>
                            <div className={s.women}>
                                <div className={s.img_women}></div>
                                <h5 className={s.name}>Арина Снималова</h5>
                                <p className={s.prof}>Фотограф </p>
                                <p className={s.discription}>Всегда подскажу на каком фото вы получились лучше.</p>
                            </div>
                        </div>
                        <div className={s.btn_adap}>
                            <button
                                className={s.m_btn_768}>Забронировать
                                <div className={s.btn_arow}></div>
                            </button>
                        </div>
                        <button className={s.m_btn}>
                            Забронировать
                            <div className={s.btn_arow}></div>
                        </button>
                    </div>
                    <div className={s.video}></div>
                </div>
            </div>
        </div>
    );
};

export default SectorFerst;