import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialog.module.css'


type DialogItemProps = {
    name: string
    id: string
}

export  const DialogItem = (props: DialogItemProps) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}