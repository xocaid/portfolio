import React from "react";
import { BlueSection } from "../margins/blue-section";
import { ReactNode } from "react";
import DevTools from "./devTools";
import { Container, Row, Col } from "react-bootstrap";
import { faConfluence, faGitAlt, faGithub, faJira, faJs, faNodeJs, faNpm, faPostgresql, faReact, faTypescript, faYarn } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

interface JobDesProps {
    title: string;
    company: string;
    children: ReactNode | ReactNode[];
    date: string;
}

const JobDes = ({ title, company, children, date }: JobDesProps) => {
    return (
        <BlueSection>
            <div>
                <h3>{title}</h3>
                <div className="d-flex align-items-center gap-2">
                    <h4>{company}</h4> <h5>({date})</h5>
                </div>
            </div>
            <div>
                {children}
            </div>
        </BlueSection>
    )
}

const WorkExperience = () => {
    return (
        <Container className="about" id="about">
            <h2>Work Experience</h2>
            <JobDes
                title="Project Manager & Software Engineer"
                company="Freelance"
                date='January 2024 - Present'>
                <p>

                </p>
            </JobDes>
            <JobDes
                title="Software Engineer I"
                company="Sony Interactive Entertainment"
                date='July 2023 - January 2024'>
                <p>
                    I led the separation of the PS5 Wishlist into a standalone application, improving scalability and maintainability.
                    I refactored React components using higher-order components to streamline logic, centralized error handling and telemetry to reduce redundancy, and resolved key loading issues with enhanced user notifications.
                    Leveraging TypeScript generics and custom types, I simplified complex code structures and implemented telemetry reporting with Imply dashboards for comprehensive performance analysis.
                </p>

            </JobDes>
            <JobDes
                title="Software Engineering Apprentice"
                company="Sony Interactive Entertainment"
                date='January 2023 - July 2023'>
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
                        description={[{ icon:faJs, label: 'JavaScript' }, { icon:faTypescript, label: 'TypeScript' }, { icon: faReact, label: 'React.js' }, { icon: faNodeJs, label: 'Node.js' }, { icon:faCode, label: 'Express.js' }, { icon:faPostgresql, label: 'PostgreSQL' }]}
                    />
                </Col>
                <Col>
                    <DevTools
                        title='DevTools'
                        description={[{icon:faGitAlt, label:'Git'}, {icon:faReact, label:'Jest'}, {icon:faJira, label:'Jira'}, {icon:faConfluence, label:'Confluence'}, {icon:faYarn, label:'yarn'}, {icon:faNpm, label:'npm'}, {icon:faGithub, label:'GitHub'}]}
                    />
                </Col>
            </Row>
        </Container>
    )
}
export default WorkExperience;