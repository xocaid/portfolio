import React from "react";
import { BlueSection } from "../margins/blue-section";

const Intro = () => {
    return (
            <BlueSection className="text-center">
                <div className="mb-3">
                    <img className="profile-picture img-fluid rounded-5" src='/images/AvatarMaker.png'></img>
                </div>

                <div>
                    <h1 className="mb-3">Xochitl Cruz, Software Engineer</h1>
                    <p className="text-start">
                        Xochitl is a Software Engineer with a strong foundation in web technologies, including JavaScript, React, and TypeScript.
                        Since beginning her programming career in 2022, Xochitl has contributed to major projects at Sony PlayStation, where she redesigned React components, separated application functionality from monolithic codebases, and implemented robust error handling and telemetry systems.
                    </p>
                </div>
            </BlueSection>
    )
}
export default Intro;