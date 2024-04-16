import Emoji from "../assets/icon/Emoji.svg"
import Gif from "../assets/icon/Gif.svg"
import Media from "../assets/icon/Media.svg"
import Poll from "../assets/icon/Poll.svg"
import Schedule from "../assets/icon/Schedule.svg"

export default function TweetEditorActions (){
    return (
        <div className="flex items-center justify-start gap-2">
            <button className="bg-transparent focus:outline-none">
                <img src={Media}/>
            </button>
            <button className="bg-transparent focus:outline-none">
                <img src={Emoji}/>
            </button>
            <button className="bg-transparent focus:outline-none">
                <img src={Gif}/>
            </button>
            <button className="bg-transparent focus:outline-none">
                <img src={Poll}/>
            </button>
            <button className="bg-transparent focus:outline-none">
                <img src={Schedule}/>
            </button>
        </div>
    )
}