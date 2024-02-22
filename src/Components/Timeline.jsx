import React from "react";
import Header from "./Header";
import TweetEditor from "./TweetEditor";
import Tweets from "./Tweets";

export default function Timeline(){

    return (
        <main className="timeline">
            <Header />
            <TweetEditor />
            <Tweets />
        </main>
    )
}