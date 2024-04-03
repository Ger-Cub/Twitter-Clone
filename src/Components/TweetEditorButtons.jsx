import React from "react";
import TweetEditorActions from "./TweetEditorActions"
import Button from "./Button";

export default function TweetEditorButtons (){
    return (
        <div class="flex items-center justify-between">
            <TweetEditorActions />
            <Button />
        </div>
    )
}