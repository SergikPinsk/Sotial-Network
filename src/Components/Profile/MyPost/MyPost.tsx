import React, {ChangeEvent, useState} from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {findAllByDisplayValue} from "@testing-library/react";
import {DispatchTypes, store} from "../../../redux/state";
import {addPostAC, changePostAC} from "../../../redux/post-reducer";

type PropsPost = {
    id: string
    message: string
    like: number
}

type PropsPostDate = {
    post: Array<PropsPost>
    dispatch: (action: DispatchTypes) => void
    newValueText: string
}

const MyPosts = (props: PropsPostDate) => {

    let postElement = props.post.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let change = event.currentTarget.value
        props.dispatch(changePostAC(change))

    }

    return (
        <div className={s.postsBlock}>
            <h3>My POST</h3>
            <div>
                <textarea
                    value={props.newValueText}
                    onChange={onChangeHandler}></textarea>
            </div>
            <div>
                <button onClick={()=>props.dispatch(addPostAC())}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;


