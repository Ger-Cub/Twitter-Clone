import {useContext} from "react";
import { TweetContext } from "../Context/contex"

export default function TweetText ({text}){
    const tweet = useContext(TweetContext);
    return (
        <p class="text-gray-300 text-lg">{tweet.content.text}</p>
    );
}