import React from "react";
import navbaricon from "../assests/fav.png"
const Navbar=()=>{
    return(<>
    <div className="Navbar">
        <div className="Navbar_Title">
        <img src={navbaricon} id="img" />
          <h1 id="navbar_heading">Component Library</h1>
        </div>     
        <div className="Navbar_Buttons">
            <div className="Navbar_Search">
            {/* <input type="text">
            </input> */}
          {/* <button><i class="fa-solid fa-magnifying-glass"></i></button> */}
            </div>
            <div className="Navbar_Dropdown">
                {/* <i class="fa-solid fa-caret-down"></i> */}
            </div>
        </div>
    </div>
    </>)
}
export default Navbar