import React from 'react';
import s from './Blog.module.css';
import {Link} from "react-router-dom";
import Card from "./Card";
import image1 from './../../img/blog1.jpg';
import image2 from './../../img/blog2.png';
import image3 from './../../img/blog3.png';
import image4 from './../../img/blog4.png';
import image5  from './../../img/blog5.jpg';
import image6 from './../../img/blog6.jpg';
import image7 from './../../img/blog7.png';
import image8 from './../../img/blog8.png';
import image9 from './../../img/blog9.png';


import Footer from "../Footer";
const Blog = ({menuActive,setMenuActive}) => {
    return (
        <header className={s.header} >
            <div className={s.container}>
                <div className={s.top_container}>
                    <div className={s.brand}>
                        <div className={s.logo_container}>
                            <svg className={s.logo} width="70" height="62" viewBox="0 0 70 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.5991 8.95464C53.4356 3.42544 44.92 0 35.528 0C32.5921 0 29.7451 0.335926 27.0295 0.963714C12.3438 4.35881 1.47634 16.3275 1.47634 30.5477C1.47634 36.4635 3.36521 41.9878 6.62063 46.6678C3.83398 48.9753 1.21747 52.0337 0.450573 54.1584C-0.396622 56.5158 -0.0898802 58.9924 1.7187 60.553C3.51867 62.11 6.33303 62.3625 9.22523 61.5406C12.1181 60.7162 15.3341 58.8525 18.8431 55.7058L41.2893 35.574L42.6676 36.8045C43.8016 37.8272 44.8978 37.0714 44.8048 36.147L44.5339 33.4142L48.803 29.585L52.9328 35.9927C54.3111 38.1321 56.4258 36.7396 56.0793 35.3315L53.9852 26.7671C53.8657 26.3478 53.7376 25.8522 53.5059 25.3697L56.7412 22.4696C58.3321 21.0359 58.2716 19.5272 57.1874 18.5551C56.1078 17.5867 54.4281 17.5313 52.8292 18.9602L49.6018 21.8663C49.0627 21.6584 48.507 21.5399 48.0376 21.4309L38.4928 19.5535C38.2943 19.5148 38.0964 19.51 37.9079 19.5339C36.5919 19.7072 35.6658 21.2987 37.7532 22.3756L44.8985 26.0822L40.6294 29.9115L37.5846 29.6702C36.5481 29.5868 35.7103 30.5696 36.8516 31.5875L38.2837 32.8758L17.0205 51.9403C8.56523 59.5255 3.70648 54.0303 8.53327 49.1385C9.63409 50.4173 10.8345 51.6193 12.1405 52.7312C12.9771 52.1725 13.896 51.4691 14.8733 50.6252C8.84601 45.6345 5.07354 38.5 5.07354 30.5467C5.07354 30.4091 5.08284 30.2703 5.08284 30.1262C6.00904 29.7664 7.2253 29.3722 8.49226 29.2864C8.82954 29.2673 9.16615 29.2721 9.4895 29.3013C13.021 29.6515 12.029 31.1203 15.4065 32.7017C18.7873 34.2872 17.3451 35.0098 16.7277 37.213C16.1388 39.3185 18.4028 43.7064 20.6178 45.4796L32.6418 34.6929C31.0224 33.0913 29.6945 34.1092 27.9596 32.6064C25.7347 30.6748 22.9309 30.8529 20.6549 31.6778C18.3808 32.5081 17.2454 31.2734 16.7515 29.7802C15.9913 27.4871 13.7153 26.9141 10.687 26.9034C8.66471 26.8998 11.5249 23.7222 12.4989 22.9109C13.8653 21.7649 17.0104 21.4981 17.5502 22.5208C18.0906 23.5434 19.402 22.5595 19.0819 21.3641C18.7626 20.1722 19.6436 19.8518 20.5532 18.972C21.4615 18.0934 22.6685 16.3233 22.8119 14.7919C22.9547 13.254 24.9651 13.9872 26.6289 14.4762C28.2901 14.9611 29.7615 13.0968 28.6985 12.2231C27.8068 11.4916 28.2311 11.4434 29.9832 10.7608C31.7281 10.0788 31.0289 8.32892 29.6313 7.45339C28.65 6.83691 28.0272 5.11741 27.7351 4.12446C30.2203 3.53598 32.8363 3.22031 35.5298 3.22031C39.4736 3.22031 43.2309 3.89693 46.6906 5.11196C46.6408 5.2704 46.5691 5.56046 46.4038 6.3181C45.8581 8.9072 47.4117 9.98416 48.634 8.9072C49.8503 7.82913 52.0373 8.79344 50.8749 10.2015C49.7136 11.6113 47.3944 9.3563 48.5577 12.1743C49.7149 15.6968 45.2133 12.9104 44.9817 15.9893C44.7606 18.9883 48.6612 18.7261 50.6099 16.9721C51.8176 15.8898 53.3314 15.1495 54.9998 15.0548C56.6922 14.9559 58.2823 15.5545 59.4058 16.5623C60.5259 17.5653 61.2131 18.9942 61.1035 20.5208C60.9979 22.0182 60.1654 23.372 58.9597 24.4537L57.0594 26.1597L59.1415 34.7276C59.5167 36.2643 58.9224 37.7969 57.7161 38.7999C58.0905 40.1376 58.123 41.5427 57.6271 42.8072C56.4479 45.8014 57.4452 47.9402 58.0958 48.9094C52.5266 54.4153 44.485 57.8735 35.5273 57.8735C32.6856 57.8735 29.9423 57.5137 27.3322 56.8651C28.9934 55.5559 33.4737 51.8255 34.2286 48.7021C34.7903 46.375 37.2793 49.0577 39.4226 43.6275C40.1829 41.6959 40.4478 40.4451 40.398 39.6058L21.8339 56.2581C21.2384 56.7906 20.6494 57.2855 20.0593 57.7543C24.7028 59.8902 29.958 61.1004 35.5279 61.1004C54.3163 61.1004 69.5812 47.4023 69.5812 30.5451C69.5812 22.1207 65.7635 14.4876 59.6001 8.95256L59.5991 8.95464Z" fill="black"/>
                            </svg>

                        </div>
                        <h4 className={s.logoText}>Путешествия как смысл жизни!</h4>
                    </div>
                    <div className={menuActive?`${s.burger_btn} ${s.open}`:s.burger_btn} onClick={()=>{setMenuActive(!menuActive)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={menuActive?`${s.menu} ${s.active}`:s.menu}>
                        <li className={s.item}><Link className={s.link} to="/">РАСПИСАНИЕ</Link></li>
                        <li className={s.item}><Link className={s.link} to="/blog">БЛОГ</Link></li>
                        <li className={s.item}><Link className={s.link} to="/pricing">КОНТАКТЫ</Link></li>
                    </ul>
                </div>
                <h1 className={s.gText}>Блог</h1>
                <p className={s.gTextDescription}>Самые интересные и сказочные места Ирландии</p>
                <div className={s.cards}>
                    <Card photo={image1}/>
                    <Card photo={image2}/>
                    <Card photo={image3}/>
                    <Card photo={image4}/>
                    <Card photo={image5}/>
                    <Card photo={image6}/>
                    <Card photo={image7}/>
                    <Card photo={image8}/>
                    <Card photo={image9}/>
                </div>
                <Footer/>
            </div>
        </header>


    );}
export default Blog;