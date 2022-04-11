let renderTree = ()=> {}

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

export let state: RootPropsType = {
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
            {id: 2, message: 'Whery good', like: 266},
            {id: 2, message: 'Its wery good', like: 2588},
        ]
    }

}

export const addPost = () => {
    const newPost = {
        id: new Date().getTime(),
        message: state.post.newPostText,
        like: 14
    }
    state.post.postData.push(newPost)
    state.post.newPostText = ''
    renderTree();
}
export const newTextValueBusines = (text: string) => {
    state.post.newPostText = text
    renderTree();
}

export const subscribe =(observer:any)=> {
    renderTree = observer
}




