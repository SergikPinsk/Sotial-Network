import React from 'react';
import './index.css';
import {RootPropsType, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


 const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode><App/></React.StrictMode>, document.getElementById('root')
    );
}
renderTree()
subscribe(renderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
