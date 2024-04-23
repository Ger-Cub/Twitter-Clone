
import { Link } from "react-router-dom"
import Tweeter from "../assets/icon/iconblanc/Twitter.svg"
import HomeFill from "../assets/icon/iconblanc/Home-Fill.svg"
import Explore from "../assets/icon/iconblanc/Explore.svg"
import Notifications from "../assets/icon/iconblanc/Notifications.svg"
import Message from "../assets/icon/iconblanc/Messages.svg"
import Bookmarks from "../assets/icon/iconblanc/Bookmarks.svg"
import Lists from "../assets/icon/iconblanc/Lists.svg"
import Profile from "../assets/icon/iconblanc/Profile.svg"
import More from "../assets//icon/iconblanc/More.svg"
import More2 from "../assets/icon/iconblanc/More-2.svg"
import Private from "../assets/icon/iconblanc/Private.svg"
import ProfilePhoto from "../assets/img/Profile-Photo.svg"
// import "./sideBar.css"
import '../index.css'

export default function SideBar() {
    return (
        <div className="left-0 top-0 w-[30%] h-screen bg-transparent pl-[100px] pt-4">
            <div className="h-full">

                <Link to="">
                    <img src={Tweeter} alt="" />
                </Link>
                <Link to="/home">
                    <div className="flex items-center gap-2 pt-[25px]">
                        <img src={HomeFill} alt="" />
                        <h1 className="text-xl font-bold text-white">Home</h1>
                    </div>
                </Link>

                <Link to="/explore">
                    <div className="flex items-center gap-2 pt-[25px]">
                        <img src={Explore} alt="" />
                        <h1 className="text-xl font-bold text-white">Explore</h1>
                    </div>
                </Link>


                <Link to="/notifications">
                    <div className="flex items-center gap-2 pt-[25px]">
                        <img src={Notifications} alt="" />
                        <h1 className="text-xl font-bold text-white">Notifications</h1>
                    </div>
                </Link>



                <Link to="/messages">
                    <div className="flex items-center gap-2 pt-[25px]">
                        <img src={Message} alt="" />
                        <h1 className="text-xl font-bold text-white">Messages</h1>
                    </div>
                </Link>


                <Link to="/bookmarks">
                    <div className="flex items-center gap-2 pt-[25px]">
                        <img src={Bookmarks} alt="" />
                        <h1 className="text-xl font-bold text-white">Bookmarks</h1>
                    </div>
                </Link>


                <Link to="/lists">
                    <div className="flex items-center gap-2 pt-[25px]">
                        <img src={Lists} alt="" />
                        <h1 className="text-xl font-bold text-white">Lists</h1>
                    </div>
                </Link>


                <Link to="/profile">
                    <div className="flex items-center gap-2 pt-[25px]">
                        <img src={Profile} alt="" />
                        <h1 className="text-xl font-bold text-white">Profil</h1>
                    </div>
                </Link>


                <Link to="/more">
                    <div className="flex items-center gap-2 pt-[25px] pb-[25px]">
                        <img src={More} alt="" />
                        <h1 className="text-xl font-bold text-white">More</h1>
                    </div>
                </Link>

                <button style={{ width: "70%", height: "7%" }} className="text-transform: capitalize px-4 py-2 rounded-full bg-[#1D9BF0] text-white text-sm">Tweet</button>

                <div className="absolute flex justify-between bottom-[10px]">
                    <Link to="/bradley_" className="flex gap-[10px] link">
                        <img src={ProfilePhoto} alt="" />
                        <div className="flex justify-center flex-col">
                            <div className="flex flex-raw">                            
                                <h5>Bradley Ortiz </h5>
                                <img className="w-[20px]" src={Private} alt="" />
                            </div>

                            <div className="text-[gray] font-thin">@Bradley_</div>
                        </div>
                        <img src={More2} alt="" />
                    </Link>
                </div>

            </div>
        </div>
    );
};