import React from 'react'
import footericon from "../assests/fav.png"

const Footer=()=> {
  return (
    <>
      <div className="Footer">
        <div className="Fotter_Block_1">
            <div className="Footer_image">
            <img src={footericon} id="Footer_img"/>
            </div>
          <div className="Footer_Developer_Detail">
            <h2 id="Developer_heading">Made by</h2>
            <p id="Developer_Name">SHASHI BHATT</p>
          </div>
        </div>
        <div className="Fotter_Block_2"></div>
        <div className="Fotter_Block_3"></div>
        </div>
    </>
  )
}
export default Footer;
