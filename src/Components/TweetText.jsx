import {useContext} from "react";
import { Context } from "../Context/tweets"

export default function TweetText (){
    const tweet = useContext(Context);
    return (
        <p className="text-gray-300 text-lg">{tweet.content.text}</p>
    );
}