import { describe } from "node:test";
import React from "react";
import { BlueSection } from "../margins/blue-section";

interface Props {
    title: string;
    description: Array<string>;
}

//Used in the About section
const DevTools = ({ title, description }: Props) => {
    return (
        <BlueSection>
            <h3>{title}:</h3>
            <ul>{description.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
            </ul>
        </BlueSection>
    )
}
export default DevTools;