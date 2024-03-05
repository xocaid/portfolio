import React from "react";
import DevTools from "./devTools";

const About = () => {
    return (
        <div className="about">
            <div className="blurb">
                {/* Will be in the middle, centered text */}
                <p>About Me Blurb, replace text.</p>
            </div>
            <DevTools
                title='Languages/Frameworks'
                description={['JavaScript, TypeScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL']}
            />

            <DevTools
                title='DevTools'
                description={['Git', 'Jest', 'Jira', 'Confluence', 'yarn', 'npm', 'GitHub']}
            />

        </div>
    )

}
export default About;