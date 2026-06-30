import React from "react";
import { ReactNode } from "react";
import DevTools from "./devTools";
import { Row, Col } from "react-bootstrap";
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
        <section className="mb-5">
            <div className="pb-3">
                <h3>{title}</h3>
                <div className="d-flex flex-column flex-md-row align-items-md-center column-gap-2">
                    <span className="h4 line-height-1">{company}</span> <span className="h5 line-height-1">({date})</span>
                </div>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}

const WorkExperience = () => {
    return (
        <div className="about" id="about">
            <h2 className="mb-4">Work Experience</h2>
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

            <Row className="gy-4">
                <Col lg={6}>
                    <DevTools
                        title='Languages & Frameworks'
                        description={[{ icon:faJs, label: 'JavaScript' }, { icon:faTypescript, label: 'TypeScript' }, { icon: faReact, label: 'React.js' }, { icon: faNodeJs, label: 'Node.js' }, { icon:faCode, label: 'Express.js' }, { icon:faPostgresql, label: 'PostgreSQL' }]}
                    />
                </Col>
                <Col lg={6}>
                    <DevTools
                        title='Dev Tools'
                        description={[{icon:faGitAlt, label:'Git'}, {icon:faReact, label:'Jest'}, {icon:faJira, label:'Jira'}, {icon:faConfluence, label:'Confluence'}, {icon:faYarn, label:'yarn'}, {icon:faNpm, label:'npm'}, {icon:faGithub, label:'GitHub'}]}
                    />
                </Col>
            </Row>
        </div>
    )
}
export default WorkExperience;