import React from "react";
import NavBar from "./navbar";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <Container>
            <div>
                Img Logo will go here
            </div>

            <div>
                <NavBar />
            </div>

            <div>
                <FontAwesomeIcon className="fa-2x" icon={faGithub} />
                <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
            </div>

            <div>
                <Button>Download Resume</Button>
            </div>
        </Container>
    )
}
export default Header;