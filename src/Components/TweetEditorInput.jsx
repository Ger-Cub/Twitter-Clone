import React from "react";
import { useState } from "react";

export default function TweetEditorInput (){

    const [userInput, setUserInput] = useState("");
    console.log(userInput)

    return <input type="text" rows="1" value={userInput} onChange={(e) => setUserInput(e.target.value)} class="h-24 w-full border-none outline-none text-xl bg-black text-white resize-none px-4 pt-4 pb-2 mb-4" placeholder="What's happening?"/>
}