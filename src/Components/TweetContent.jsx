import TweetBody from "./TweetBody"
import TweetActions from "./TweetActions";

export default function TweetContent (){
    return (
        <div class="flex flex-col items-start justify-start gap-6 w-full">
            <TweetBody />
            <TweetActions />
        </div>
    )
}