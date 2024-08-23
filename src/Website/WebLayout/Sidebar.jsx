import React from "react";
import { Link } from "react-router-dom";


const Sidebar=()=>{
    return(<>
        <Link to="/"><li><button id="Sidebar_Button">OVERVIEW</button></li></Link>
        <Link to="/button"><li><button id="Sidebar_Button">BUTTONS</button></li></Link>
        <Link to="/accordion"><li><button id="Sidebar_Button">ACCORDION</button></li></Link>
    
   
    </>)
}
export default Sidebar;