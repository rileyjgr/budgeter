import React, { Component } from "react";
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
import AuthNavBar from './AuthNavBar';
import './Login.css';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

    
    }

        
    render() {
        const {email, password} = this.state;
    
        return (
            
            <div className = "container">
            <AuthNavBar/>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    
                    <h2 className="form-signin-heading">
                        Sign In
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
                        name="password" 
                        className="form-control" 
                        placeholder="Password"
                        value={password}
                        onChange={this.onChange}
                        autoFocus 
                        />
                        <span className="help-block"></span>
                    </div>

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>                
            </div>
        )
    }
}
