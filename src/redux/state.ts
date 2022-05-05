import {v1} from "uuid";
import PostReducer, {addPostAC, changePostAC} from "./post-reducer";
import {ChangeStatusNewMessage, MessageReducer, SendMessageCreater} from "./message-reducer";

type MessagesType = {
    message: string
    id: string
}
type DialogType = {
    name: string
    id: string
}
export type DataType = {
    id: string
    message: string
    like: number
}
export type DataPostType = {
    newPostText: string
    postData: Array<DataType>
}
export type state1PropsType = {
    messageData: Array<MessagesType>
    NewMessageText: string
    dialogsData: Array<DialogType>
}
export type RootPropsType = {
    sms: state1PropsType
    post: DataPostType
}

export type DispatchTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof ChangeStatusNewMessage>
    | ReturnType<typeof SendMessageCreater>
export type StorePropsType = {
    _state: RootPropsType
    getState: () => RootPropsType
    renderTree: () => void
    _subscribe: (observer: () => void) => void
    dispatch: (action: DispatchTypes) => void

}
export let store: StorePropsType = {
    _state: {
        sms: {
            messageData: [
                {message: 'HI', id: v1()},
                {message: 'Good bye', id: v1()},
                {message: 'Howe are you', id: v1()},
                {message: 'WOOW', id: v1()},
                {message: 'Hallo world', id: v1()}
            ],
            dialogsData: [
                {name: 'Sergik', id: v1()},
                {name: 'Olka', id: v1()},
                {name: 'Olka', id: v1()},
                {name: 'Ighor', id: v1()},
                {name: 'Olka', id: v1()},
                {name: 'Ighor', id: v1()}
            ],
            NewMessageText: ''
        },
        post: {
            newPostText: '',
            postData: [
                {id: v1(), message: 'Hi how are you', like: 12},
                {id: v1(), message: 'Its my Life', like: 25},
                {id: v1(), message: 'Whery good', like: 266},
                {id: v1(), message: 'Its wery good', like: 2588},
            ]
        }

    },
    getState() {
        return this._state
    },
    renderTree() {
        console.log('state chnged')
    },
    _subscribe(observer) {
        this.renderTree = observer
    },
    dispatch(action) {
        this._state.post = PostReducer(this._state.post, action)
        this._state.sms = MessageReducer(this._state.sms, action)
        this.renderTree();
    }

}
