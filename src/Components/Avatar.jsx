import React from "react";
import ProfilePhoto from "../assets/img/Profile-Photo.svg"

export default function Avatar (){
    return (
        <div className="avatar">
            <img class="w-14 h-14 rounded-full object-cover" src={ProfilePhoto} alt="" />
        </div>
    )
}