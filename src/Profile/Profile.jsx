import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context/tweets";
import Tweet from "../Components/Tweet";
import ProfilePhoto from "../assets/img/Profile-Photo.svg";

export default function Profile() {
    const { userName } = useParams();
    const tweet = useContext(Context);
    console.log(tweet.current.name);

    return (
        <div className="border-l border-r border-[#2F3336] font-inter w-[100%]">

            <div className="p-[.5rem] w-[100%]">
                <Link to="/">
                    <span>Back</span>
                </Link>

                <div>
                    <p className="mx-auto text-2xl">
                        @{userName}
                    </p>
                    <p>{tweet.tweets.filter((e) => e.user.userName == userName).length} posts</p>
                </div>
            </div>
            {/* <div className="bg-green-500 w-[100%]">

                <img src="https://pbs.twimg.com/profile_banners/707924222102933504/1586874993/1500x500" className="mx-auto text-2xl" />
                <img src={ProfilePhoto} alt="" className="" />

            </div> */}

            <div className="bg-green-500 w-[100%] relative">
                <img src="https://pbs.twimg.com/profile_banners/707924222102933504/1586874993/1500x500" className="mx-auto text-2xl" />
                <div className="absolute bottom-[-50px] left-[4rem] transform -translate-x-1/2">
                    <img src={ProfilePhoto} alt="" className="rounded-full w-24 h-24 border-4 border-white-500" />
                </div>
            </div>

            <div className="h-[8rem]">
                <div className="bg-red-500 h-[4rem]">
                    <button className="bg-green-500 w-[8rem] h-[3rem] rounded-[50px] flex">
                        Edit Profile
                    </button>
                </div>
                <div>
                    <p className="">
                        {tweet.current.name}
                    </p>
                </div>
            </div>


            <div>
                {
                    tweet.tweets.filter((e) => e.user.userName == userName).map((el, i) => (<Tweet key={i} data={el} />))
                }
            </div>

        </div>
    )
}