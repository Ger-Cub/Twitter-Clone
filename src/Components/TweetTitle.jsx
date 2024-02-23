import React from "react";
import TweetTitleAuthor from "./TweetTitleAuthor";
import TweetTitleDetails from "./TweetTitleDetails";

export default function TweetTitle (props){

    return (
        <div className="tweet-title">
            <TweetTitleAuthor value={props.value.author} />
            <TweetTitleDetails value={props.value.detail} />
            <TweetTitleDetails value="." />
            <TweetTitleDetails value={props.value.time} />
        </div>
    )
}