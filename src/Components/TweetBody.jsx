import React from "react";
import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText"
import TweetImage from "./TweetImage"

export default function TweetBody (){
    return (
        <div className="tweet-body">
            <TweetTitle />
            <TweetText />
            <TweetImage />
        </div>
    )
}