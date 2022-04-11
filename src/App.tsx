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
import {newTextValueBusines, state} from "./redux/state";
import {addPost} from "./redux/state";


function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs
                            messageData={state.sms.messageData}
                            dialogsData={state.sms.dialogsData}

                        />}></Route>
                        <Route path='/profile' element={<Profile
                            newValueText={state.post.newPostText}
                            dataProfile={state.post.postData}
                            newPost={addPost}
                            functionTextValue={newTextValueBusines}
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
