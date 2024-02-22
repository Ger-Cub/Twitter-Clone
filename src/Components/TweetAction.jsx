import React from "react";

export default function TweetAction (props){
    return (
        <div className="tweet-action">
        <img src={props.icon} alt=""/>
        <p>{props.value}</p>
        </div>
    )
}