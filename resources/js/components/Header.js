import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>

                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
            </Router>
        );
    }
}

