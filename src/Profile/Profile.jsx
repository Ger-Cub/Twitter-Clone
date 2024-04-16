import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { TweetContext } from "../Context/contex";
import Tweet from "../Components/Tweet";

export default function Profile(){
    const {userName} = useParams();
    const tweet = useContext(TweetContext);

    return (
        <div className="border-l border-r border-[#2F3336] font-inter w-[100%]">
            <h3 className="my-[10vh] mx-auto text-center text-6xl">
                Prolil de @{userName}
            </h3>
            {
                tweet.tweets.filter((e) => e.user.userName == userName).map((el, i) => (<Tweet key={i} data={el}/>))
            }
        </div>
    )
}