import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";

export default function Tweet (props){
    return (
        <div className="tweet">
            <TweetAvatar value={props.table.avatar}/>
            <TweetContent value={props.table.content}/>
        </div>
    )
}