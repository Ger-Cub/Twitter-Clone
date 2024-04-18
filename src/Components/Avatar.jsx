import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context/tweets"

export default function Avatar (){
    const {current: avatar} = useContext(Context);
    console.log(avatar);
    return (
        <Link to={`/${avatar.userName}`} className="avatar">
            <img className="w-14 h-14 rounded-full object-cover" src={avatar.src} alt="" />
        </Link>
    )
}