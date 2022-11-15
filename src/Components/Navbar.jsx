import React from "react";

function Navbar(){
    return(
        <div id="navbar">
            <img className="navbarImg" alt="home" src="https://cdn0.iconfinder.com/data/icons/my-house-1/512/015-myhouse-4096.png"></img>
            <a href="https://github.com/Kr-Shanu"><img className="navbarImg" alt="github"  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-4096.png"></img></a>
            <a href="https://www.linkedin.com/in/kr-shanu/"><img className="navbarImg" alt="linkedIn"  src="https://cdn2.iconfinder.com/data/icons/social-media-2199/64/social_media_isometric_14-linkedin-1024.png"></img></a>
            <a href="https://www.youtube.com/channel/UCnT6Z9ay-snq1c0lZkEtYjg"><img className="navbarImg" alt="Youtube"  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-4096.png"></img></a>
        </div>
    );
}

export default Navbar;