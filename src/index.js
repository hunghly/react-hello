// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDom from "react-dom";

// This is a component
function HelloWorld() {
    let isHello = false;
    return (
        // <span>{isHello ? 'Hello' : 'not Hello'}</span>
        <span>
            {isHello && 'Hello'}
            {!isHello && 'Goodbye'}
        </span>
    )
}

function Hello() {
    const name = 'World';
    return (
        <span>Hello {name}</span> // you can use {} to set expressions
    )
}

function World() {
    return (
        <span>World!!!</span>
    )
}

ReactDom.render(<HelloWorld></HelloWorld>, document.querySelector('#root'));