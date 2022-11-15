import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row">
                        <div className="col projInfo">
                            <h2>FLAMES Game</h2>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5>A lovely game to determine once lovedones by simply entering our names!
                            You simply need to add your name and name of your crush. And according
                            to the FLAMES rules your names would be evalueated and a satisfactory
                            result would be generated prediction what would be your relation with your
                            crush. It is only a simple assertion and not a genuine prediction so in case 
                            you get something unexpected don't feel bad.</h5>
                            <br></br>
                            <br></br>
                            <h4>FRAMEWORKS: HTML, CSS, REACTJS, JavaScript, Bootstrap</h4>
                            <br></br>
                            <br></br>
                            <a href="https://kr-shanu.github.io/flames2/"><button className="btn btn-lg btn-dark">Try it out</button></a>
                        </div>
                        <div className="col">
                            <img className="projImg" height={"350px"} alt="project1Image" src="https://www.pngarts.com/files/10/Cute-Couple-PNG-Image-Transparent-Background.png"></img>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div className="row">
                        <div className="col projInfo">
                            <h2>Books Directory</h2>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5>Books directory is a REACT application which stores various books name along
                            with its images in form of cards. It gives you an option to search books 
                            which is active search method and is very spontaneous. It also contains a small 
                            clock to tell you the time all the way of your visit. Additional to this 
                            it also has a favourites section, which will contain all the books which you 
                            like the most. In order to mark a book as favourite we need to simply click the 
                            heart icon present along side the books card and as soon as we click the favourite
                            button on the navbar we would be directed to the favourite books section.</h5>
                            <br></br>
                            <h4>FRAMEWORKS: HTML, CSS, REACTJS, JavaScript, Bootstrap</h4>
                            <br></br>
                            <a href="https://kr-shanu.github.io/Books-Directory-React-Application/"><button className="btn btn-lg btn-dark">Try it out</button></a>
                        </div>
                        <div className="col">
                            <img className="projImg" width={"400px"} height={"350px"} alt="project1Image" src="https://i.pinimg.com/originals/2e/6d/b1/2e6db178796d1417b01eea9f1dcefd74.gif"></img>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row">
                        <div className="col projInfo">
                            <h2>Weather Forecasting Website</h2>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5>A simple model of forecasting weather with the help of API. This application would let 
                            you know the temperature, windspeed as well as humidity of the place of your desire. It
                            fetches data from the user regarding the region they want to know weather about and 
                            then it requests the open weather API services to fetch the weather condition of the place
                            and then shows to the user within fractions of seconds.</h5>
                            <br></br>
                            <br></br>
                            <h4>FRAMEWORKS: HTML, CSS, NODEJS, JavaScript, Bootstrap, Express, Open Weather API</h4>
                            <br></br>
                            <a href="https://github.com/Kr-Shanu/Working_Weather_Reporting"><button className="btn btn-lg btn-dark">Try it out</button></a>
                        </div>
                        <div className="col">
                            <img className="projImg" height={"350px"} alt="project1Image" src="https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif"></img>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;