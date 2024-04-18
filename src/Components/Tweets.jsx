import Tweet from "./Tweet";
import { useContext } from "react";
import { Context } from "../Context/tweets";

export default function Tweets() {
    const { tweets } = useContext(Context);
    const tweet = [...tweets];
    return (
        <div className="tweets">
            {tweet.reverse().map((e, i) => (
                <Tweet key={i} data={e} />
            ))}
        </div>
    )
}




