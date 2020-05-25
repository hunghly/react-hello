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
import Moment from "moment";

function Tweet({tweet}) {
    return (
        <div className={"tweet"}>
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <LikeButton count={tweet.likes}/>
                    <CommentButton/>
                    <ShareButton/>
                    <RetweetButton count={tweet.retweets}/>
                </div>
            </div>
        </div>
    )
}

let testTweet = {
    message: "Something about cats is the message",
    gravatar: "xyz",
    author: {
        handle: 'catperson',
        name: 'MorganWebperson'
    },
    likes: 2,
    retweets: 0,
    timestamp: '2019-09-25 21:23:37'
}

function Avatar({hash}) {
    let url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img src={url} className={"avatar"} alt={'avatar'}/>
    )
}

function Message({text}) {
    return (
        <div className={'message'}>
            {text}
        </div>
    )
}

function NameWithHandle({author}) {
    const {name, handle} = author;
    return (
        <span className={'name-with-handle'}>
            <span className={'name'}>{name}</span>
            <span className={'name'}>@{handle}</span>
        </span>
    )
}

const Time = ({time}) => {
    const timeString = Moment(time).fromNow();
    return (
        <span className='time'>{timeString}</span>
    );
}

const LikeButton = ({count}) => {
    return <span className={'like-button'}>
        <i className='fa fa-heart'/>
        {count > 0 && <span className={'like-count'}></span>}
    </span>

}


const CommentButton = () => (
    <i className={'far fa-comment'}/>
)

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className={"retweet-count"}>{count}</span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({count}) => (
    <span className={'retweet-button'}>
        <i className={'fa fa-retweet'}/>
        {getRetweetCount(count)}
    </span>
)

const ShareButton = () => {
    return <i className={'fa fa-external-link-alt'}/>
}

function Morgan() {
    const fName = 'Morgan';
    const lName = 'McKie';

    return (
        <Person age={105} name={fName + ' ' + lName}></Person>
    );
}

// function Hello(props) {
//     return (
//         <span>Hello {props.name}</span>
//     )
// }

const Hello = ({fName, lName}) => {
    return <span>Hello, {fName + " " + lName}</span>
}


const Person = props => <h1>{props.name + " " + props.age}</h1>

class Parent extends React.Component{
    state = {
        actionCount: 0
    }
    handleAction = (action) => {
        console.log('Child says', action);
        this.setState({
            actionCount: this.state.actionCount + 1
        })
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction()}/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        )
    }
}

function Child({onAction}) {
    return (
        <button onClick={onAction}>Click Me!</button>
    )
}



// ReactDom.render(<Hello fName={"hung"} lName={"ly"}></Hello>, document.querySelector('#root'));

// ReactDom.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));

ReactDom.render(<Parent/>, document.querySelector('#root'));