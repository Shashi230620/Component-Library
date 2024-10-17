import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Typewriter from 'typewriter-effect/dist/core';
import "./Intropage.css";
import { useEffect } from "react";

const Intropage=()=>{
    useEffect(()=>{
        new Typewriter('#typewriter', {
            strings: ['WELCOME TO MY COMPONENT LIBERARY','HOPE YOU LEARN SOMETHING',
                'CLICK BELOW TO START'
            ],
            autoStart: true,
            delay:"40",
            deleteSpeed:"40",
            loop:true
          });
    },[])
    return(
        <>
        <Navbar />
        <div className="Introduction">
            <h1 id="typewriter"></h1>
        </div>
        <Link to="/overview"><li><button id="Start_Button">Start</button></li></Link>
        </>
    )
}
export default Intropage;