import { describe } from "node:test";
import React from "react";

interface Props {
    title: string;
    description: Array<string>;
}

//Used in the About section
const DevTools = ({ title, description }: Props) => {
    return (
        <div className="devtools">
            <h3>{title}:</h3>
            <ul>{description.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
            </ul>
        </div>
    )
}
export default DevTools;