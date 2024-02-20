import React from "react";
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";

export default function TweetEditorForm (){
    return (
        <div className="tweet-editor-form">
            <TweetEditorInput />
            <TweetEditorButtons />
        </div>
    )
}