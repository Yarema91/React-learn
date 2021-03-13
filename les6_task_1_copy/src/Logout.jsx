import React from 'react';


const Logout = ({ onLogOut }) => <button
onClick = {() => onLogOut()}
  className="btn logout">Logout</button>
export default Logout;