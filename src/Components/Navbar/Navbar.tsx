import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'


export const Navbar =()=> {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'> Message </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music'> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'> Settings</NavLink>
            </div>
        </div>
    )
}