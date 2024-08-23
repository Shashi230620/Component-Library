import React from 'react'
import { useState } from 'react'

const ButtonTypes=()=> {
    const[Color,setColor]=useState('BASIC')
    const[Border,setBorder]=useState('Border')
    const[Round,setRound]=useState('10px')
    const [isOn, setIsOn] = useState(false);
    const button1=()=>{
      setColor(change=>(change==="BASIC"?'DEFAULT':'BASIC'))
    }
    const button4 =()=>{
     setBorder(redBorder=>(redBorder==="Border"?"Red":"Border"))
    }
    const RoundBorder=()=>{
      setRound(item=>(item==='10px'?"50px":"10px"))
    }
    const handleToggle = () => {
      setIsOn(prevState => !prevState);
    };
  
  return (
    <>
    <div className='Different_Buttons'>
    <h1 id='btn_h1'>Types of Buttons</h1>
    <div className='Types_Buttons'>
      <div className='Button'>
        <button className={`btn1 ${Color==="BASIC"?"btn1":"Default"}`} onClick={button1}>{Color}</button>
      </div>
      <div className='Button'>
        <button id='btn2'><i class="fa-solid fa-phone"></i></button>
      </div>
      <div className='Button'>
      <div
        className={`toggle-switch ${isOn ? 'on' : 'off'}`}
        onClick={handleToggle}
         >
  <div className={`toggle-slider ${isOn ? 'on' : 'off'}`}></div>
</div>
      </div>
      <div className='Button'>
        <button className={`btn4 ${Border==="Border"?"btn4":"redBorder"}`}onClick={button4}>{Border}</button>
      </div>
      <div className='Button'>
        <button className={`btn5 ${Round==="10px"?"btn5":"RoundBtn"}`} onClick={RoundBorder}>{Round}</button>
      </div>
      </div>  
    </div>  
    </>
  )
}
export default ButtonTypes