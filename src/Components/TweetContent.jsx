import React from "react";
import TweetBody from "./TweetBody"
import TweetActions from "./TweetActions";

export default function TweetContent (props){
    return (
        <div class="flex flex-col items-start justify-start gap-6 w-full">
            <TweetBody value={props.value.body} />
            <TweetActions value={props.value.actions}/>
        </div>
    )
}