import React from "react";
import TweetBody from "./TweetBody"
import TweetActions from "./TweetActions";

export default function TweetContent (props){
    return (
        <div className="tweet-content">
            <TweetBody value={props.value.body} />
            <TweetActions value={props.value.actions}/>
        </div>
    )
}