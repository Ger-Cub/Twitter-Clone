
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
import "./sideBar.css"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">

                <Link to="">
                    <img src={Tweeter} alt="" />
                </Link>
                <Link to="">
                    <div className="side-nav">
                        <img src={HomeFill} alt="" />
                        <h1 className="page-title-sidebare">Home</h1>
                    </div>
                </Link>



                <Link to="">
                    <div className="side-nav">
                        <img src={Explore} alt="" />
                        <h1 className="page-title-sidebare">Explore</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Notifications} alt="" />
                        <h1 className="page-title-sidebare">Notifications</h1>
                    </div>
                </Link>



                <Link to="">
                    <div className="side-nav">
                        <img src={Message} alt="" />
                        <h1 className="page-title-sidebare">Messages</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Bookmarks} alt="" />
                        <h1 className="page-title-sidebare">Bookmarks</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Lists} alt="" />
                        <h1 className="page-title-sidebare">Lists</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={Profile} alt="" />
                        <h1 className="page-title-sidebare">Profile</h1>
                    </div>
                </Link>


                <Link to="">
                    <div className="side-nav">
                        <img src={More} alt="" />
                        <h1 className="page-title-sidebare">More</h1>
                    </div>
                </Link>

                <button style={{ width: "90%" }} className="button">Tweet</button>
                
            </div>
            <div className="user-footer">
                <img src={ProfilePhoto} alt="" />
                <div className="contenu-footer">
                    <h5>Bradley Ortiz <span><img src={Private} alt="" /></span></h5>
                    <small>@Bradley_</small>
                </div>
                <img src={More2} alt="" />
                
            </div>

        </div>
    )
}