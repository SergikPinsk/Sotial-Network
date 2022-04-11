import React, {ChangeEvent, useState} from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {findAllByDisplayValue} from "@testing-library/react";
import {state} from "../../../redux/state";

type PropsPost = {
    id: number
    message: string
    like: number
}

type PropsPostDate = {
    post: Array<PropsPost>
    newPost1: () => void
    newValueText: string
    functionTextValue: (text: string) => void
}

const MyPosts = (props: PropsPostDate) => {

    let postElement = props.post.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.functionTextValue(event.currentTarget.value)
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
                <button onClick={props.newPost1}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;


