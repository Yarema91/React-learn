import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';
import './index.scss';

// Отрисовывает компроненту Greeting

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }
render() {
  //  Вариант 2)
  // const button = (this.state.isLoggedIn)
  // ? <button onClick={this.handleLogin}>Login</button>
  // : <button onClick={this.handleLogout}>Login</button>

  // Вариант 1) let button;
  // if(this.state.isLoggedIn) {
  //   button = <button onClick={this.handleLogin}>Login</button>
  // } else {
  //   button = <button onClick={this.handleLogout}>Login</button>
  // }
  return(
    <div className="panel">
      <Greeting isLoggedIn={this.state.isLoggedIn}/>
        {(this.state.isLoggedIn) ? (<Logout onLogout={this.handleLogout}/>) : (<Login onLogin={this.handleLogin}/>)}
    </div>
  )
}
}

export default Auth;