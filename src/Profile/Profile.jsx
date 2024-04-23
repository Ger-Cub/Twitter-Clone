import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/tweets";
import Tweet from "../Components/Tweet";

export default function Profile(){
    const {userName} = useParams();
    const tweet = useContext(Context);

    return (
        <div className="border-l border-r border-[#2F3336] font-inter w-[100%]">
            <p className="my-[10vh] mx-auto text-2xl">
                @{userName}
            </p>
            {
                tweet.tweets.filter((e) => e.user.userName == userName).map((el, i) => (<Tweet key={i} data={el}/>))
            }
        </div>
    )
}