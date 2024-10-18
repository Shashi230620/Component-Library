import React from 'react'
import Classicfication from './Classicfication';
import details from "./Array.js";
const Buttonefine=()=> {
  return (
    <>
       {details.map((value)=>{
          return(
            <Classicfication btn_heading={value.btn_heading}
            btn_para={value.btn_para}
             btn_image={value.btn_image}
            />
          )
        })}
    </>
  )
}
export default Buttonefine
