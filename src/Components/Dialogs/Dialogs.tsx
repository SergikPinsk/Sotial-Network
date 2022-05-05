import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialog.module.css'
import {Message} from "./Message/Message";
import { DispatchTypes} from "../../redux/state";
import {ChangeStatusNewMessage, SendMessageCreater} from "../../redux/message-reducer";


type MessagePropsType = {
    name: string
    id: string
}

type PropsMessageDataType = {
    message: string
    id: string
}

type PropsMessageData = {
    messageData: Array<PropsMessageDataType>
    dialogsData: Array<MessagePropsType>
    dispatch: (messages: DispatchTypes) => void
    NewMessageText: string
}

export const Dialogs = (props: PropsMessageData) => {


    let dialogElements = props.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messegesElement = props.messageData.map(m => <Message key={m.id} message={m.message}/>);

    const ChangeHandlerMessage =(event:ChangeEvent<HTMLTextAreaElement>)=> {
        let value = event.currentTarget.value
        props.dispatch(ChangeStatusNewMessage(value))
    }

    const AddMessageHandler =()=> {
        props.dispatch(SendMessageCreater())
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messegesElement}
                </div>
                <div>
                    <textarea
                        value={props.NewMessageText}
                        onChange={ChangeHandlerMessage}
                    />
                </div>
                <div>
                    <button onClick={AddMessageHandler}>Send Message</button>
                </div>
            </div>
        </div>
    )
}