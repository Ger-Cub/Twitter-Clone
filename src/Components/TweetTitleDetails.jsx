
export default function TweetTitleDetails ({username, time}){
    return (
        <div className="text-gray-400">
            @{ username + ' . ' + time }    
        </div>
    )
}