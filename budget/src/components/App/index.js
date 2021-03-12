// import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Statistic from '../Statistic';
import { Wrapper, GlobalStyle } from './styles';

const App = () => {

    return (
        <Router>
            <Wrapper >
                <GlobalStyle />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/statistic">Statistic</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/statistic">
                        <Statistic />
                    </Route>
                    <Route exect path="/">
                        <Home />
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    )
}

export default App;