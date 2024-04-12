import Tweet from "./Tweet";

export default function Tweets({ tweets }) {

    return (
        <div className="tweets">
            {tweets.map((e, i) => (
                <Tweet key={i} data={e} />
            ))}
        </div>
    )
}

