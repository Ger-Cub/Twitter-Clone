import React from "react";
import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText"
import TweetImage from "./TweetImage"

export default function TweetBody (){
    return (
        <div className="tweet-body">
            <TweetTitle />
            <TweetText text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' />
            <TweetImage img="" />
        </div>
    )
}
