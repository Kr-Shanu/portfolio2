import React from "react";

function Youtube() {
    return (
        <div id="youtube">
            <div id="projectTitle" className="row">
                <h1 id="projectHeading">My YouTube Videos!</h1>
            </div>
            <div id="cardsSection" className="row">

                {/* Need to add a carousel here */}





                <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                        <img height={"300px"} alt="notion" class="card-img-top" src="https://i0.wp.com/hiisbergh.com/wp-content/uploads/2021/06/NotionPC.png?fit=800%2C509&ssl=1"></img>
                        <div class="card-body">
                            <h5 class="card-title">Setup DataBase in Notion</h5>
                            <a href="https://youtu.be/WNPkhB3eba4" class="btn btn-danger">Watch On YT</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                        <img height={"300px"} alt="falstad" class="card-img-top" src="https://jjm.staff.sdu.dk/MMMI/PDI_Topics/Examples/LightSensor/imgA.gif"></img>
                        <div class="card-body">
                            <h5 class="card-title">Free Open Source Simulator</h5>
                            <a href="https://youtu.be/g2GzQ5u3XFQ" class="btn btn-danger">Watch On YT</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                        <img height={"300px"} alt="shortcuts" class="card-img-top" src="https://c8.alamy.com/comp/W04KBE/video-game-with-keyboard-retro-style-vector-illustration-design-W04KBE.jpg"></img>
                        <div class="card-body">
                            <h5 class="card-title">Important Keyboard shortcuts</h5>
                            <a href="https://youtu.be/no5hiaXgcQs" class="btn btn-danger">Watch On YT</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                        <img height={"300px"} alt="snippets" class="card-img-top" src="https://ph-files.imgix.net/d3d0cea6-2fde-405e-8a2a-3b67320718ac.png?auto=format"></img>
                        <div class="card-body">
                            <h5 class="card-title">Make Boiler lates on VS Code</h5>
                            <a href="https://youtu.be/4IEPM-6nMSw" class="btn btn-danger">Watch On YT</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Youtube;