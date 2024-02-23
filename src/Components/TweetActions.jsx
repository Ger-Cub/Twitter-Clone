import TweetAction from "./TweetAction";
import Reply from "../assets/icon/iconblanc/Reply.svg"
import Retweet from "../assets/icon/iconblanc/Retweet.svg"
import Reacti from "../assets/icon/iconblanc/React.svg"
import Share from "../assets/icon/iconblanc/Share.svg"


export default function TweetActions (props){
    return (
        <div className="tweet-actions">
            <TweetAction icon={Reply} value={props.value.reply} />
            <TweetAction icon={Retweet} value={props.value.retweet} />
            <TweetAction icon={Reacti} value={props.value.react} />
            <TweetAction icon={Share} value={props.value.share} />
        </div>
    )
}
