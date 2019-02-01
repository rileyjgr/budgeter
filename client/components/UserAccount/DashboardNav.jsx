import React, { Component } from 'react';
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
import PlaidLink from 'react-plaid-link';
import './DashboardNav.css';

export default class DashboardNav extends Component {
    handleOnSuccess(token, metadata) {
        // send token to client server
      }
      handleOnExit() {
        // handle the case when your user exits Link
      }
  render() {
    return (
    <div className='navBar'>
        <Navbar bg='dark' variant='dark' expand='lg'>
        <Nav>
            <NavItem>
            <Navbar.Brand href="/">
                {/* <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /> */}

                {'Budgeter'}
                </Navbar.Brand>
            </NavItem>
            <NavItem>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>
                <Nav.Link href="/Logout">Logout</Nav.Link>
                <PlaidLink
                    clientName='Budgeter'
                    env='sandbox'
                    product={['auth', 'transactions']}
                    publicKey='2e6dc9e41a09294ceebec38d1f1e76'
                    onExit={this.handleOnExit}
                    onSuccess={this.handleOnSuccess}>
                    Login with your Bank Account.
                </PlaidLink>
            </Nav>
            </NavItem>
        </Nav>
        </Navbar>
    </div>
    );
  }
}