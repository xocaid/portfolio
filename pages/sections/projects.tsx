import React from "react";
import ProjectCube from './thumbnailProj';
import CvButton from "../buttons/cvBtn";

const Projects = () => {
    const cycleRoute = 'CycleRoute is a comprehensive web app catering to cycling enthusiasts and casual riders, offering efficient route mapping for various purposes like commuting, exploring new areas, or leisurely rides.';
    const acrossStreams = 'A beginner-friendly web app using JavaScript and React.js with a searchable API endpoint for displaying Twitch.tv streams, aimed at helping team members learn JS and React.js.';
    const sewWise = 'SewWise is a repository for sewing enthusiasts to organize, catalog, and document their sewing patterns, offering features like photo attachments, notes, a pattern library, ownership marking, usage tracking, and wishlists.';

    return (
        <div className="projects">
            <ProjectCube
                link='https://github.com/xocaid/CycleRoute'
                imgSrc='https://github.com/xocaid/CycleRoute/blob/main/client/src/components/Images/cycleRouteBanner.png?raw=true'
                title='CycleRoute'
                imgDescription={cycleRoute} />

            {/* This ProjectCube will need to be made public & spruced up a bit  */}
            <ProjectCube
                link='https://github.com/xocaid/acrossTheStreams'
                imgSrc='https://st.depositphotos.com/2268545/4354/i/450/depositphotos_43546685-stock-photo-pending-rubber-stamp.jpg'
                title='Across the Streams'
                imgDescription={acrossStreams} />

            <ProjectCube
                link='https://github.com/xocaid/SewWise'
                imgSrc='https://st.depositphotos.com/2268545/4354/i/450/depositphotos_43546685-stock-photo-pending-rubber-stamp.jpg'
                title='SeWise'
                imgDescription={sewWise} />

            {/* add cv button, will have different css from the header */}
            <CvButton/>
        </div>
    )
}
export default Projects;