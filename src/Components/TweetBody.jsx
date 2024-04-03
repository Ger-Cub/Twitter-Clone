import React from "react";
import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText"
import TweetImage from "./TweetImage"

export default function TweetBody (props){
    return (
        <div class="flex flex-col gap-2">
            <TweetTitle value={props.value.title}/>
            <TweetText text={props.value.text} />
            {props.value.image && <TweetImage img={props.value.image} />}
        </div>
    )
}
