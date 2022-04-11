import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return <div className={s.profInfoBlock}>
        <div className={s.imgPack}>
            <img src='https://www.registraduria.gov.co/IMG/code/images/pictures/5.jpg' />
        </div>
        <div className={s.item}>
            avatr + dicription
        </div>

    </div>
}

