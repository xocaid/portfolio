import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
    return (
        <div className="d-flex justify-content-center">

            <a href="https://github.com/xocaid/"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/xochitlca/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
            <div className="d-flex align-items-center">
                <a href='' className="resume p">Download Resume</a>
            </div>
        </div>
    )
}
export default Socials;