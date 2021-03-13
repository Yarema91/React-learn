import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

//деструктуризация параметров прямо в аргументах функции
const Greeting = ({ isLoggedIn }) => isLoggedIn
  ? (<UserGreeting />)
  : (<GuestGreeting />)


export default Greeting;