import Header from "./Header";
import TweetEditor from "./TweetEditor";
import Tweets from "./Tweets";

export default function Timeline(){
    return (
        <main className="border-l border-r border-[#2F3336] font-inter">
            <Header />
            <TweetEditor />
            <Tweets />
        </main>
    )
}