import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText"
import TweetImage from "./TweetImage"
import { useContext } from "react";
import { TweetContext } from "../Context/contex";

export default function TweetBody (){
    const tweet = useContext(TweetContext);
    
    return (
        <div className="flex flex-col gap-2">
            <TweetTitle />
            <TweetText />
            {tweet.content.srcImage && <TweetImage image={tweet.content.srcImage} />}
        </div>
    )
}
