import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import ListProducts from './ListProducts';
import Details from './Details';

//1. routing  2 page
// About ListProducts:
// 1.1 Modal windows new Products
//2. create template oblects list
//3.  add 2 sorts(names, quantities) 
// and delete product with confirmation
//4. create model window with New Products 

// About Details:
//1. modal window 'edit'

//create Product and Coment


function App() {
  return (
    <div className="page">
      <ul className='navigation'>
        <li className="navigation__item"><Link to="/">ListProducts</Link></li>
        <li className="navigation__item"><Link to="/details">Details</Link></li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <ListProducts />
        </Route>
        <Route path='/details' component={Details} />
      </Switch>
    </div>
  );
}

export default App;
