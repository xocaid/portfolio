import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


interface Props {
    link: string;
    imgSrc: string;
    title: string;
    imgDescription: string;
};


//({}:Props) --> Object destructuring
const ProjectCard = ({ link, imgSrc, title, imgDescription }: Props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title >{title}</Card.Title>
                <Card.Text>
                    {imgDescription}
                </Card.Text>
                <Button variant="primary">{title}</Button>
            </Card.Body>
        </Card>
    )
}
export default ProjectCard;