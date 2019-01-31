import React, { Component } from "react";
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        
        this.state = {email: '', team: '', password1:'', password2:'', logo:''}
        this.onChange = this.onChange.bind(this);
        }

        onChange(e) {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value});
        }

        getValidationState() {
            const length = this.state.email.length;
            if (length > 10) return 'success';
            else if (length > 5) return 'warning';
            else if (length > 0) return 'error';
            return null;
        }
        
        handleSubmit(e) {
            e.preventDefault()
            console.log(e)
            var username = this.state.username.trim()
            var password1 = this.state.password1.trim()
            var password2 = this.state.password2.trim()

            if (!username || !password1 || !password2) 
                return
            else if (password2 !== password1)
                this.setState({
                error: "Passwords didn't match",
                username: "",
                password1: "",
                password2: ""
            })
        }

        
    render() {
    return (
        <div>
            <Navbar/>
            <div className="wrapper tabled">
                <div className="stage" id="signs">
                    <div className="signInForms">
                        <h2 className="text-center registerTitle"><strong>Register your Chime channel here!</strong></h2><br/>
                        <form className="text-center">
                            <div>
                                <FormGroup
                                controlId="email"
                                validationState={this.getValidationState()}
                                >
                                <FormControl
                                    text="Email Address" 
                                    ref="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email Address"
                                    defaultValue={this.state.email} 
                                    validate={this.validateEmail}
                                    value={this.state.email}
                                    onChange={this.onChange} 
                                    onSubmit={this.handleSubmit}
                                    errorMessage="Email is invalid"
                                    emptyMessage="Email can't be empty"
                                    errorVisible={this.state.showEmailError}
                                />
                                <FormControl.Feedback />
                                </FormGroup>
                            </div>

                            <div>
                                <FormGroup
                                controlId="company"
                                >
                                <ControlLabel>Company Name</ControlLabel>
                                <FormControl
                                    text="Team Name" 
                                    ref="teamName"
                                    name="team"
                                    placeholder="Team Name"
                                    validate={this.validateTeamName}
                                    value={this.state.team}
                                    onChange={this.onChange} 
                                    onSubmit={this.handleSubmit}
                                    emptyMessage="Team Name can't be empty"
                                />
                                <FormControl.Feedback />
                                </FormGroup>
                            </div>

                            <div>
                                <FormGroup
                                controlId="password"
                                >
                                <ControlLabel>Enter Password</ControlLabel>
                                <FormControl
                                    text="Team Name" 
                                    ref="password1"
                                    type="password"
                                    name="password1"
                                    placeholder="Password"
                                    validate={this.validatePassword1}
                                    value={this.state.password1}
                                    onChange={this.onChange} 
                                    onSubmit={this.handleSubmit}
                                    emptyMessage="Password can't be empty"
                                />
                                <FormControl.Feedback />
                                </FormGroup>
                            </div>

                            <div>
                                <FormGroup
                                controlId="password2"
                                >
                                <ControlLabel>Confirm Password</ControlLabel>
                                <FormControl
                                    text="Confirm Password" 
                                    ref="password2"
                                    type="password"
                                    name="password2"
                                    placeholder="Confirm"
                                    validate={this.validatePassword2}
                                    value={this.state.password2}
                                    onChange={this.onChange} 
                                    onSubmit={this.handleSubmit}
                                    emptyMessage="Password confirmation can't be empty"
                                />
                                <FormControl.Feedback />
                                </FormGroup>
                            </div>

                            <div>
                                <FormGroup
                                controlId="logo"
                                >
                                <br/>
                                <ControlLabel>Logo</ControlLabel>
                                <FormControl
                                    text="Logo" 
                                    ref="logo"
                                    name="email"
                                    type="file"
                                    placeholder="File"
                                    defaultValue={this.state.logo} 
                                    validate={this.validateLogo}
                                    value={this.state.logo}
                                    onChange={this.onChange} 
                                    onSubmit={this.handleSubmit}
                                    errorMessage="Logo is empty"
                                    emptyMessage="Logo can't be empty"
                                    errorVisible={this.state.showLogoError}
                                />
                                <FormControl.Feedback />
                                </FormGroup>
                            </div>
                            <br/>
                            <div>
                                <Button bsStyle="primary">Register</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
export default Signup;
