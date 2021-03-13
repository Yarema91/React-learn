import React from 'react';


//деструктуризация параметров прямо в аргументах функции
const Logout = ({ onLogout }) => <button
onClick = {() => onLogout()}
  className="btn logout">Logout</button>
export default Logout;