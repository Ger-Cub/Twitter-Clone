import React from "react";

export default function TweetAction (props){
    return (
        <div class="flex items-center justify-center cursor-pointer hover:text-blue-500">
            <div class="hover:bg-slate-900 p-3 rounded-[50%]"><img class="w-4 h-auto text-gray-700 cursor-pointer hover:text-blue-500" src={props.icon} alt=""/></div>
            <p>{props.value}</p>
        </div>
    )
}