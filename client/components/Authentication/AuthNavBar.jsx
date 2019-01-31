import React, { Component } from 'react';
// import { Route, RouteHandler, Link } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
import './AuthNavBar.css';

class AuthNavBar extends Component {
  render() {
    return (
      <header>
        <Navbar fixedTop>
            <Navbar.Header pullLeft>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
            </Navbar.Header>
                <Nav>
                    <Navbar.Brand>
                        <Link to="/License">License</Link>
                    </Navbar.Brand>
                </Nav>
                <Nav>
                    <Navbar.Brand>
                        <Link to="/Login">{this.props.isLoggedIn ? 'Logout' : 'Login'}</Link>
                    </Navbar.Brand>
                </Nav>
                <Nav pullRight>
                    <Navbar.Brand>
                        <Link to="/Signup">{this.props.isLoggedIn ? 'Logout' : 'Register'}</Link>
                    </Navbar.Brand>
                </Nav>
        </Navbar>
      </header>
    )
  }
}
export default NavBar;
