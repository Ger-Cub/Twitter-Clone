import React from "react";
import TweetTitleAuthor from "./TweetTitleAuthor";
import TweetTitleDetails1 from "./TweetTitleDetails1";
import TweetTitleDetails2 from "./TweetTitleDetails2";
import TweetTitleDetails3 from "./TweetTitleDetails3";

export default function TweetTitle (){
    return (
        <div className="tweet-title">
            <TweetTitleAuthor />
            <TweetTitleDetails1 />
            <TweetTitleDetails2 />
            <TweetTitleDetails3 />
        </div>
    )
}