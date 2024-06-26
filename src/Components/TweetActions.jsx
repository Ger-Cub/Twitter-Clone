import TweetAction from "./TweetAction";

import Comment from "../Components/icons/Comment";
import Like from "../Components/icons/Like";
import Retweet from "../Components/icons/Retweet"
import Share from "../Components/icons/Share"

import { Context } from "../Context/tweets";
import { useContext, useState } from "react";


export default function TweetActions() {

    const [state, setState] = useState(Array(4).fill(false));
    const tweet = useContext(Context);
    const [action, setAction] = useState([
        "true",
        "true",
        tweet.actions.state,
        "true",
    ]);

    const verify = (i) => {
        const newSvg = state.slice();
        newSvg[i] = !newSvg[i];
        setState(newSvg);
    };

    const handleClick = (i) => {
        const newAction = action.slice();
        newAction[i] = action[i] == "true" ? "false" : "true";
        setAction(newAction);
    };

    tweet.actions.state = action[2] == "true" ? "true" : "false";

    // ................
    const acts = [
        {
            logo: (
                <Comment
                    Csvg={state[0] ? "#1d52f022" : ""}
                    color={state[0] ? "#1d52f0" : "#6E767D"}
                />
            ),
            nbr: tweet.actions.comments,
            title: "Comment",
            color: state[0] ? "#1d52f0" : "#6E767D",
        },

        {
            logo: (
                <Retweet
                    Csvg={state[1] && "#1df04022"}
                    color={state[1] ? "#1df040" : "#6E767D"}
                />
            ),
            nbr: tweet.actions.retweet,
            title: "Retweet",
            color: state[1] ? "#1df040" : "#6E767D",
        },
        {
            logo: (
                <Like
                    Csvg={state[2] && "#f8358a22"}
                    color={state[2] ? "#f8358a" : "#6E767D"}
                    like={tweet.actions.state}
                />
            ),
            nbr:
                tweet.actions.like[tweet.actions.like.length - 1] == "k"
                    ? tweet.actions.like
                    : tweet.actions.state == "false"
                        ? Number(tweet.actions.like) + 1
                        : Number(tweet.actions.like),
            title: "Like",
            color: state[2] ? "#f8358a" : "#6E767D",
        },
        {
            logo: (
                <Share
                    Csvg={state[3] && "#1d52f022"}
                    color={state[3] ? "#1d52f0" : "#6E767D"}
                />
            ),
            title: "Share",
            color: state[3] ? "#1d52f0" : "#6E767D",
        },
    ];

    return (
        <div className="tweet-actions">
            {acts.map((e, i) => (
                <TweetAction
                    key={i}
                    action={e}
                    like={() => handleClick(i)}
                    verify={() => verify(i)}
                />
            ))}
        </div>
    )
}
