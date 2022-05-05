import React from 'react';
import {DataPostType, DataType, DispatchTypes} from "./state";
import {v1} from "uuid";

const PostReducer = (post:DataPostType, action: DispatchTypes ) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: v1(),
                message: post.newPostText,
                like: 14
            }
            post.postData.unshift(newPost)
            post.newPostText = '';
            return post;
        case 'NEW-TEXT-VALUE-BUSINES' :
            post.newPostText = action.text
            return post
        default:
            return post;
    }
};

export const addPostAC =() => {
    return {
        type: "ADD-POST"
    } as const
}

export const changePostAC =(change:string) => {
    return {
        type: "NEW-TEXT-VALUE-BUSINES",
        text: change
    } as const
}

export default PostReducer;