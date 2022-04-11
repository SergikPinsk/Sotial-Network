import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPost/MyPost";

type DataPropsType = {
    id: number
    message: string
    like: number
}

type ProfilePropsType = {
    dataProfile: Array<DataPropsType>
    newPost: () => void
    newValueText: string
    functionTextValue: (text: string) => void
}
export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                post={props.dataProfile}
                newPost1={props.newPost}
                newValueText={props.newValueText}
                functionTextValue={props.functionTextValue}
            />
        </div>
    )
}

