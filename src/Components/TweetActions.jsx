import TweetAction from "./TweetAction";
import Reply from "../assets/icon/iconblanc/Reply.svg"
import Retweet from "../assets/icon/iconblanc/Retweet.svg"
import Reacti from "../assets/icon/iconblanc/React.svg"
import Share from "../assets/icon/iconblanc/Share.svg"


export default function TweetActions (){
    return (
        <div className="tweet-actions">
            <TweetAction icon={Reply} value="57" />
            <TweetAction icon={Retweet} value="144" />
            <TweetAction icon={Reacti} value="184" />
            <TweetAction icon={Share} value="" />
        </div>
    )
}
