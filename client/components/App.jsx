import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Authentication/Login';
import HomePage from './Pages/HomePage';
import Signup from './Authentication/Signup';
import Dashboard from './UserAccount/Dashboard';
import Settings from './UserAccount/Settings';
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col,  Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="login" exact path="/login" component={Login} />
                    <Route name="signup" exact path="/signup" component={Signup} />
                    <Route Name="dashboard" exact path="/dashboard" component={Dashboard} />
                    <Route Name="settings" exact path="/settings" component={Settings} />
                </div>
            </Router>
        );
    }
}
export default App;
