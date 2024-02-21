import React from "react";
import ProfilePhoto from "../assets/img/Profile-Photo.svg"

export default function Avatar (){
    return (
        <div className="avatar">
            <img src={ProfilePhoto} alt="" />
        </div>
    )
}