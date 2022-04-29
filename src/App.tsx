import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import {Settings} from './Components/Settings/Settings';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Profile} from "./Components/Profile/Profile";
import {StorePropsType} from "./redux/state";


type PropsType = {
    store:StorePropsType
}
function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs
                            messageData={props.store.getState().sms.messageData}
                            dialogsData={props.store.getState().sms.dialogsData}

                        />}></Route>
                        <Route path='/profile' element={<Profile
                            newValueText={props.store.getState().post.newPostText}
                            dataProfile={props.store.getState().post.postData}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}>

                        </Route>
                        <Route path='/music' element={<Music/>}> </Route>
                        <Route path='/news' element={<News/>}> </Route>
                        <Route path='/settings' element={<Settings/>}> </Route>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
