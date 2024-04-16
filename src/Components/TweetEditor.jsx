// import React from "react";  
import Avatar from "./Avatar"
import TweetEditorForm from "./TweetEditorForm"

export default function TweetEditor ({tweets, setTweets}){
    return (
        <main className="flex items-start justify-start gap-4 px-4 py-2 border-b border-[#2F3336]">
            <Avatar />
            <TweetEditorForm tweets={tweets} setTweets={setTweets} />
        </main>
    )
}