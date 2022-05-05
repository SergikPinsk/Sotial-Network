import React from 'react';
import {DispatchTypes, state1PropsType} from "./state";
import {v1} from "uuid";

export const MessageReducer = (messages: state1PropsType, action: DispatchTypes) => {
        switch (action.type) {
            case "NEW-MESSAGE-CHANGE-TEXT":
                messages.NewMessageText = action.newMessageText
                return messages;
            case "SEND-MESSAGE":
                let newSMS = {
                    message: messages.NewMessageText,
                    id: v1()
                }
                messages.messageData.push(newSMS)
                messages.NewMessageText = ''
                return messages
            default:
                return messages;
        }
};

export const ChangeStatusNewMessage =(newMessage: string)=> {
    return {
        type :'NEW-MESSAGE-CHANGE-TEXT',
        newMessageText: newMessage
    } as const
}

export const SendMessageCreater = ()=> {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
