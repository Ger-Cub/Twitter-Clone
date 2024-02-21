import Emoji from "../assets/icon/Emoji.svg"
import Gif from "../assets/icon/Gif.svg"
import Media from "../assets/icon/Media.svg"
import Poll from "../assets/icon/Poll.svg"
import Schedule from "../assets/icon/Schedule.svg"

export default function TweetEditorActions (){
    return (
        <div className="tweet-editor-actions">
            <button >
                <img src={Media}/>
            </button>
            <button >
                <img src={Emoji}/>
            </button>
            <button >
                <img src={Gif}/>
            </button>
            <button >
                <img src={Poll}/>
            </button>
            <button >
                <img src={Schedule}/>
            </button>
        </div>
    )
}