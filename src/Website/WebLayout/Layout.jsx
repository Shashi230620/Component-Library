import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content's"
import Footer from "./Footer";
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
        <Footer />
            </div>
        </div>

    </>)
}
export default Final;