export default function TweetImage ({image}){
    return (
        <div className="w-full pt-2 pb-0 pr-0 pl-0">
            <img className="w-full h-auto rounded-[50px] border border-gray-700" src={image} alt="Publication"/>
        </div>
    )
}
