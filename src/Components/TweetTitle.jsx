import React from "react";
import TweetTitleAuthor from "./TweetTitleAuthor";
import TweetTitleDetails from "./TweetTitleDetails";

export default function TweetTitle (){
    return (
        <div className="tweet-title">
            <TweetTitleAuthor author="CNN" />
            <TweetTitleDetails detail="@CNN" />
            <TweetTitleDetails detail="." />
            <TweetTitleDetails detail="7m" />
        </div>
    )
}