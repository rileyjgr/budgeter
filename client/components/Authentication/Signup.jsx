import React, { Component } from "react";
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
import './Signup.css';

export default class Signup extends Component {
    state = {
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

    
    }

        
    render() {
        const {email, confirmEmail, password, confirmPassword} = this.state;
    
        return (
            <div className = "container">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    
                    <h2 className="form-signin-heading">
                        Input your information below to create an account.
                    </h2>

                    <div className="form-group">
                        <input 
                        type="text" 
                        name="email" 
                        className="form-control" 
                        placeholder="Email Address"
                        value={email}
                        onChange={this.onChange}
                        autoFocus 
                        />
                        <span className="help-block"></span>
                    </div>

                    <div className="form-group">
                        <input 
                        type="text" 
                        name="confirmEmail" 
                        className="form-control" 
                        placeholder="Confirm Email Address"
                        value={confirmEmail}
                        onChange={this.onChange}
                        autoFocus 
                        />
                        <span className="help-block"></span>
                    </div>

                    <div className="form-group">
                        <input 
                        type="text" 
                        name="password" 
                        className="form-control" 
                        placeholder="Password"
                        value={password}
                        onChange={this.onChange}
                        autoFocus 
                        />
                        <span className="help-block"></span>
                    </div>

                    <div className="form-group">
                        <input 
                        type="text" 
                        name="confirmPassword" 
                        className="form-control" 
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={this.onChange}
                        autoFocus 
                        />
                        <span className="help-block"></span>
                    </div>

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>                
            </div>
        );
    }
}
