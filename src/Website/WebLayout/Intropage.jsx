import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Typewriter from 'typewriter-effect/dist/core';
import "./Intropage.css";
import { useEffect } from "react";
import introimage from "../assests/fav.png"

const Intropage=()=>{
    useEffect(()=>{
        new Typewriter('#typewriter', {
            strings: ['Component Library','Access By Clicking'
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
        <div className="intropage">
            <div className="intropage_image">
            <img src={introimage} id="introimage"/>
            </div>
        <div className="Introduction">
            <h1 id="typewriter"></h1>
        </div>
        </div>
       
        <Link to="/overview"><li><button id="Start_Button"><i class="fa-solid fa-arrow-right" id="iconarrow"></i></button></li></Link>
        </>
    )
}
export default Intropage;