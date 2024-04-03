import React from "react";

export default function TweetImage (props){
    return (
        <div class="w-full pt-2 pb-0 pr-0 pl-0">
            <img class="w-full h-auto rounded-[50px] border border-gray-700" src={props.img} />
        </div>
    )
}
