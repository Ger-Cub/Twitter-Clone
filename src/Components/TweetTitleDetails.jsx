
export default function TweetTitleDetails ({username, time}){
    return (
        <div class="text-gray-400">
            @{ username + ' . ' + time }    
        </div>
    )
}