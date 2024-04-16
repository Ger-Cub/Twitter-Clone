import {useContext} from "react";
import { TweetContext } from "../Context/contex"

export default function TweetText (){
    const tweet = useContext(TweetContext);
    return (
        <p className="text-gray-300 text-lg">{tweet.content.text}</p>
    );
}