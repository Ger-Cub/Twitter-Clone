import React from "react";
import TweetEditorInput from "./TweetEditorInput";
import TweetEditorButtons from "./TweetEditorButtons";

export default function TweetEditorForm (){
    return (
        <div class="flex-grow w-full">
            <TweetEditorInput />
            <TweetEditorButtons />
        </div>
    )
}