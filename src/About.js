
import React from 'react';
import web from "../src/images/1710300.svg";
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = ()=>{
    return (
        <>
           <Common name= 'About  US' imgsrc={web} visit='/contact' btname='Contact Now' />
        </>
    )
};
export default About;