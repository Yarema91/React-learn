import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';
import './index.scss';

// Отрисовывает компроненту Greeting
console.log('Hello Yarema')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    }
  }

  hendleLogIn = () => {
   this.setState({ 
     isLogin: true })

  };

  hendleLogOut = () => {
    this.setState({ 
      isLogin: false })
 
  };

  render(){
    return(
      <div className='panel'>
        <Greeting isLogin={this.state.isLogin}/>
        {(this.state.isLogin) ? (<Logout onLogOut={this. hendleLogOut }/>) : (<Login onLogIn={this.hendleLogIn}/>)}
      </div>
    )
}
  
}

export default App;