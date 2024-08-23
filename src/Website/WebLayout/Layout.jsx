import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content's"
const Final=({write,heading})=>{
    return(<>
        <Navbar />
        <div className="Container">
            <div className="Side_Bar">
        <Sidebar />
            </div>
            <div className="Main_Content">
        <Content heading={heading} />
        <div className="Rest_Content">{write}</div>
        <div className="Footer">
        <div className="Fotter_Block_1">
            <div className="Footer_image">
            <img src="./assests/fav.png" id="Footer_img"/>
            </div>
          <div className="Footer_Developer_Detail">
            <h2 id="Developer_heading">Made by</h2>
            <p id="Developer_Name">SHASHI BHATT</p>
          </div>
        </div>
        <div className="Fotter_Block_2"></div>
        <div className="Fotter_Block_3"></div>
        </div>
            </div>
        </div>

    </>)
}
export default Final;