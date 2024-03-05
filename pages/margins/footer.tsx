import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
                <p>Copyright &copy; 2024 Portfolio. All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;