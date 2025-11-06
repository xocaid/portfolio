import React from "react";
import { ReactNode } from "react";
import DevTools from "./devTools";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

interface JobDesProps {
    title: string;
    company: string;
    children: ReactNode | ReactNode[];
}

const JobDes = ({ title, company, children }: JobDesProps) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h3>{company}</h3>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

const About = () => {
    return (
        <Container className="about" id="about">

            <JobDes
                title="Project Manager & Software Engineer"
                company="Freelance">
                <p>

                </p>
            </JobDes>
            <JobDes
                title="Software Engineer I"
                company="Sony Interactive Entertainment">
                <p>
                    I led the separation of the PS5 Wishlist into a standalone application, improving scalability and maintainability.
                    I refactored React components using higher-order components to streamline logic, centralized error handling and telemetry to reduce redundancy, and resolved key loading issues with enhanced user notifications.
                    Leveraging TypeScript generics and custom types, I simplified complex code structures and implemented telemetry reporting with Imply dashboards for comprehensive performance analysis.
                </p>

            </JobDes>
            <JobDes
                title="Software Engineering Apprentice"
                company="Sony Interactive Entertainment">
                <p>
                    I contributed to the PS5 Store and Wishlist platforms, leading efforts to separate the Wishlist into its own standalone application.
                    I refactored React components to improve maintainability, centralized error handling and telemetry, and enhanced user experience through targeted error reporting.
                    Using TypeScript and React, I optimized code readability, implemented event reporting with Imply dashboards, and strengthened overall system reliability through testing, documentation, and collaboration across teams.
                </p>
            </JobDes>

            <Row>
                <Col>
                    <DevTools
                        title='Languages/Frameworks'
                        description={['JavaScript, TypeScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL']}
                    />
                </Col>
                <Col>
                    <DevTools
                        title='DevTools'
                        description={['Git', 'Jest', 'Jira', 'Confluence', 'yarn', 'npm', 'GitHub']}
                    />
                </Col>
            </Row>
        </Container>
    )
}
export default About;