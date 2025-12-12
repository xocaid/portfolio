import React from "react";
import NavBar from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <div className="header">
            <Container >
                <Row>
                    <Col>
                        <div>
                            <img
                                className="logo-rect"
                                src='/images/logo_rectangle.svg' />
                        </div>
                    </Col>

                    <Col>
                        <NavBar />
                    </Col>

                    <Col>
                        <a href="https://github.com/xocaid/"><FontAwesomeIcon className="fa-2x" icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/xochitlca/"><FontAwesomeIcon className="fa-2x" icon={faLinkedin} /></a>
                    </Col>

                    <Col>
                        <Button>Download Resume</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;