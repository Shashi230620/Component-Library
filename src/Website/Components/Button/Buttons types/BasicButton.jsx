import React,{useState} from 'react'


const BasicButton=()=> {
    const[Color,setColor]=useState('BASIC')
    const button1=()=>{
        setColor(change=>(change==="BASIC"?'DEFAULT':'BASIC'))
      }
  return (
    <>
       <div className='Button'>
        <button className={`btn1 ${Color==="BASIC"?"btn1":"Default"}`} onClick={button1}>{Color}</button>
      </div>
    </>
  )
}
export default BasicButton
