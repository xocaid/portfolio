import React from "react";

interface Props {
    link: string;
    imgSrc: string;
    title: string;
    imgDescription: string;
};


//({}:Props) --> Object destructuring
const ProjectCube = ({ link, imgSrc, title, imgDescription }: Props) => {
    return (
        <a href={link}>

            <div className="image">
                <img src={imgSrc} alt={`screenshot of ${title}`} />
            </div>
            <div className="imageDetails">
                <p>{title}</p>
                <p>{imgDescription}</p>
            </div>
        </a>
    )
}
export default ProjectCube;