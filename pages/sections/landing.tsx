import React from "react";
import AvatarMaker from '../images/AvatarMaker.png'

const Landing = () => {
    return (
        <div className="landing">
            <div className="avatar">
                {/* Will be on the left side, in a circle border */}
                <img src={AvatarMaker.src}></img>
            </div>

            <div className="welcome">
                {/* Will be on the right side, square/rectangle shape, no border */}
                <p>Welcome....</p>
                <p>firstName lastName</p>
                <p>Brief Description/Blurb</p>
            </div>
        </div>
    )
}
export default Landing;