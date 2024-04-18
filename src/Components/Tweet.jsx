import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import { Context } from "../Context/tweets";

export default function Tweet({data}) {
    console.log(data)
    return (
        <div className="flex items-start justify-start gap-4 px-4 py-6 border-b border-[#2F3336]">
            <Context.Provider value={data}>
                <TweetAvatar  />
                <TweetContent />
            </Context.Provider>
        </div>
    )
}