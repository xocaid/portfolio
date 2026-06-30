import { describe } from "node:test";
import React from "react";
import { BlueSection } from "../margins/blue-section";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface IconPair{
    icon: FontAwesomeIconProps['icon'];
    label:string;
}

interface Props {
    title: string;
    description: Array<IconPair>;
}

//Used in the About section
const DevTools = ({ title, description }: Props) => {
    return (
        <div>
            <h2 className="mb-4">{title}</h2>
            <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3">{description.map((item, index) => (
                <li key={index} className="fs-4">
                    <FontAwesomeIcon icon={item.icon} /> {item.label}
                </li>
            ))}
            </ul>
        </div>
    )
}
export default DevTools;