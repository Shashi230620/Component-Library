import React from 'react'

const Classicfication=(props)=> {
  return (
    <>
       <div className='Button_Basic'>
          <h1 id='btn_basic_heading'>{props.btn_heading}</h1>
          <p id='btn_basic_para'>{props.btn_para}</p>
            <div className='btn_Basic_image'>
           <img src={props.btn_image} id='Basic_btn_img'/>
            </div>
          </div>  
    </>
  )
}
export default Classicfication
