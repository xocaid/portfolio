import React from "react";
import NavBar from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <div className="header">
            <Container >
                <Row className="align-items-center gy-3">
                    <Col md={6}>
                        <div className="text-center text-md-start">
                            <img
                                alt="XC - Software Engineer"
                                className="logo-rect w-75"
                                src='/images/logo_rectangle.svg' />
                        </div>
                    </Col>

                    <Col md={6}>
                        <NavBar />
                    </Col>

                    {/* <Col>
                        <a href="https://github.com/xocaid/"><FontAwesomeIcon className="fa-2x" icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/xochitlca/"><FontAwesomeIcon className="fa-2x" icon={faLinkedin} /></a>
                    </Col> */}

                    {/* <Col>
                        <Button>Download Resume</Button>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}
export default Header;