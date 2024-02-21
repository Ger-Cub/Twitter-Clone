import React from "react";
import TweetAction1 from "./TweetAction1";
import TweetAction2 from "./TweetAction2";
import TweetAction3 from "./TweetAction3";
import TweetAction4 from "./TweetAction4";


export default function TweetActions (){
    return (
        <div className="tweet-actions">
            <TweetAction1 />
            <TweetAction2 />
            <TweetAction3 />
            <TweetAction4 />
        </div>
    )
}