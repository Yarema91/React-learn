import React from 'react';



//деструктуризация параметров прямо в аргументах функции
const Login = ({ onLogin }) => <button
onClick = {() => onLogin()}
  className="btn login">Login</button>
export default Login;