import React from "react";
import PageTitle from "./PagesTitle";
import TopTweets from "./TopTweets";

export default function Header (){
    return (
        <header className="header">
            <PageTitle />
            <TopTweets />
        </header>
    )
}