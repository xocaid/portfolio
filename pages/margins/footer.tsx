import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <Container >
                <Row>
                    <Col>
                        <p className="m-0">Copyright &copy; 2025 Portfolio. All Right Reserved.</p>
                    </Col>
                    <Col>
                        <a href='https://www.linkedin.com/in/xochitlca/'>
                            <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
                        </a>
                    </Col>
                    <Col>
                        <a href='https://github.com/xocaid'>
                            <FontAwesomeIcon className="fa-2x" icon={faGithub} />
                        </a>
                    </Col>
                </Row >
            </Container>
        </div>
    )
}
export default Footer;