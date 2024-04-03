import React from "react";

export default function TweetAvatar (props){
    return (
        <div class="w-14 h-14 rounded-full flex items-center justify-center">
                <img src={props.value} alt=""/>
        </div>
    )
}

