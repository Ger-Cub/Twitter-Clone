import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";

export default function Tweet (props){
    return (
        <div class="flex items-start justify-start gap-4 px-4 py-6 border-b border-[#2F3336]">
            <TweetAvatar value={props.table.avatar}/>
            <TweetContent value={props.table.content}/>
        </div>
    )
}