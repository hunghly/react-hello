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

// import React from "react";
// import ReactDom from "react-dom";
//
// // This is a component
// function HelloWorld() {
//     let isHello = false;
//     return (
//         // <span>{isHello ? 'Hello' : 'not Hello'}</span>
//         <span>
//             {isHello && 'Hello'}
//             {!isHello && 'Goodbye'}
//         </span>
//     )
// }
//
// function Hello() {
//     const name = 'World';
//     return (
//         <span>Hello {name}</span> // you can use {} to set expressions
//     )
// }
//
// function World() {
//     return (
//         <span>World!!!</span>
//     )
// }
//
// ReactDom.render(<HelloWorld></HelloWorld>, document.querySelector('#root'));

import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Tweet() {
    return (
        <div className={"tweet"}>
            <Avatar/>
            <div className="content">
                <NameWithHandle/>
                <Message/>
                <div className="buttons">
                    <LikeButton/>
                    <CommentButton/>
                    <ShareButton/>
                    <RetweetButton/>
                </div>
            </div>
        </div>
    )
}

function Avatar() {
    return (
        <img src={"https://www.gravatar.com/avatar/nothing"} className={"avatar"} alt={'avatar'}/>
    )
}

function Message() {
    return (
        <div className={'message'}>
            This is less than 140 characters.
        </div>
    )
}

function NameWithHandle() {
    return (
        <span className={'name-with-handle'}>
            <span className={'name'}>Your Name</span>
            <span className={'name'}>@yourhandle</span>
        </span>
    )
}

const Time = () => (
    <span className='time'>3h ago</span>
)

const LikeButton = () => {
    return <i className='fa fa-heart like-button'/>
}


const CommentButton = () => (
    <i className={'far fa-comment'}/>
)

const RetweetButton = () => (
    <i className={'fa fa-retweet retweet-button'}/>
)

const ShareButton = () => {
    return <i className={'fa fa-external-link-alt'}/>
}

ReactDom.render(<Tweet/>, document.querySelector('#root'));