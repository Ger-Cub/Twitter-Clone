import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context/tweets"

export default function TweetAvatar() {
    const user = useContext(Context);
    return (
        <div className="w-14 h-14 rounded-full flex items-center justify-center">
            <Link to={`/${user.user.userName}`}>
                <img src={user.user.src} alt="" />
            </Link>
        </div>
    )
}

