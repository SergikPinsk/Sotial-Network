import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPost/MyPost";
import {DispatchTypes} from "../../redux/state";

type DataPropsType = {
    id: string
    message: string
    like: number
}

type ProfilePropsType = {
    dataProfile: Array<DataPropsType>
    dispatch: (action: DispatchTypes)=>void
    newValueText: string
}
export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                post={props.dataProfile}
                dispatch={props.dispatch}
                newValueText={props.newValueText}
            />
        </div>
    )
}

