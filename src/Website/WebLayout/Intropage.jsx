import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Typewriter from 'typewriter-effect/dist/core';
import "./Intropage.css";
import { useEffect } from "react";

const Intropage=()=>{
    useEffect(()=>{
        new Typewriter('#typewriter', {
            strings: ['HI!guys my name is shashi welcome to my component liberary',
                'Thanks for visiting I hope you learn Something from this site',
                'Click the below "Button" to Entering the Website'
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