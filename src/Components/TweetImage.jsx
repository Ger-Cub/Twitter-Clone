import React from "react";

export default function TweetImage (props){
    return (
        <div className="tweet-image">
            <img className="tweet-image" src={props.img} />
        </div>
    )
}
