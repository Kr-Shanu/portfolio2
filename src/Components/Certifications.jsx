import React from "react";
import AWS from "./Certificate/AWS";
import ISROOne from "./Certificate/ISROOne";
import ISROTwo from "./Certificate/ISROTwo";
import MicrosoftCertificateOne from "./Certificate/microsoftIgnite";

function Certifications() {
    return (
        <div id="certificates">
            <div className="row" id="projectTitle">
                <h1 id="projectHeading">My Certifications!</h1>
            </div>
            <div id="cardsSection" className="row">
                <MicrosoftCertificateOne/>
                <ISROOne/>
                <ISROTwo/>
                <AWS/>
            </div>
        </div>
    );
}

export default Certifications;