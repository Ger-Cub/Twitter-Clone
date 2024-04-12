import React, {useContext, useState} from "react";
import Header from "./Header";
import TweetEditor from "./TweetEditor";
import Tweets from "./Tweets";
import { TweetContext } from "../Context/contex";

export default function Timeline(){
    const tweet = useContext(TweetContext);
    const [tab,setTab] = useState(tweet.tweets);
    return (
        <main class="border-l border-r border-[#2F3336] font-inter">
            <Header />
            <TweetEditor tweets={tab} setTweets={setTab}/>
            <Tweets tweets={tweet.tweets}/>
        </main>
    )
}