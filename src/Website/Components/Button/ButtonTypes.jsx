import React from 'react'
import { useState } from 'react'
import BasicButton from './Buttons types/BasicButton'
import IconButton from './Buttons types/IconButton'

const ButtonTypes=()=> {
    const[Border,setBorder]=useState('Border')
    const[Round,setRound]=useState('10px')
    const [isOn, setIsOn] = useState(false);
   
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
      <BasicButton />
    <IconButton />
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