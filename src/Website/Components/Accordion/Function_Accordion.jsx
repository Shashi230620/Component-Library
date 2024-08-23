import React, { useState } from 'react'
import Accordion_Table from './Accordion_Table'
const Function_Accordion=()=> {
    const[NewwAccord,setAccord]=useState(null)
    const change=()=>{
      const div=document.querySelector(".click")
    }
  return (
    <>
      <Accordion_Table handler={change}
        className={'click'}/>
    </>
  )
}
export default Function_Accordion
