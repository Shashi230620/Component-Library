import React from 'react'
import { Link } from "react-router-dom";

const OverviewTable=()=> {
  return (
    <>
      <div className="Components_Div">
       <div className="Component_Table">
       <Link to="/button"><button className="Component_button">BUTTONS</button></Link> 
       </div>
       <div className="Component_Table">
       <Link to="/overview"><button className="Component_button">OVERVIEW</button></Link> 
       </div>
       <div className="Component_Table" id="border">
       <Link to="/accordion"><button className="Component_button">ACCORDION</button></Link>
       </div>
       <div className="Component_Table">
       <Link to="/button"><button className="Component_button">BUTTONS</button></Link> 
       </div>
       <div className="Component_Table">
       <Link to="/overview"><button className="Component_button">OVERVIEW</button></Link> 
       </div>
       <div className="Component_Table" id="border">
       <Link to="/accordion"><button className="Component_button">ACCORDION</button></Link>
       </div>
       <div className="Component_Table">
       <Link to="/button"><button className="Component_button">BUTTONS</button></Link> 
       </div>
       <div className="Component_Table">
       <Link to="/overview"><button className="Component_button">OVERVIEW</button></Link> 
       </div>
       <div className="Component_Table" id="border">
       <Link to="/accordion"><button className="Component_button">ACCORDION</button></Link>
       </div>
       <div className="Component_Table">
       <Link to="/button"><button className="Component_button">BUTTONS</button></Link> 
       </div>
       <div className="Component_Table">
       <Link to="/overview"><button className="Component_button">OVERVIEW</button></Link> 
       </div>
       <div className="Component_Table" id="border">
       <Link to="/accordion"><button className="Component_button">ACCORDION</button></Link>
       </div>
      </div>
    </>
  )
}
export default OverviewTable
