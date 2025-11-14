import React from "react";
import { BlueSection } from "../margins/blue-section";
import { Container, Row, Col } from "react-bootstrap";

const Landing = () => {
    return (
        <Container>
            <BlueSection>

                <Row>
                    <Col>
                        <div className="avatar">
                            {/* Will be on the left side, in a circle border */}
                            <img src='/images/AvatarMaker.png'></img>
                        </div>
                    </Col>

                    <Col>
                        <div className="welcome">
                            {/* Will be on the right side, square/rectangle shape, no border */}
                            <h1>Welcome</h1>
                            <h2>Xochitl Cruz, Software Engineer</h2>
                            <p>
                                Xochitl is a Software Engineer with a strong foundation in web technologies, including JavaScript, React, and TypeScript.
                                Since beginning her programming career in 2022, Xochitl has contributed to major projects at Sony PlayStation, where she redesigned React components, separated application functionality from monolithic codebases, and implemented robust error handling and telemetry systems.
                            </p>
                        </div>
                    </Col>
                </Row>
            </BlueSection>
        </Container>
    )
}
export default Landing;