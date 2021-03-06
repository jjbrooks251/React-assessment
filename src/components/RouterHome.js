import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavBar } from './subcom/Navbar.js';
import { Home } from './subcom/Home.js';
import { Register } from './subcom/Register.js';
import { Login } from './subcom/Login.js';
import { List } from './subcom/List.js';

export default class RouterHome extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path='/' render={() => <Home />} />
                    <Route path='/register' render={() => <Register />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/list' render={() => <List />} />
                </div>
            </Router>
        )
    }
}