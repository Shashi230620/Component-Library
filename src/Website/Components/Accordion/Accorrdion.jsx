import React from 'react'
import Final from '../../WebLayout/Layout'
import Accordion_heading from './Accordion_heading';
import Accordion_Parts from './Accordion_Parts';
import Accordion_Table from './Accordion_Table';
import "./Accordion.css";

const Accorrdion=()=> {
  return (
    <>
      <Final heading={"ACCORDION"}
      write={
        <>
       <Accordion_heading />
       <Accordion_Table
        id_1={"Accordion 1"}
        content_1={"Content 1"}
        id_2={"Accordion 2"}
        content_2={"Content 2"}
        id_3={"Accordion 3"}
        content_3={"Content_3"}
        id_4={"Accordion 4"}
        content_4={"Content 4"}
        />
        <Accordion_Parts />
      
        </>
      }
      />
    </>
  )
}
export default Accorrdion
