import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Authentication/Login';
import HomePage from './Pages/HomePage';
import Signup from './Authentication/Signup';
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col,  Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="login" exact path="/login" component={Login} />
                    <Route name="signup" exact path="/signup" component={Signup} />
                </div>
            </Router>
        )
    }
}
export default App;
