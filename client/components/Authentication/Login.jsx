import React, { Component } from "react";
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <Navbar/>
      <div className="wrapper tabled">
        <div className="stage" id="signs">
            <div className="signInForms">
            <h2 className="text-center registerTitle"><strong>Login to your company dashboard</strong></h2><br/>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                      <div>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                      </div>

                    <div>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            />
                        </FormGroup>
                    </div>

                    <div>
                        <Button
                            block
                            bsSize="medium"
                            bsStyle="info"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
