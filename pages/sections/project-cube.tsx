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
        <div>
            <div className="image">
                <img src={imgSrc} alt={`screenshot of ${title}`} />
            </div>
            <div className="imageDetails">
                <h2><a href={link}>{title}</a></h2>
                <p>{imgDescription}</p>
            </div>
        </div>
    )
}
export default ProjectCube;