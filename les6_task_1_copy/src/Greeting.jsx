import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = ({ isLogin }) => 
    isLogin ? (<UserGreeting/>) 
     : (<GuestGreeting/>) 

export default Greeting;

