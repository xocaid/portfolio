import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a href='https://www.linkedin.com/in/xochitlca/' title='LinkedIn_Icon'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/xocaid' title="GitHub_Icon">
                    <FaGithub />
                </a>
                <p className="m-0">Copyright &copy; 2025 Portfolio. All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;