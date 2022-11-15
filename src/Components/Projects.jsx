import React from "react";
import Carousel from "./Carousel";

function Projects(){
    return(
        <div id="projects">
            <div className="row" id="projectTitle">
                <h1 id="projectHeading">Welcome to my Projects!</h1>
            </div>
            <Carousel/>
        </div>
    );
}

export default Projects;