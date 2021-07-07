import React,{ useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Product from './FormProduct';
import ProductItem from './ProductItem';
import ListProducts from './ListProducts';
import FormProduct from './FormProduct';


const Details = () => <p>Details</p>



function App() {

  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ListProducts} />
          <Route path="/newform" component={FormProduct} />
          <Route path="/details" component={Details} />
          {/* delete */}
          {/* edit */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
