import React from 'react';
import s from './Friends.module.css';

const Friends = () => {
    return (<div className={s.friends}>
            <div className={s.item}>
                <img src='https://download-cs.net/steam/avatars/3412.jpg'/>
            </div>
            <div>
                Андрей Коновалов
            </div>
            <div className={s.item}>
                <img src='https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg'/>
            </div>
            <div className={s.color}>
                Макс Барских
            </div>
            <div className={s.item}>
                <img src='https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'/>
            </div>
            <div className={s.color}>
                Жека Первый
            </div>
            <div className={s.item}>
                <img src='https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'/>
            </div>
            <div className={s.color}>
                Коридор Быстрый
            </div>
        </div>
    )
}

export default Friends;