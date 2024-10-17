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
       <Accordion_heading />
       <Accordion_Table
        id_1={"Q1.What is our Planet Name"}
        content_1={"Ans.Earth"}
        id_2={"Q2.How many Moons Our Solor System Have"}
        content_2={"Ans.Only One"}
        id_3={"Q3.How Many Planets Our solar System Have"}
        content_3={"Ans.Their Are Eight Planets"}
        id_4={"Q4.How Is The Largest Planet In Our Solar System"}
        content_4={"Ans.Jupiter"}
        />
      
        <Accordion_Parts />
        </>
      }
      />
    </>
  )
}
export default Accorrdion
