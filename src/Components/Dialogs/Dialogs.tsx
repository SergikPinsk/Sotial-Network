import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialog.module.css'
import {Message} from "./Message/Message";

type MessagePropsType = {
    name: string
    id: number
}

type PropsMessageDataType = {
    message: string
    id: number
}

type PropsMessageData = {
    messageData: Array<PropsMessageDataType>
    dialogsData: Array<MessagePropsType>
}

export const Dialogs = (props: PropsMessageData) => {


    let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messegesElement = props.messageData.map(m => <Message message={m.message}/>);
 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messegesElement}
            </div>
        </div>
    )
}