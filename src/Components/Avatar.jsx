import React from "react";
import Image from "../assets/img/Profile-Photo.svg"

export default function Avatar (){
    return (
        <div className="avatar">
            <img src={Image} alt="" />
        </div>
    )
}