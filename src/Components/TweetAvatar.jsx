import React from "react";

export default function TweetAvatar (props){
    return (
        <div className="tweet-avatar">
                <img src={props.value} alt=""/>
        </div>
    )
}

