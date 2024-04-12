import TweetTitleAuthor from "./TweetTitleAuthor";
import TweetTitleDetails from "./TweetTitleDetails";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TweetContext } from "../Context/contex";

export default function TweetTitle (){
    const tweet = useContext(TweetContext);
    return (
        <Link to={`/${tweet.user.userName}`} class="flex items-start justify-start gap-2 text-sm">
            <TweetTitleAuthor name={tweet.user.name} />
            <TweetTitleDetails 
                username={tweet.user.userName} 
                time={tweet.user.time}
            />
        </Link>
    );
}