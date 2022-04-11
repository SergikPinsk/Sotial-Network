import React from "react";
import s from './../Dialog.module.css'

type MessagePropsType = {
    message: string
}

export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}