import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";

export default function Tweet (){
    return (
        <div className="tweet">
            <TweetAvatar />
            <TweetContent />
        </div>
    )
}