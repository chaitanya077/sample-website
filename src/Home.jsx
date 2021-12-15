import React from 'react';
import web from "../src/images/img.svg";
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home = ()=>{
    return (
        <>
    

      <Common name='Grow your business with' Hname1="We provides always our best service for our clients and always" Hname2="try to achieve our client's trust and satisfaction" imgsrc={web} visit='/service' btname='Get Started' />
        </>
    )
};
export default Home;