import React from "react";
import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText"
import TweetImage from "./TweetImage"

export default function TweetBody (props){
    return (
        <div className="tweet-body">
            <TweetTitle value={props.value.title}/>
            <TweetText text={props.value.text} />
            <TweetImage img={props.value.image} />
        </div>
    )
}
