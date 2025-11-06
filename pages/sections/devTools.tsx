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
            <p>{title}:</p>
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