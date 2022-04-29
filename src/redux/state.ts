
export const addPostAC =():AddTypeAction => {
    return {
        type: "ADD-POST"
    }
}
export const changePostAC =(change:string):NewTextAction => {
    return {
        type: "NEW-TEXT-VALUE-BUSINES",
        text: change
    }
}

type MessagesType = {
    message: string
    id: number
}
type DialogType = {
    name: string
    id: number
}
type DataType = {
    id: number
    message: string
    like: number
}
type DataPostType = {
    newPostText: string
    postData: Array<DataType>
}
type state1PropsType = {
    messageData: Array<MessagesType>
    dialogsData: Array<DialogType>
}
export type RootPropsType = {
    sms: state1PropsType
    post: DataPostType
}

type AddTypeAction = {
    type: "ADD-POST"
}
type NewTextAction = {
    type: 'NEW-TEXT-VALUE-BUSINES'
    text: string
}

export type DispatchTypes = AddTypeAction | NewTextAction
export type StorePropsType = {
    _state: RootPropsType
    getState: ()=> RootPropsType
    renderTree: ()=> void
    _subscribe:(observer:()=>void)=> void
    dispatch: (action: DispatchTypes )=> void

}
export let store: StorePropsType = {
    _state: {
        sms: {
            messageData: [
                {message: 'HI', id: 1},
                {message: 'Good bye', id: 2},
                {message: 'Howe are you', id: 3},
                {message: 'WOOW', id: 4},
                {message: 'Hallo world', id: 5}
            ],
            dialogsData: [
                {name: 'Sergik', id: 1},
                {name: 'Olka', id: 2},
                {name: 'Olka', id: 3},
                {name: 'Ighor', id: 4},
                {name: 'Olka', id: 5},
                {name: 'Ighor', id: 6}
            ]
        },
        post: {
            newPostText: '',
            postData: [
                {id: 1, message: 'Hi how are you', like: 12},
                {id: 2, message: 'Its my Life', like: 25},
                {id: 3, message: 'Whery good', like: 266},
                {id: 4, message: 'Its wery good', like: 2588},
            ]
        }

    },
    getState() {
        return this._state
    },
    renderTree () {
        console.log('state chnged')
    },
    _subscribe(observer){
        this.renderTree = observer
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost = {
                id: new Date().getTime(),
                message: this._state.post.newPostText,
                like: 14
            }
            this._state.post.postData.unshift(newPost)
            this._state.post.newPostText = ''
            this.renderTree();
        } else if (action.type === 'NEW-TEXT-VALUE-BUSINES') {
                this._state.post.newPostText = action.text
                this.renderTree();
        }
    }

}









