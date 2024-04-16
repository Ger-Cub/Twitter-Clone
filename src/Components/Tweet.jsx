import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import { TweetContext } from "../Context/contex";

export default function Tweet({data}) {
    return (
        <div className="flex items-start justify-start gap-4 px-4 py-6 border-b border-[#2F3336]">
            <TweetContext.Provider value={data}>
                <TweetAvatar  />
                <TweetContent />
            </TweetContext.Provider>
        </div>
    )
}