import React from 'react';
import Final from '../../WebLayout/Layout';
import ButtonTypes from './ButtonTypes';
import Heading from './Heading';
import Buttonefine from './Buttonefine';
import "./Button.css";

const Buttons = () => {
  return (
    <Final 
      heading="BUTTONS" 
      write={
        <>
          <Heading />
          <ButtonTypes />
          <Buttonefine />
        </>
      }
    />
  );
};

export default Buttons;
