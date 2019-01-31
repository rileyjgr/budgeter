import React, { Component } from "react";
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
import PlaidLink from 'react-plaid-link';
import './Login.css';

export default class Login extends Component {

    handleOnSuccess(token, metadata) {
        // send token to client server
      }
      handleOnExit() {
        // handle the case when your user exits Link
      }
      render() {
        return (
          <PlaidLink
            clientName="Your app name"
            env="sandbox"
            product={["auth", "transactions"]}
            publicKey="2e6dc9e41a09294ceebec38d1f1e76"
            onExit={this.handleOnExit}
            onSuccess={this.handleOnSuccess}>
            Login with your Bank Account.
          </PlaidLink>
        );
    }
}
