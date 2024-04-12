import { useContext } from "react"
import { Link } from "react-router-dom"
import { TweetContext } from "../Context/contex"

export default function Avatar (){
    const avatar = useContext(TweetContext);
    console.log(avatar['current-user'].src);
    return (
        <Link to={`/${avatar['current-user'].userName}`} className="avatar">
            <img class="w-14 h-14 rounded-full object-cover" src={avatar["current-user"].src} alt="" />
        </Link>
    )
}