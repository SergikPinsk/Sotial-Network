import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    like: number
}

const Post = (props: PostPropsType) => {

    return (
        <div className={s.item}>
            <img src="https://cdn.pixabay.com/photo/2015/10/31/22/21/sunrise-1016356_960_720.jpg" />
            {props.message}
            <div>
                <span>{props.like} Like</span>
            </div>
        </div>

    )
}

export default Post;
